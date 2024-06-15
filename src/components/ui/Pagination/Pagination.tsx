import { INITIAL_PAGE_INDEX, MAX_VISIBLE_PAGES } from "@constants/constants";
import { PaginationProps } from "@type/types";
import React from "react";
import { PageButton, PaginationWrapper } from "./Pagination.styles";

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
