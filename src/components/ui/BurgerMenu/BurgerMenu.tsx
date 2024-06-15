import React, { useEffect, useRef, useState } from "react";
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
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <MenuButton onClick={toggleMenu}>
        <BurgerIcon />
      </MenuButton>
      <SideMenu isOpen={isMenuOpen} ref={menuRef}>
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
