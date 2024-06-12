import React from "react";
import Container from "../Container";
import {
  FooterDiv,
  FooterWrapper,
  IconLogo,
  LogoWrapper,
  ModsenLogo,
  Title,
} from "./Footer.styles";

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
