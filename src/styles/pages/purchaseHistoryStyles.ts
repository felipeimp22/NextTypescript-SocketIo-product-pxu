import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 50px 20px;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 30px;
`;

export const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const HistoryItem = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.02);
  }
`;

export const ItemDetails = styled.div`
  h4 {
    margin: 0 0 10px;
    color: ${(props) => props.theme.colors.primary};
  }

  p {
    margin: 5px 0;
    color: #333;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 10px;
`;

export const PageButton = styled.button`
  background: ${(props) => props.theme.colors.menuBackground};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    opacity: 0.8;
  }
`;
