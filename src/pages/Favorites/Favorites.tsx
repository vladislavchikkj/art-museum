import { fetchFavoritesArtworks } from "@api/favoritesApi";
import SmallCard from "@components/ui/SmallCard/SmallCard";
import { Artwork } from "@type/types";
import React, { useEffect, useState } from "react";
import { Bookmark, Grid, Heading, Highlight } from "./Favorites.styles";
import Spinner from "@components/ui/Spinner/Spinner";
import TitleSection from "@components/ui/TitleSection/TitleSection";

const Favorites: React.FC = () => {
  const [, setFavoriteIds] = useState<number[]>([]);
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    setFavoriteIds(bookmarks);
    getArtworks(bookmarks);
  }, []);

  const getArtworks = async (ids: number[]) => {
    try {
      const artworks = await fetchFavoritesArtworks(ids);
      setArtworks(artworks);
      setLoading(false);
    } catch (err) {
      const errorMessage = (err as Error).message;
      setError(errorMessage);
      setLoading(false);
    }
  };

  const handleRemove = (id: number) => {
    setFavoriteIds((prevIds) =>
      prevIds.filter((bookmarkId) => bookmarkId !== id)
    );
    setArtworks((prevArtworks) =>
      prevArtworks.filter((artwork) => artwork.id !== id)
    );
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Heading>
        Here Are Your <br />
        <Highlight>
          <Bookmark src="bookmark.svg" alt="bookmark" />
          <div>Favorites</div>
        </Highlight>
        <TitleSection
          subtitle={"Topics for you"}
          title={"Our special gallery"}
        />
      </Heading>
      <Grid>
        {artworks.map((artwork) => (
          <SmallCard
            id={artwork.id}
            key={artwork.id}
            title={artwork.title}
            author={artwork.artist_display}
            status={artwork.is_public_domain}
            imageId={artwork.image_id}
            onRemove={handleRemove}
          />
        ))}
      </Grid>
    </>
  );
};

export default Favorites;
