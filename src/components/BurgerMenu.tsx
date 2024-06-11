import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const BurgerMenu: React.FC = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <MenuButton onClick={toggleMenu}>
        <BurgerIcon />
      </MenuButton>
      <SideMenu isOpen={isMenuOpen}>
        <SideMenuContent>
          <CloseButton onClick={toggleMenu}>&times;</CloseButton>
          {location.pathname !== '/' && (
            <FavoritesLink to="/" onClick={toggleMenu}>
              <IconBookmark src="/home.png" alt="home" />
              <span>Home</span>
            </FavoritesLink>
          )}
          <FavoritesLink to="/favorites" onClick={toggleMenu}>
            <IconBookmark src="/bookmark-home.png" alt="bookmark" />
            <span>Your favorites</span>
          </FavoritesLink>
        </SideMenuContent>
      </SideMenu>
    </>
  )
}

export default BurgerMenu

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 650px) {
    display: block;
  }
`

const BurgerIcon = styled.div`
  width: 25px;
  height: 2px;
  background-color: white;
  position: relative;
  display: inline-block;
  margin-right: 10px;
  transition: 0.5s;

  &::before,
  &::after {
    content: '';
    width: 25px;
    height: 2px;
    background-color: white;
    position: absolute;
    transition: 0.5s;
  }

  &::before {
    top: -8px;
  }

  &::after {
    bottom: -8px;
  }
`

const SideMenu = styled.div<{ isOpen: boolean }>`
  height: 100%;
  width: ${(props) => (props.isOpen ? '250px' : '0')};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.3s;
  padding-top: 60px;
`

const SideMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
`

const CloseButton = styled.span`
  position: absolute;
  top: 20px;
  right: 25px;
  font-size: 36px;
  color: white;
  cursor: pointer;
`

const FavoritesLink = styled(Link)`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  gap: 0.5em;
  padding: 1rem 0;

  &:hover {
    text-decoration: underline;
  }
`

const IconBookmark = styled.img`
  width: 24px;
  height: 24px;
  color: #e0a449;
`
