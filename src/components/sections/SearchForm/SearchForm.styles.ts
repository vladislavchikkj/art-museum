import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const Heading = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: #333;
`;

export const Highlight = styled.span`
  color: #ff7a00;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 10px 20px;
  width: 60%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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
  color: red;
  margin-top: 10px;
`;

export const SortBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 10px 20px;
  width: 60%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const SortLabel = styled.label`
  font-size: 14px;
  margin-right: 10px;
`;

export const Select = styled.select`
  border: none;
  outline: none;
  background: none;
  font-size: 14px;
  flex-grow: 1;
`;

export const Results = styled.div`
  margin-top: 40px;
  display: grid;
  width: 80%;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 20px;
`;
