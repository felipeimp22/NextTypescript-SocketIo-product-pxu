import styled from 'styled-components';

export const CTAButtonGradient = styled.button`
  background: linear-gradient(to right, #ff4500, #ff00ff, #1e90ff);
  color: #fff;
  padding: 15px 30px;
  font-size: 1.1rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to right, #ff4500, #ff00ff, #1e90ff);
    opacity: 0.5;
    transition: 0.6s;
  }
`;