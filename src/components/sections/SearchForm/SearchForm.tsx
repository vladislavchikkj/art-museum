import React, { ChangeEvent, useState } from "react";
import * as yup from "yup";
import { searchArtworks } from "../../../api/searchArtworks";
import { Artwork } from "../../../types";
import { sortResults } from "../../../utils/sortUtils.ts";
import { searchSchema } from "../../../utils/validationSchema";
import SmallCard from "../../ui/SmallCard";
import Spinner from "../../ui/Spinner";
import {
  ErrorMessage,
  Heading,
  Highlight,
  Input,
  Results,
  SearchBox,
  SearchIcon,
  Select,
  SortBox,
  SortLabel,
  Wrapper,
} from "./SearchForm.styles.ts";

const SearchForm: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Artwork[]>([]);
  const [error, setError] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
    setResults((prevResults) => sortResults(e.target.value, prevResults));
  };

  const handleSearch = async () => {
    if (query.trim() === "") {
      setError("Query cannot be empty.");
      setResults([]);
      return;
    }

    try {
      await searchSchema.validate(query);
      setError("");
      setLoading(true);
      const artworks = await searchArtworks(query);
      const sortedArtworks = sortResults(sortOption, artworks);
      setResults(sortedArtworks);
    } catch (validationError) {
      if (validationError instanceof yup.ValidationError) {
        setError(validationError.errors[0]);
      } else {
        setError("Unexpected error");
      }
      setResults([]);
    } finally {
      setLoading(false);
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
      {loading && <Spinner />}
      {results.length > 0 && (
        <SortBox>
          <SortLabel>Sort by:</SortLabel>
          <Select value={sortOption} onChange={handleSortChange}>
            <option value="">None</option>
            <option value="date">Date</option>
            <option value="title">Title</option>
          </Select>
        </SortBox>
      )}
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
