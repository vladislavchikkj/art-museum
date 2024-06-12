import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderDiv = styled.header`
  background: linear-gradient(to right, #333, #444);
  position: relative;
`;

export const HeaderWrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: end;
  gap: 1rem;
  text-decoration: none;
`;

export const IconLogo = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(/logo.png);
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Title = styled.h1`
  font-size: 1rem;
  margin: 0;
  color: white;
  span {
    color: #f0a500;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  gap: 1em;

  @media (max-width: 650px) {
    display: none;
  }
`;

export const FavoritesLink = styled(Link)`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  gap: 0.5em;

  &:hover {
    text-decoration: underline;
  }
`;

export const IconBookmark = styled.img`
  width: 24px;
  height: 24px;
  color: #e0a449;
`;
