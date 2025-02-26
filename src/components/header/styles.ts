import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  background-color: transparent;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 60px;
`;

export const HamburgerButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 30px;
  height: 24px;
  cursor: pointer;

  div {
    width: 100%;
    height: 3px;
    background: ${(props) => props.theme.colors.text};
    /* background: linear-gradient(to right, #ff4500, #ff00ff, #1e90ff); */
    border-radius: 2px;
    transition: all 0.3s ease-in-out;
  }

  &:hover div {
    opacity: 0.7;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;

  .login {
    background: none;
    color: ${(props) => props.theme.colors.menuBackground};
    border: none;
    font-size: ${(props) => props.theme.sizes.fontSize};
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    transition: all 0.3s ease-in-out;
    justify-content: center;
    align-items: center;
    display: flex;
    &:hover {
      opacity: 0.5;
    }
  }

  .register {
    background: ${(props) => props.theme.colors.primary};
    color: white;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const SlidingMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 70%;
  max-width: 300px;
  background: ${(props) => props.theme.colors.menuBackground};
  color: ${(props) => props.theme.colors.text};
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease-in-out;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  padding: 2rem;

  button.close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 2rem;
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 2rem 0;

    li {
      margin-bottom: 1rem;

      a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.primary};
        font-size: 1.2rem;
        text-transform: capitalize;
        display: block;
        transition: color 0.3s ease;
        cursor: pointer;

        &:hover {
          color: ${(props) => props.theme.colors.primary};
          opacity: 0.5;
          transition: 0.3s;
        }
      }
    }
  }

  .footer {
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    font-size: 0.9rem;

    a {
      margin-right: 1rem;
      color: ${(props) => props.theme.colors.text};

      &:hover {
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }
`;



export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;

  button {
    background: #ff6f61;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;

    &:hover {
      background: #e55d4d;
    }
  }
`;

export const CartFooter = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

export const CartOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999;
`;

export const CartIconContainer = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: flex-end;

  span {
    background: red;
    color: white;
    border-radius: 50%;
    padding: 0.2rem 0.5rem;
    font-size: 0.8rem;
    position: absolute;
    
    top: 2px;
    right: -10px;
  }
`;

export const CartModal = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 300px;
  max-height: 400px;
  overflow-y: auto;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 1rem;
  z-index: 100;
`;


export const CartImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
`;

export const CartDetails = styled.div`
  flex-grow: 1;
  p,span{
    opacity: 0.6;
  }
`;

export const BuyButton = styled.button`
  background: #ff6f61;
  color: white;
  border: none;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 10px;

  &:hover {
    background: #e55d4d;
  }
`;

export const QuantityButton = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: #fff;
  border: none;
  padding: 5px 10px;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;

  &:hover {
    background: ${(props) => props.theme.colors.secondary};
  }
`;

export const RemoveButton = styled.button`
  background: red;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;

  &:hover {
    background: darkred;
  }
`;
