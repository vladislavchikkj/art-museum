import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { BOOKMARKS_LOCAL_KEY } from "../../constants";

interface BookmarkButtonProps {
  id: number;
  onRemove?: (id: number) => void;
}

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  cursor: pointer;
  background-color: #ebebeb;

  &:hover {
    background-color: #fbd7b2;
  }
`;

const BookmarkIcon = styled.img`
  width: 1.3rem;
  height: 1.3rem;
  cursor: pointer;
`;

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ id, onRemove }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const bookmarks = JSON.parse(
      localStorage.getItem(BOOKMARKS_LOCAL_KEY) || "[]"
    );
    setIsBookmarked(bookmarks.includes(id));
  }, [id]);

  const handleBookmark = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      const bookmarks = JSON.parse(
        localStorage.getItem(BOOKMARKS_LOCAL_KEY) || "[]"
      );

      if (isBookmarked) {
        const updatedBookmarks = bookmarks.filter(
          (bookmarkId: number) => bookmarkId !== id
        );
        localStorage.setItem(
          BOOKMARKS_LOCAL_KEY,
          JSON.stringify(updatedBookmarks)
        );
        setIsBookmarked(false);
        onRemove?.(id);
      } else {
        bookmarks.push(id);
        localStorage.setItem(BOOKMARKS_LOCAL_KEY, JSON.stringify(bookmarks));
        setIsBookmarked(true);
      }
    },
    [id, isBookmarked, onRemove]
  );

  return (
    <Circle onClick={handleBookmark}>
      <BookmarkIcon
        src={isBookmarked ? "/bookmarked.svg" : "/bookmark.svg"}
        alt="Bookmark"
      />
    </Circle>
  );
};

export default BookmarkButton;
