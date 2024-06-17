import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.headerText};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 40.625rem) {
    display: block;
  }
`;

export const BurgerIcon = styled.div`
  width: 1.5625rem;
  height: 0.125rem;
  background-color: ${({ theme }) => theme.colors.headerText};
  position: relative;
  display: inline-block;
  margin-right: ${({ theme }) => theme.spacing.small};
  transition: 0.5s;

  &::before,
  &::after {
    content: '';
    width: 1.5625rem;
    height: 0.125rem;
    background-color: ${({ theme }) => theme.colors.headerText};
    position: absolute;
    transition: 0.5s;
  }

  &::before {
    top: -0.5rem;
  }

  &::after {
    bottom: -0.5rem;
  }
`;

interface SideMenuProps {
  $isOpen: boolean;
}

export const SideMenu = styled.div<SideMenuProps>`
  height: 100%;
  width: ${(props) => (props.$isOpen ? '15.625rem' : '0')};
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  overflow-x: hidden;
  transition: 0.3s;
  padding-top: 3.75rem;
`;

export const SideMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${({ theme }) => theme.spacing.medium};
`;
export const CloseButton = styled.span`
  position: absolute;
  top: 1.25rem;
  right: 1.5625rem;
  font-size: 2.25rem;
  color: ${({ theme }) => theme.colors.headerText};
  cursor: pointer;
`;

export const FavoritesLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.headerText};
  text-decoration: none;
  gap: 0.5em;
  padding: ${({ theme }) => theme.spacing.medium} 0;

  &:hover {
    text-decoration: underline;
  }
`;

export const IconBookmark = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  color: ${({ theme }) => theme.colors.bookmarkIcon};
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;
