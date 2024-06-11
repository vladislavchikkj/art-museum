import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Container from './Container'

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
  )
}

export default Footer

const FooterDiv = styled.footer`
  background: white;
  margin-top: auto;
`

const FooterWrapper = styled.div`
  padding: 1rem 0 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`

const LogoWrapper = styled(Link)`
  display: flex;
  align-items: end;
  gap: 1rem;
  text-decoration: none;
`

const IconLogo = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(/logo.png);
  background-repeat: no-repeat;
  background-size: contain;
`

const Title = styled.h1`
  font-size: 1rem;
  margin: 0;
  color: black;
  span {
    color: #f0a500;
  }
`

const ModsenLogo = styled(Link)`
  display: flex;
  align-items: center;
  color: white;
  width: 164px;
  height: 59px;
  text-decoration: none;
  background-image: url(logo-modsen.png);
  background-repeat: no-repeat;
  background-size: contain;

  &:hover {
    text-decoration: underline;
  }
`
