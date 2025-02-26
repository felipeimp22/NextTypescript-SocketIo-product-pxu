import styled from 'styled-components';

export const CTASquareButton = styled.button`
  background-color: ${(props) => props.theme.colors.menuBackground};
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    opacity: 0.5;
    transition: 0.6s;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;