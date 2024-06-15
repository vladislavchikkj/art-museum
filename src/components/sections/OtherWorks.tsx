import SmallCard from "@components/ui/SmallCard/SmallCard";
import Spinner from "@components/ui/Spinner/Spinner";
import TitleSection from "@components/ui/TitleSection/TitleSection";
import useArtworks from "@hooks/useArtworks";
import React, { useState } from "react";
import { Grid, Wrapper } from "./OtherWorks.styles";
import { OTHER_WORKS_ITEMS } from "@constants/constants";

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
