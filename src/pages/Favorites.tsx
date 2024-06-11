import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchFavoritesArtworks } from "../api/favoritesApi";
import SmallCard from "../components/SmallCard";
import TitleSection from "../components/TitleSection";
import { Artwork } from "../types";
import Spinner from "../components/Spinner";

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
    } catch (error: any) {
      setError(error.message);
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

const Heading = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: #333;
`;

const Bookmark = styled.img`
  width: 2rem;
  padding-top: 2px;
`;

const Highlight = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: #ff7a00;
  padding-bottom: 50px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 20px;
  padding-bottom: 4rem;
`;
