import React, { useState } from "react";
import {
  CloseButton,
  ImageContainer,
  ModalContent,
  ModalOverlay,
  NavigationButtons,
} from "./styles";

interface ProductImageModalProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const ProductImageModal: React.FC<ProductImageModalProps> = ({
  images,
  isOpen,
  onClose,
  title,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <ImageContainer>
          <img
            src={images[currentImageIndex]}
            alt={`${title} image ${currentImageIndex + 1}`}
          />
        </ImageContainer>
        {images.length > 1 && (
          <NavigationButtons>
            <button onClick={handlePrev}>{"<"}</button>
            <button onClick={handleNext}>{">"}</button>
          </NavigationButtons>
        )}
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ProductImageModal;
