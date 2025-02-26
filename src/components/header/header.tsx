import React, { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import {
  HeaderContainer,
  HamburgerButton,
  ActionButtons,
  SlidingMenu,
  CartIconContainer,
  CartModal,
  CartItem,
  CartImage,
  CartDetails,
  QuantityButton,
  RemoveButton,
  BuyButton,
} from "./styles";
import { useRouter } from "next/router";
import { CTAButton } from "@/styles/shared/CTAButton";
import useSocket from "@/hooks/useSocket";
import Image from "next/image";
import { purchase } from "@/services/purchase";
import { toast } from "react-toastify";

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  inventory:number;
}

const Header: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setCartOpen] = useState(false);
  const socket = useSocket();
  const router = useRouter();
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  const handleChangePage = (path: string) => {
    router.push(path);
  };

  useEffect(() => {
    const handleCartUpdate = (updatedCart: CartItem[]) => {
      console.log("Received cart:update event:", updatedCart);
      setCartItems(() => [...updatedCart]);
    };
    if (socket) {
      socket.on("cart:update", handleCartUpdate);
      socket.emit("cart:get");
    }

    return () => {
      socket?.off("cart:update", handleCartUpdate);
    };
  }, [socket]);

  const increaseQuantity = (itemId: string) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item && item.quantity <= item?.inventory) {
      const updatedCart = cartItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
  
      setCartItems(updatedCart);
  
      socket?.emit("cart:add", {
        userId: localStorage.getItem("userId"),
        item: {
          id: itemId,
          quantity: 1,
        },
      });
    } else {
      toast.warning("Cannot add more. Reached maximum inventory limit.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
  };
  

  const decreaseQuantity = (itemId: string) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    setCartItems(updatedCart);

    socket?.emit("cart:updateQuantity", {
      userId: localStorage.getItem("userId"),
      itemId: itemId,
      quantity: -1,
    });
  };

  const removeItem = (itemId: string) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
    socket?.emit("cart:remove", itemId);
  };

  const handlePurchase = async () => {
    try {
      const response = await purchase(cartItems);

      if (response) {
        toast.success("Purchase successful!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        setCartItems([]);
        socket?.emit("cart:update", cartItems);
      } else {
        toast.error("Purchase failed. Please try again.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      console.error("Failed to purchase products:", error);
      toast.error("Purchase failed. Please try again.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <HeaderContainer>
      <HamburgerButton onClick={toggleMenu} aria-label="Menu">
        <div></div>
        <div></div>
        <div></div>
      </HamburgerButton>

      <ActionButtons>
        {!isAuthenticated ? (
          <>
            <a onClick={() => handleChangePage("/login")} className="login">
              Login
            </a>
            <CTAButton onClick={() => handleChangePage("/register")}>
              Register
            </CTAButton>
          </>
        ) : (
          <>
            <CTAButton onClick={logout}>Logout</CTAButton>
            <CartIconContainer onClick={() => setCartOpen(!isCartOpen)}>
              <Image
                src="/assets/svg/shopping-cart.svg"
                alt="Cart"
                width={30}
                height={30}
              />
              <span>{cartItems.length}</span>
            </CartIconContainer>
          </>
        )}
      </ActionButtons>

      {isCartOpen && (
        <CartModal>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem key={item.id}>
                <CartImage src={item.image} alt={item.title} />
                <CartDetails>
                  <h4>{item.title}</h4>
                  <p>
                    Unit price ${item.price ? item.price.toFixed(2) : "0.00"}
                  </p>
                  <p>
                    total price $
                    {item.price
                      ? Number(item.price.toFixed(2)) * item.quantity
                      : "0.00"}
                  </p>

                  <span>Qty: {item.quantity}</span>
                  <QuantityButton onClick={() => increaseQuantity(item.id)}>
                    +
                  </QuantityButton>
                  <QuantityButton onClick={() => decreaseQuantity(item.id)}>
                    -
                  </QuantityButton>
                  <RemoveButton onClick={() => removeItem(item.id)}>
                    Remove
                  </RemoveButton>
                </CartDetails>
              </CartItem>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
          {cartItems.length > 0 && (
            <BuyButton onClick={handlePurchase}>BUY</BuyButton>
          )}
        </CartModal>
      )}

      <SlidingMenu isOpen={isMenuOpen}>
        <button className="close" onClick={toggleMenu}>
          ×
        </button>
        <ul>
          {!isAuthenticated ? (
            <>
              <li>
                <a onClick={() => handleChangePage("/")}>Landing</a>
              </li>
              <li>
                <a onClick={() => handleChangePage("/login")}>Login</a>
              </li>
              <li>
                <a onClick={() => handleChangePage("/register")}>Register</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a onClick={() => handleChangePage("/home")}>Home</a>
              </li>
              <li>
                <a onClick={() => handleChangePage("/registerItems")}>
                  Register Item
                </a>
              </li>
              <li>
                <a onClick={() => handleChangePage("/purchaseHistory")}>
                  purchase History
                </a>
              </li>
            </>
          )}
        </ul>
        <div className="footer">
          <a href="/privacy">Privacy</a>
          <a href="/policy">Policy</a>
        </div>
      </SlidingMenu>
    </HeaderContainer>
  );
};

export default Header;
