import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: ${({ theme }) => theme.spacing.small} 0;
`;

export const PageButton = styled.button`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.7rem;
  margin: 0 ${({ theme }) => theme.spacing.small};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.headerText};
  }

  &.active {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.headerText};
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;
