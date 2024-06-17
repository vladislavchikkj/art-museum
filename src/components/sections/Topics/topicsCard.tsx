import { DETAIL_PATH, IMAGE_URL } from '@constants/constants';
import { Artwork } from '@type/types';
import React, { lazy, memo, useCallback, useMemo } from 'react';
import {
  Card,
  CardAuthor,
  CardContent,
  CardFooter,
  CardStatus,
  CardTitle,
  Image,
  ImagePlaceholder,
} from './topics.styles';

const BookmarkButton = lazy(() => import('../../ui/BookmarkButton/bookmarkButton'));

interface TopicsCardProps {
  artwork: Artwork;
}

const TopicsCard: React.FC<TopicsCardProps> = ({ artwork }) => {
  const imageUrl = useMemo(() => {
    return artwork.image_id ? IMAGE_URL(artwork.image_id) : null;
  }, [artwork.image_id]);

  const bookmarkButtonMemo = useCallback(() => <BookmarkButton id={artwork.id} />, [artwork.id]);

  return (
    <Card to={`${DETAIL_PATH}/${artwork.id}`}>
      <ImagePlaceholder>{imageUrl ? <Image src={imageUrl} alt={artwork.title} /> : 'No Image'}</ImagePlaceholder>
      <CardContent>
        <CardTitle>{artwork.title}</CardTitle>
        <CardAuthor>{artwork.artist_title}</CardAuthor>
        <CardFooter>
          <CardStatus>{artwork.is_public_domain ? <strong>Public</strong> : <strong>Private</strong>}</CardStatus>
          {bookmarkButtonMemo()}
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default memo(TopicsCard);
