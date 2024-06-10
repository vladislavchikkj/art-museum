import React from 'react'
import styled from 'styled-components'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const renderPageButtons = () => {
    const pageButtons = []
    const maxVisiblePages = 20
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

    startPage = Math.max(1, Math.min(startPage, endPage - maxVisiblePages + 1))

    if (currentPage > 1) {
      pageButtons.push(
        <PageButton key="prev" onClick={() => onPageChange(currentPage - 1)}>
          ‹
        </PageButton>
      )
    } else {
      pageButtons.push(
        <PageButton key="prev" disabled>
          ‹
        </PageButton>
      )
    }

    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <PageButton
          key={i}
          className={currentPage === i ? 'active' : ''}
          onClick={() => onPageChange(i)}
        >
          {i}
        </PageButton>
      )
    }

    if (currentPage < totalPages) {
      pageButtons.push(
        <PageButton key="next" onClick={() => onPageChange(currentPage + 1)}>
          ›
        </PageButton>
      )
    } else {
      pageButtons.push(
        <PageButton key="next" disabled>
          ›
        </PageButton>
      )
    }

    return pageButtons
  }

  return <PaginationWrapper>{renderPageButtons()}</PaginationWrapper>
}

export default Pagination

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 20px 0;
`

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
`
