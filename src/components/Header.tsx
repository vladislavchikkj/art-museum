import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Container from './Container'

const Header: React.FC = () => {
  const location = useLocation()
  return (
    <HeaderDiv>
      <Container>
        <HeaderWrapper>
          <LogoWrapper to="/">
            <IconLogo />
            <Title>
              Museum of <span>Art</span>
            </Title>
          </LogoWrapper>
          <LinkWrapper>
            {location.pathname != '/' && (
              <FavoritesLink to="/">
                <IconBookmark src="home.png" alt="home" />
                <span>Home</span>
              </FavoritesLink>
            )}
            <FavoritesLink to="/favorites">
              <IconBookmark src="bookmark-home.png" alt="bookmark" />
              <span>Your favorites</span>
            </FavoritesLink>
          </LinkWrapper>
        </HeaderWrapper>
      </Container>
    </HeaderDiv>
  )
}

export default Header

const HeaderDiv = styled.header`
  background: linear-gradient(to right, #333, #444);
`

const HeaderWrapper = styled.div`
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
  background-image: url(logo.png);
  background-repeat: no-repeat;
  background-size: contain;
`
const IconBookmark = styled.img`
  width: 24px;
  height: 24px;
  color: #e0a449;
`

const Title = styled.h1`
  font-size: 1rem;
  margin: 0;
  color: white;
  span {
    color: #f0a500;
  }
`

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  gap: 1em;
`
const FavoritesLink = styled(Link)`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  gap: 0.5em;

  &:hover {
    text-decoration: underline;
  }
`
