import { DETAIL_PATH, IMAGE_URL } from '@constants/constants';
import { SmallCardProps } from '@type/types';
import React, { lazy, memo, useCallback, useMemo } from 'react';
import { Author, Card, Image, ImagePlaceholder, Info, Status, Title } from './smallCard.styles';

const BookmarkButton = lazy(() => import('../BookmarkButton/bookmarkButton'));

const SmallCard: React.FC<SmallCardProps> = memo(({ artwork, onRemove }) => {
  const { id, title, artist_display, is_public_domain, image_id } = artwork;

  const imageUrl = useMemo(() => (image_id ? IMAGE_URL(image_id) : null), [image_id]);

  const handleRemove = useCallback(() => {
    if (onRemove) {
      onRemove(id);
    }
  }, [onRemove, id]);

  return (
    <Card to={`${DETAIL_PATH}/${id}`} data-testid="favorites-link">
      <ImagePlaceholder>{imageUrl ? <Image src={imageUrl} alt={'img_card'} /> : 'No Image'}</ImagePlaceholder>
      <Info>
        <Title>{title}</Title>
        <Author>{artist_display}</Author>
        <Status>{is_public_domain ? <strong>Public</strong> : <strong>Private</strong>}</Status>
      </Info>
      <React.Suspense fallback={<div>Loading...</div>}>
        <BookmarkButton id={id} onRemove={handleRemove} />
      </React.Suspense>
    </Card>
  );
});

export default SmallCard;
