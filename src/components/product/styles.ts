import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  margin-top: 4vh;
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FilterInput = styled.input`
  padding: 10px;
  width: 30%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  @media (max-width: 768px) {
    width: 100%;

  }
`;

export const FilterSelect = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const SkeletonGrid = styled(ProductGrid)`
  opacity: 0.3;
`;

export const SkeletonCard = styled.div`
  background: #f0f0f0;
  border-radius: 10px;
  height: 300px;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0% {
      opacity: 0.9;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.9;
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;



export const PageNumber = styled.span`
  margin: 0 10px;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const AddToCartButton = styled.button`
  position: absolute;
  bottom: -50px;
  left: 0;
  width: 100%;
  background: #ff6f61;
  color: #fff;
  border: none;
  padding: 10px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  opacity: 0;

  &:hover {
    background: #e55d4d;
  }
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: scale(1.03);
  }

  &:hover ${AddToCartButton} {
    opacity: 1;
    bottom: 0;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  background: #f3f3f3;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-radius: 8px;
  }
`;

// const ImageContainer = styled.div`
//   img {
//     max-width: 100%;
//     max-height: 400px;
//     border-radius: 8px;
//   }
// `;

export const CardBody = styled.div`
  padding: 1rem;
  text-align: center;

  h3 {
    font-size: 1.2rem;
    margin: 0.5rem 0;
    font-weight: bold;
    text-transform: capitalize;
  }
`;

export const Price = styled.p`
  font-size: 1.1rem;
  color: #333;
  font-weight: bold;
`;

export const StockStatus = styled.span<{ isAvailable: boolean }>`
  display: block;
  margin-top: 0.5rem;
  color: ${(props) => (props.isAvailable ? "green" : "red")};
  font-weight: bold;
`;

export const ModalOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.6);
display: flex;
justify-content: center;
align-items: center;
z-index: 1000;
`;

export const ModalContent = styled.div`
background: white;
padding: 2rem;
border-radius: 8px;
text-align: center;
max-width: 600px;
width: 90%;
position: relative;

h2 {
  margin-bottom: 1rem;
}
`;

export const NavigationButtons = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;

  button {
    background: #ff6f61;
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.5rem;

    &:hover {
      background: #e55d4d;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ff6f61;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #e55d4d;
  }
`;