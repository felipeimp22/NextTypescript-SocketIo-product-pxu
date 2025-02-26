import styled from 'styled-components';

export const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

export const HeroSection = styled.section`
  background: url('/assets/jpg/hero-bg.jpg') no-repeat center center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  color: #fff;
  text-align: center;
`;

export const HeroContent = styled.div`
  max-width: 800px;
  padding: 20px;
`;

export const Headline = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Subheadline = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 30px;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
`;

export const PurposeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  text-align: center;
  background: ${({ theme }) => theme.colors.secondaryBackground};
  color: ${({ theme }) => theme.colors.text};
`;

export const PurposeTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const PurposeText = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 30px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
export const FooterContainer = styled.footer`
  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  padding: 2rem 0;
  text-align: center;
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;

  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;

  a {
    color: ${(props) => props.theme.colors.menuBackground};
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: ${(props) => props.theme.colors.menuBackground};
    }
  }
`;

export const Copyright = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.primary};
`;