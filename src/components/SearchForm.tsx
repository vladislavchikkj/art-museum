import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { searchArtworks } from "../api/searchArtworks";
import { useDebounce } from "../hooks/useDebounce"; // Импортируем хук
import { Artwork } from "../types";
import SmallCard from "./SmallCard";

const SearchForm: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Artwork[]>([]);
  const [error, setError] = useState<string>("");

  const debouncedQuery = useDebounce(query, 500);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = async () => {
    if (debouncedQuery.trim() === "") {
      setError("Please enter a search term");
      return;
    }

    setError("");
    try {
      const artworks = await searchArtworks(debouncedQuery);
      setResults(artworks);
    } catch (error) {
      setError("Failed to fetch data");
    }
  };

  return (
    <Wrapper>
      <Heading>
        Let's Find Some <Highlight>Art</Highlight> <br /> Here!
      </Heading>
      <SearchBox>
        <Input
          placeholder="Search art, artist, work..."
          value={query}
          onChange={handleInputChange}
        />
        <SearchIcon src="search.png" alt="search" onClick={handleSearch} />
      </SearchBox>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Results>
        {results.map((artwork) => (
          <SmallCard
            key={artwork.id}
            id={artwork.id}
            title={artwork.title}
            author={artwork.artist_display || "Unknown Artist"}
            status={artwork.is_public_domain}
            imageId={artwork.image_id}
          />
        ))}
      </Results>
    </Wrapper>
  );
};

export default SearchForm;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Heading = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: #333;
`;

const Highlight = styled.span`
  color: #ff7a00;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 10px 20px;
  width: 60%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  @media (max-width: 650px) {
    width: 100%;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  background: none;
  flex-grow: 1;
  font-size: 14px;
`;

const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;

const Results = styled.div`
  margin-top: 40px;
  display: grid;
  width: 80%;
  grid-template-columns: repeat(minmax(340px, 1fr));
  gap: 20px;
`;
