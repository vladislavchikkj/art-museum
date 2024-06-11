import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

interface BookmarkButtonProps {
  id: number
  onRemove?: (id: number) => void
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ id, onRemove }) => {
  const [isBookmarked, setIsBookmarked] = useState(false)

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]')
    setIsBookmarked(bookmarks.includes(id))
  }, [id])

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault()
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]')
    if (isBookmarked) {
      const updatedBookmarks = bookmarks.filter(
        (bookmarkId: number) => bookmarkId !== id
      )
      localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks))
      setIsBookmarked(false)
      if (onRemove) {
        onRemove(id)
      }
    } else {
      bookmarks.push(id)
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
      setIsBookmarked(true)
    }
  }

  return (
    <Circle onClick={handleBookmark}>
      <BookmarkIcon
        src={isBookmarked ? 'bookmarked.svg' : 'bookmark.svg'}
        alt="bookmark"
      />
    </Circle>
  )
}

export default BookmarkButton

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
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
