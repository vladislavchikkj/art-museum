import React from 'react'
import styled from 'styled-components'

const BookmarkButton: React.FC = () => {
  return (
    <Circle>
      <BookmarkIcon src="bookmark.svg" alt="bookmark" />
    </Circle>
  )
}

export default BookmarkButton

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3em;
  border-radius: 100%;
  cursor: pointer;
  background-color: #f9f9f9;
  &:hover {
    background-color: #fbd7b2;
    border-radius: 100%;
  }
`
const BookmarkIcon = styled.img`
  width: 1.3rem;
  height: 1.3rem;
  cursor: pointer;
`
