import { SmallCardProps } from "@type/types";
import React from "react";
import BookmarkButton from "../bookmarkButton/bookmarkButton";
import {
  Author,
  Card,
  Image,
  ImagePlaceholder,
  Info,
  Status,
  Title,
} from "./smallCard.styles";

const SmallCard: React.FC<SmallCardProps> = ({
  id,
  title,
  author,
  status,
  imageId,
  onRemove,
}) => {
  const imageUrl = imageId
    ? `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`
    : null;

  return (
    <Card to={`/detail/${id}`}>
      <ImagePlaceholder>
        {imageUrl ? <Image src={imageUrl} alt={"img_card"} /> : "No Image"}
      </ImagePlaceholder>
      <Info>
        <Title>{title}</Title>
        <Author>{author}</Author>
        <Status>
          {status ? <strong>Public</strong> : <strong>Private</strong>}
        </Status>
      </Info>
      <BookmarkButton id={id} onRemove={onRemove} />
    </Card>
  );
};

export default SmallCard;
