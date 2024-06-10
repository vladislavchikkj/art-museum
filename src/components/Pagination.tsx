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
    const maxVisiblePages = 4
    let startPage = currentPage - Math.floor(maxVisiblePages / 2)
    if (startPage < 1) {
      startPage = 1
    }
    let endPage = startPage + maxVisiblePages - 1
    if (endPage > totalPages) {
      endPage = totalPages
      startPage = endPage - maxVisiblePages + 1
      if (startPage < 1) {
        startPage = 1
      }
    }

    if (currentPage > 1) {
      pageButtons.push(
        <PrevBtn key="prev" onClick={() => onPageChange(currentPage - 1)}>
          ‹
        </PrevBtn>
      )
    }

    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <PageButton
          key={i}
          active={currentPage === i}
          onClick={() => onPageChange(i)}
        >
          {i}
        </PageButton>
      )
    }

    if (currentPage < totalPages) {
      pageButtons.push(
        <NextBtn key="next" onClick={() => onPageChange(currentPage + 1)}>
          ›
        </NextBtn>
      )
    }

    return pageButtons
  }

  return <PaginationWrapper>{renderPageButtons()}</PaginationWrapper>
}

export default Pagination

const PrevBtn = styled.button`
  margin-right: 8px;
`

const NextBtn = styled.button`
  margin-left: 8px;
`

const PaginationWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 20px;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
`

const PageButton = styled.button<{ active?: boolean }>`
  background: ${({ active }) => (active ? '#ff7a00' : '#FAFAFA')};
  color: ${({ active }) => (active ? '#fff' : '#333')};
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background: #ff7a00;
    color: #fff;
  }
`
