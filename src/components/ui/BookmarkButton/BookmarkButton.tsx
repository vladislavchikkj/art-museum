import { BOOKMARKS_LOCAL_KEY } from '@constants/constants';
import React, { useCallback, useEffect, useState } from 'react';
import { BookmarkIcon, Circle } from './bookmarkButton.styles';

interface BookmarkButtonProps {
  id: number;
  onRemove?: (id: number) => void;
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ id, onRemove }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem(BOOKMARKS_LOCAL_KEY) || '[]');
    setIsBookmarked(bookmarks.includes(id));
  }, [id]);

  const handleBookmark = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      const bookmarks = JSON.parse(localStorage.getItem(BOOKMARKS_LOCAL_KEY) || '[]');

      if (isBookmarked) {
        const updatedBookmarks = bookmarks.filter((bookmarkId: number) => bookmarkId !== id);
        localStorage.setItem(BOOKMARKS_LOCAL_KEY, JSON.stringify(updatedBookmarks));
        setIsBookmarked(false);
        onRemove?.(id);
      } else {
        bookmarks.push(id);
        localStorage.setItem(BOOKMARKS_LOCAL_KEY, JSON.stringify(bookmarks));
        setIsBookmarked(true);
      }
    },
    [id, isBookmarked, onRemove],
  );

  return (
    <Circle onClick={handleBookmark}>
      <BookmarkIcon src={isBookmarked ? '/bookmarked.svg' : '/bookmark.svg'} alt="Bookmark" />
    </Circle>
  );
};

export default BookmarkButton;
