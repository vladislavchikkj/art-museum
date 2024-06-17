import Spinner from '@components/ui/spinner/spinner';
import TitleSection from '@components/ui/titleSection/titleSection';
import { OTHER_WORKS_ITEMS } from '@constants/constants';
import useArtworks from '@hooks/useArtworks';
import React, { Suspense, lazy, memo, useMemo, useState } from 'react';
import { Grid, Wrapper } from './otherWorks-c.styles';
const SmallCard = lazy(() => import('@components/ui/smallCard/smallCard'));

const OtherWorks: React.FC = () => {
  const [currentPage] = useState(1);
  const { artworks, loading, error } = useArtworks(currentPage, OTHER_WORKS_ITEMS);

  const renderArtworks = useMemo(() => {
    if (loading) return <Spinner />;
    if (error) return <div>Error: {error}</div>;
    return artworks.map((artwork) => (
      <Suspense fallback={<Spinner />} key={artwork.id}>
        <SmallCard key={artwork.id} artwork={artwork} />
      </Suspense>
    ));
  }, [loading, error, artworks]);

  return (
    <Wrapper>
      <TitleSection subtitle="Here some more" title="Other works for you" />
      <Grid>{renderArtworks}</Grid>
    </Wrapper>
  );
};

export default memo(OtherWorks);
