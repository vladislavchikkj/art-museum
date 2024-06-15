import Pagination from "@components/ui/pagination/pagination";
import Spinner from "@components/ui/spinner/spinner";
import TitleSection from "@components/ui/titleSection/titleSection";
import useArtworks from "@hooks/useArtworks";
import React, { useState } from "react";
import { Gallery, Wrapper } from "./topics.styles";
import TopicsCard from "./topicsCard";

const Topics: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { artworks, totalItems, loading, error } = useArtworks(currentPage, 3);

  const totalPages = Math.ceil(totalItems / 3);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Wrapper>
      <TitleSection subtitle="Topics for you" title="Our special gallery" />
      <Gallery>
        {loading ? (
          <Spinner />
        ) : error ? (
          <div>{error}</div>
        ) : (
          artworks.map((artwork) => (
            <TopicsCard key={artwork.id} artwork={artwork} />
          ))
        )}
      </Gallery>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Wrapper>
  );
};

export default Topics;
