import styled from 'styled-components';

export const CTAButton = styled.button`
  background: ${({ theme }) => theme.colors.menuBackground};
  color: #fff;
  padding: 15px 30px;
  font-size: 1.1rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.menuBackground};
    transition: 0.6s;
  }
`;