import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderDiv = styled.header`
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.text},
    ${({ theme }) => theme.colors.headerGradientEnd}
  );
  position: relative;
`;

export const HeaderWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.footerPadding} 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.headerText};
`;

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: end;
  gap: ${({ theme }) => theme.spacing.small};
  text-decoration: none;
`;

export const IconLogo = styled.div`
  width: 3rem;
  height: 3rem;
  background-image: url(/logo.png);
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Title = styled.h1`
  font-size: 1rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.headerText};
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.headerText};
  text-decoration: none;
  gap: 1rem;

  @media (max-width: 40.625rem) {
    display: none;
  }
`;

export const FavoritesLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.headerText};
  text-decoration: none;
  gap: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const IconBookmark = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  color: ${({ theme }) => theme.colors.bookmarkIcon};
`;
