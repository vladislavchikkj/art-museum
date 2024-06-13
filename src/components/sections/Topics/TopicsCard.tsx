import { Artwork } from "@type/types";
import React from "react";
<<<<<<< HEAD
=======
import { Artwork } from "@type/types";
>>>>>>> 6e810a3c617516aa747afd87d59e75fa112dd50e
import BookmarkButton from "../../ui/BookmarkButton";
import {
  Card,
  CardAuthor,
  CardContent,
  CardFooter,
  CardStatus,
  CardTitle,
  Image,
  ImagePlaceholder,
} from "./Topics.styles";

interface TopicsCardProps {
  artwork: Artwork;
}

const TopicsCard: React.FC<TopicsCardProps> = ({ artwork }) => {
  return (
    <Card to={`/detail/${artwork.id}`}>
      <ImagePlaceholder>
        {artwork.image_id ? (
          <Image
            src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
            alt={artwork.title}
          />
        ) : (
          "No Image"
        )}
      </ImagePlaceholder>
      <CardContent>
        <CardTitle>{artwork.title}</CardTitle>
        <CardAuthor>{artwork.artist_title}</CardAuthor>
        <CardFooter>
          <CardStatus>
            {artwork.is_public_domain ? (
              <strong>Public</strong>
            ) : (
              <strong>Private</strong>
            )}
          </CardStatus>
          <BookmarkButton id={artwork.id} />
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default TopicsCard;
