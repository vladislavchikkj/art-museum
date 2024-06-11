import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ITEMS_PER_PAGE } from "../constants";
import ArtContext from "../context/ArtContext";
import BookmarkButton from "./BookmarkButton";
import Pagination from "./Pagination";
import TitleSection from "./TitleSection";
import Spinner from "./Spinner";

const Topics: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { artworks, loading, error } = useContext(ArtContext);

  const totalItems = artworks.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedArtworks = artworks.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
  return (
    <Wrapper>
      <TitleSection subtitle={"Topics for you"} title={"Our special gallery"} />
      <Gallery>
        {loading ? (
          <Spinner />
        ) : error ? (
          <div>{error}</div>
        ) : (
          selectedArtworks.map((artwork) => (
            <Card key={artwork.id} to={`/detail/${artwork.id}`}>
              <ImagePlaceholder>
                {artwork.image_id ? (
                  <Image
                    src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
                    alt={artwork.title}
                  />
                ) : (
                  "No Image"
                )}
              </ImagePlaceholder>
              <CardContent>
                <CardTitle>{artwork.title}</CardTitle>
                <CardAuthor>{artwork.artist_title}</CardAuthor>
                <CardFooter>
                  <CardStatus>
                    {artwork.is_public_domain ? (
                      <strong>Public</strong>
                    ) : (
                      <strong>Private</strong>
                    )}
                  </CardStatus>
                  <BookmarkButton id={artwork.id} />
                </CardFooter>
              </CardContent>
            </Card>
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
`;

const Card = styled(Link)`
  position: relative;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 514px;
`;

const ImagePlaceholder = styled.div`
  background: #e0e0e0;
  width: 100%;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 18px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const CardContent = styled.div`
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background: white;
  position: absolute;
  padding: 15px;
  width: 80%;
  bottom: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const CardTitle = styled.h2`
  font-size: 16px;
  color: #333;
`;

const CardAuthor = styled.div`
  color: #ff7a00;
  margin-bottom: 20px;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardStatus = styled.div`
  color: #666;
`;
