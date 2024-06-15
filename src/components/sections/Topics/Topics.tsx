import Pagination from "@components/ui/pagination/pagination";
import Spinner from "@components/ui/spinner/spinner";
import TitleSection from "@components/ui/titleSection/titleSection";
import useArtworks from "@hooks/useArtworks";
import React, {
  Suspense,
  lazy,
  memo,
  useCallback,
  useMemo,
  useState,
} from "react";
import { Gallery, Wrapper } from "./topics.styles";
const TopicsCard = lazy(() => import("./topicsCard"));

const Topics: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { artworks, totalItems, loading, error } = useArtworks(currentPage, 3);

  const totalPages = useMemo(() => Math.ceil(totalItems / 3), [totalItems]);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const renderArtworks = useMemo(() => {
    if (loading) return <Spinner />;
    if (error) return <div>{error}</div>;
    return artworks.map((artwork) => (
      <Suspense fallback={<Spinner />} key={artwork.id}>
        <TopicsCard artwork={artwork} />
      </Suspense>
    ));
  }, [loading, error, artworks]);

  return (
    <Wrapper>
      <TitleSection subtitle="Topics for you" title="Our special gallery" />
      <Gallery>{renderArtworks}</Gallery>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Wrapper>
  );
};

export default memo(Topics);
