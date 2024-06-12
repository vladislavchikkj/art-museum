import styled from "styled-components";

export const Heading = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: #333;
`;

export const Bookmark = styled.img`
  width: 2rem;
  padding-top: 2px;
`;

export const Highlight = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: #ff7a00;
  padding-bottom: 50px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 20px;
  padding-bottom: 4rem;
`;
