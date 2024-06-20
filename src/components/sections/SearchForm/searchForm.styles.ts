import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.large};
`;

export const Heading = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
  width: 60%;
  box-shadow: ${({ theme }) => theme.boxShadow};
  box-sizing: border-box;

  @media (max-width: 40.625rem) {
    width: 100%;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background: none;
  flex-grow: 1;
  font-size: 0.875rem;
`;

export const SearchIcon = styled.img`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.error};
  margin-top: ${({ theme }) => theme.spacing.small};
`;

export const SortBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
  width: 60%;
  box-shadow: ${({ theme }) => theme.boxShadow};
  box-sizing: border-box;

  @media (max-width: 40.625rem) {
    width: 100%;
  }
`;

export const SortLabel = styled.label`
  font-size: 0.875rem;
  margin-right: ${({ theme }) => theme.spacing.small};
`;

export const Select = styled.select`
  border: none;
  outline: none;
  background: none;
  font-size: 0.875rem;
  flex-grow: 1;
`;

export const Results = styled.div`
  margin-top: ${({ theme }) => theme.spacing.large};
  display: grid;
  width: 80%;
  grid-template-columns: repeat(auto-fill, minmax(21.25rem, 1fr));
  gap: 1.25rem;
`;

export const NoResultsMessage = styled.div`
  margin-top: 20px;
  font-size: 18px;
  color: #777;
  text-align: center;
`;
