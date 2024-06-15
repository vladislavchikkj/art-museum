import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.large};
`;

export const Heading = styled.h1`
  font-size: 36px;
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

  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background: none;
  flex-grow: 1;
  font-size: 14px;
`;

export const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
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

  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const SortLabel = styled.label`
  font-size: 14px;
  margin-right: ${({ theme }) => theme.spacing.small};
`;

export const Select = styled.select`
  border: none;
  outline: none;
  background: none;
  font-size: 14px;
  flex-grow: 1;
`;

export const Results = styled.div`
  margin-top: ${({ theme }) => theme.spacing.large};
  display: grid;
  width: 80%;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 20px;
`;
