import React, { useState } from "react";
import { Product } from "@/types/product";
import useSocket from "@/hooks/useSocket";
import ProductImageModal from "./ProductImageModal";
import { toast } from "react-toastify";
import { AddToCartButton, Card, CardBody, ImageContainer, Price, StockStatus } from "./styles";
interface ItemInterface {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  inventory:number;
}
interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const socket = useSocket();
  const [isModalOpen, setModalOpen] = useState(false);

  const productImages =
    product.images.length > 0
      ? product.images
      : ["/assets/jpg/mapple leaf.jpg"];

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

const handleAddToCart = (e: React.MouseEvent) => {
  e.stopPropagation();
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const existingItem = cart.find((item:ItemInterface) => item.id === product._id);
  const currentQuantity = existingItem ? existingItem.quantity : 0;
  if (currentQuantity >= product.inventory) {
    toast.warning("Cannot add more. Reached maximum inventory limit.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
    return;
  }

  if (product.inventory > 0) {
    socket?.emit("cart:add", {
      userId: localStorage.getItem("userId"),
      item: {
        id: product._id,
        title: product.title,
        price: product.price,
        quantity: 1,
        inventory: product.inventory,
        image: product.images[0] || "/assets/jpg/mapple leaf.jpg",
      },
    });
  } else {
    toast.error("This product is out of stock!", {
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
    <>
      <Card onClick={handleOpenModal}>
        <ImageContainer>
          <img src={productImages[0]} alt={product.title} />
          <AddToCartButton onClick={handleAddToCart}>
            Add to Cart
          </AddToCartButton>
        </ImageContainer>
        <CardBody>
          <h3>{product.title}</h3>
          <p>Inventory: {product.inventory}</p>
          <Price>${product.price.toFixed(2)}</Price>
          <StockStatus isAvailable={product.inventory > 0}>
            {product.inventory > 0 ? "In Stock" : "Out of Stock"}
          </StockStatus>
        </CardBody>
      </Card>

      <ProductImageModal
        images={productImages}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={product.title}
      />
    </>
  );
};

export default ProductCard;










