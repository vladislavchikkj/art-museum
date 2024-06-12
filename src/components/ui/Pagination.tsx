import React from "react";
import styled from "styled-components";
import { INITIAL_PAGE_INDEX, MAX_VISIBLE_PAGES } from "../../constants";
import { PaginationProps } from "../../types";

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 20px 0;
`;

const PageButton = styled.button`
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

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const renderPageButtons = () => {
    const pageButtons = [];
    let startPage = Math.max(
      1,
      currentPage - Math.floor(MAX_VISIBLE_PAGES / 2)
    );
    const endPage = Math.min(totalPages, startPage + MAX_VISIBLE_PAGES - 1);

    startPage = Math.max(
      1,
      Math.min(startPage, endPage - MAX_VISIBLE_PAGES + 1)
    );

    if (currentPage > INITIAL_PAGE_INDEX) {
      pageButtons.push(
        <PageButton key="prev" onClick={() => onPageChange(currentPage - 1)}>
          ‹
        </PageButton>
      );
    } else {
      pageButtons.push(
        <PageButton key="prev" disabled>
          ‹
        </PageButton>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <PageButton
          key={i}
          className={currentPage === i ? "active" : ""}
          onClick={() => onPageChange(i)}>
          {i}
        </PageButton>
      );
    }

    if (currentPage < totalPages) {
      pageButtons.push(
        <PageButton key="next" onClick={() => onPageChange(currentPage + 1)}>
          ›
        </PageButton>
      );
    } else {
      pageButtons.push(
        <PageButton key="next" disabled>
          ›
        </PageButton>
      );
    }

    return pageButtons;
  };

  return <PaginationWrapper>{renderPageButtons()}</PaginationWrapper>;
};

export default Pagination;
