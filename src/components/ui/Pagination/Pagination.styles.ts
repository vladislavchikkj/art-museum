import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 20px 0;
`;

export const PageButton = styled.button`
  background: #fafafa;
  color: #333;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    background: #ff7a00;
    color: #fff;
  }

  &.active {
    background: #ff7a00;
    color: #fff;
  }

  &:disabled {
    opacity: 0;
    cursor: default;
  }
`;
