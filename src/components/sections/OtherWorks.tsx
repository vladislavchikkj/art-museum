import SmallCard from "@components/ui/smallCard/smallCard";
import Spinner from "@components/ui/spinner/spinner";
import TitleSection from "@components/ui/titleSection/titleSection";
import { OTHER_WORKS_ITEMS } from "@constants/constants";
import useArtworks from "@hooks/useArtworks";
import React, { useState } from "react";
import { Grid, Wrapper } from "./otherWorks.styles";

const OtherWorks: React.FC = () => {
  const [currentPage] = useState(1);
  const { artworks, loading, error } = useArtworks(
    currentPage,
    OTHER_WORKS_ITEMS
  );

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Wrapper>
      <TitleSection subtitle={"Here some more"} title={"Other works for you"} />
      <Grid>
        {artworks.map((artwork) => (
          <SmallCard
            key={artwork.id}
            id={artwork.id}
            title={artwork.title}
            author={artwork.artist_display || "Unknown Artist"}
            status={artwork.is_public_domain}
            imageId={artwork.image_id}
          />
        ))}
      </Grid>
    </Wrapper>
  );
};

export default OtherWorks;
