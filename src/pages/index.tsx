import React from 'react';
import { useRouter } from 'next/router';
import { 
  LandingContainer, 
  HeroSection, 
  HeroContent, 
  Headline, 
  Subheadline, 
  PurposeSection, 
  PurposeTitle, 
  PurposeText, 
  Copyright,
  SocialIcons,
  FooterLinks,
  FooterContainer
} from '@/styles/pages/landingStyles';
import { CTAButton } from '@/styles/shared/CTAButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { GradientLine } from '@/styles/shared/gradientLine';
import { CTAButtonGradient } from '@/styles/shared/CTAButtonGradient';

const LandingPage = () => {
  const router = useRouter();

  const handleExplore = () => {
    router.push('/login');
  };

  return (
    <LandingContainer>
      <HeroSection>
        <HeroContent>
          <Headline>Welcome to Pixel Union</Headline>
          <Subheadline>Your gateway to the best products online.</Subheadline>
          <CTAButtonGradient onClick={handleExplore}>Explore Now</CTAButtonGradient>
        </HeroContent>
      </HeroSection>
    <GradientLine />
      <PurposeSection>
        <PurposeTitle>Discover. Shop. Enjoy.</PurposeTitle>
        <PurposeText>
          Browse through a variety of high-quality products, add to your cart, and purchase with ease. 
          Your favorite items, just a click away.
        </PurposeText>
        <CTAButton  onClick={handleExplore}>Get Started</CTAButton>
      </PurposeSection>

      <FooterContainer>
        <FooterLinks>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/contact">Contact Us</a>
        </FooterLinks>

        <SocialIcons>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </SocialIcons>

        <Copyright>© 2025 Pixel Union. All rights reserved.</Copyright>
      </FooterContainer>

    </LandingContainer>
  );
};

export default LandingPage;
