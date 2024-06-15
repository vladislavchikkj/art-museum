import React from 'react';
import Container from '../container';
import { FooterDiv, FooterWrapper, IconLogo, LogoWrapper, ModsenLogo, Title } from './footer.styles';

const Footer: React.FC = () => {
  return (
    <FooterDiv>
      <Container>
        <FooterWrapper>
          <LogoWrapper to="/">
            <IconLogo />
            <Title>
              Museum of <span>Art</span>
            </Title>
          </LogoWrapper>
          <ModsenLogo to="/"></ModsenLogo>
        </FooterWrapper>
      </Container>
    </FooterDiv>
  );
};

export default Footer;
