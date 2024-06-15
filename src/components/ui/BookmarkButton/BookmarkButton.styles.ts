import styled from "styled-components";

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.imagePlaceholder};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const BookmarkIcon = styled.img`
  width: 1.3rem;
  height: 1.3rem;
  cursor: pointer;
`;
