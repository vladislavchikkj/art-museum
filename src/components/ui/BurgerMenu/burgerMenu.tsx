import bookmarkHomeIcon from '@assets/bookmark-home.png';
import homeIcon from '@assets/home.png';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  BurgerIcon,
  CloseButton,
  FavoritesLink,
  IconBookmark,
  MenuButton,
  Overlay,
  SideMenu,
  SideMenuContent,
} from './burgerMenu.styles';

const BurgerMenu: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      <MenuButton onClick={toggleMenu}>
        <BurgerIcon />
      </MenuButton>
      {isMenuOpen && <Overlay onClick={toggleMenu} />}
      <SideMenu $isOpen={isMenuOpen} ref={menuRef}>
        <SideMenuContent>
          <CloseButton onClick={toggleMenu}>×</CloseButton>
          {location.pathname !== '/' && (
            <FavoritesLink to="/" onClick={toggleMenu} data-testid="home-link">
              <IconBookmark src={homeIcon} alt="home" />
              <span>Home</span>
            </FavoritesLink>
          )}
          <FavoritesLink to="/favorites" onClick={toggleMenu} data-testid="favorites-link">
            <IconBookmark src={bookmarkHomeIcon} alt="bookmark" />
            <span>Your favorites</span>
          </FavoritesLink>
        </SideMenuContent>
      </SideMenu>
    </>
  );
};

export default BurgerMenu;
