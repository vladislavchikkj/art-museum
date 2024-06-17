import styled from 'styled-components';

export const Heading = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

export const Bookmark = styled.img`
  width: 2rem;
  padding-top: 0.125rem;
`;

export const Highlight = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  padding-bottom: ${({ theme }) => theme.spacing.large};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(21.25rem, 1fr));
  gap: ${({ theme }) => theme.spacing.medium};
  padding-bottom: 4rem;
`;
