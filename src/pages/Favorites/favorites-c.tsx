import { fetchFavoritesArtworks } from '@api/favoritesApi';
import Spinner from '@components/ui/spinner/spinner';
import TitleSection from '@components/ui/titleSection/titleSection';
import { Artwork } from '@type/types';
import React, { lazy, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Bookmark, Grid, Heading, Highlight } from './favorites-c.styles';

const SmallCard = lazy(() => import('@components/ui/smallCard/smallCard'));

const Favorites: React.FC = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    getArtworks(bookmarks);
  }, []);

  const getArtworks = useCallback(async (ids: number[]) => {
    try {
      const artworks = await fetchFavoritesArtworks(ids);
      setArtworks(artworks);
      setLoading(false);
    } catch (err) {
      const errorMessage = (err as Error).message;
      setError(errorMessage);
      setLoading(false);
    }
  }, []);

  const handleRemove = useCallback((id: number) => {
    setArtworks((prevArtworks) => prevArtworks.filter((artwork) => artwork.id !== id));

    const updatedBookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]').filter(
      (bookmarkId: number) => bookmarkId !== id,
    );
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  }, []);

  const titleSection = useMemo(() => {
    return artworks.length === 0 ? (
      <TitleSection subtitle={'Saved by you'} title={'You have no favorite artworks yet.'} />
    ) : (
      <TitleSection subtitle={'Saved by you'} title={'Your favorites list'} />
    );
  }, [artworks.length]);

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
        {titleSection}
      </Heading>

      <Grid>
        {artworks.map((artwork) => (
          <SmallCard key={artwork.id} artwork={artwork} onRemove={handleRemove} />
        ))}
      </Grid>
    </>
  );
};

export default memo(Favorites);
