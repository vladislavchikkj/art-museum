import Pagination from "@components/ui/Pagination/Pagination";
import Spinner from "@components/ui/Spinner/Spinner";
import TitleSection from "@components/ui/TitleSection/TitleSection";
import React, { useState } from "react";
import { Gallery, Wrapper } from "./Topics.styles";
import TopicsCard from "./TopicsCard";
import useArtworks from "@hooks/useArtworks";

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
