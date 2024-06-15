import styled from "styled-components";

export const Header = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

export const Subtitle = styled.div`
  color: ${({ theme }) => theme.colors.bookmarkIcon};
  font-size: 1rem;
`;

export const Title = styled.h1`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.cardTitle};
  margin: 0;
  padding-bottom: ${({ theme }) => theme.spacing.small};
`;
