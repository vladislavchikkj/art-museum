import SmallCard from "@components/ui/SmallCard/SmallCard";
import Spinner from "@components/ui/Spinner/Spinner";
import TitleSection from "@components/ui/TitleSection/TitleSection";
import React, { useContext } from "react";
import ArtContext from "../../context/ArtContext";
import { Grid, Wrapper } from "./OtherWorks.styles";

const OtherWorks: React.FC = () => {
  const { artworks, loading, error } = useContext(ArtContext);

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
