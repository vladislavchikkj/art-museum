import { DETAIL_PATH, IMAGE_URL } from '@constants/constants';
import { SmallCardProps } from '@type/types';
import React from 'react';
import BookmarkButton from '../BookmarkButton/bookmarkButton';
import { Author, Card, Image, ImagePlaceholder, Info, Status, Title } from './smallCard.styles';

const SmallCard: React.FC<SmallCardProps> = ({ artwork, onRemove }) => {
  const { id, title, artist_display, is_public_domain, image_id } = artwork;
  const imageUrl = image_id ? IMAGE_URL(image_id) : null;

  return (
    <Card to={`${DETAIL_PATH}/${id}`} data-testid="favorites-link">
      <ImagePlaceholder>{imageUrl ? <Image src={imageUrl} alt={'img_card'} /> : 'No Image'}</ImagePlaceholder>
      <Info>
        <Title>{title}</Title>
        <Author>{artist_display}</Author>
        <Status>{is_public_domain ? <strong>Public</strong> : <strong>Private</strong>}</Status>
      </Info>
      <BookmarkButton id={id} onRemove={onRemove} />
    </Card>
  );
};

export default SmallCard;
