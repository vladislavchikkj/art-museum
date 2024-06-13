import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  BurgerIcon,
  CloseButton,
  FavoritesLink,
  IconBookmark,
  MenuButton,
  SideMenu,
  SideMenuContent,
} from "./BurgerMenu.styles";

const BurgerMenu: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <MenuButton onClick={toggleMenu}>
        <BurgerIcon />
      </MenuButton>
      <SideMenu isOpen={isMenuOpen}>
        <SideMenuContent>
          <CloseButton onClick={toggleMenu}>&times;</CloseButton>
          {location.pathname !== "/" && (
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
  );
};

export default BurgerMenu;
