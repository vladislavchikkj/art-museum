import searchIcon from '@assets/search.png';
import SmallCard from '@components/ui/SmallCard/smallCard.tsx';
import Spinner from '@components/ui/Spinner/spinner.tsx';
import { sortOptions } from '@constants/constants.ts';
import { useDebounce } from '@hooks/useDebounce.ts';
import { searchArtworks } from '@utils/searchArtworks.ts';
import { sortResults } from '@utils/sortUtils.ts';
import { Artwork } from '@utils/types/types.ts';
import { searchSchema } from '@utils/validationSchema.ts';
import React, { ChangeEvent, useEffect, useState } from 'react';
import * as yup from 'yup';
import {
  ErrorMessage,
  Heading,
  Highlight,
  Input,
  NoResultsMessage,
  Results,
  SearchBox,
  SearchIcon,
  Select,
  SortBox,
  SortLabel,
  Wrapper,
} from './searchForm.styles.ts';

const SearchForm: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<Artwork[]>([]);
  const [error, setError] = useState<string>('');
  const [sortOption, setSortOption] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const debouncedQuery = useDebounce(query, 500);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
    setResults((prevResults) => sortResults(e.target.value, prevResults));
  };

  const handleSearch = async (searchQuery: string) => {
    if (searchQuery.trim() === '') {
      setError('Query cannot be empty.');
      setResults([]);
      return;
    }

    try {
      await searchSchema.validate(searchQuery);
      setError('');
      setLoading(true);
      const artworks = await searchArtworks(searchQuery);
      const sortedArtworks = sortResults(sortOption, artworks);
      setResults(sortedArtworks);
    } catch (validationError) {
      if (validationError instanceof yup.ValidationError) {
        setError(validationError.errors[0]);
      } else {
        setError('Unexpected error');
      }
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (debouncedQuery) {
      handleSearch(debouncedQuery);
    }
  }, [debouncedQuery]);

  return (
    <Wrapper>
      <Heading>
        Let's Find Some <Highlight>Art</Highlight> <br /> Here!
      </Heading>
      <SearchBox>
        <Input placeholder="Search art, artist, work..." value={query} onChange={handleInputChange} />
        <SearchIcon src={searchIcon} alt="search" onClick={() => handleSearch(query)} />
      </SearchBox>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {loading && <Spinner />}
      {!loading && results.length === 0 && !error && (
        <NoResultsMessage>No results found for your search.</NoResultsMessage>
      )}
      {results.length > 0 && (
        <SortBox>
          <SortLabel>Sort by:</SortLabel>
          <Select value={sortOption} onChange={handleSortChange}>
            {sortOptions.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </Select>
        </SortBox>
      )}
      <Results>
        {results.map((artwork) => (
          <SmallCard key={artwork.id} artwork={artwork} />
        ))}
      </Results>
    </Wrapper>
  );
};

export default SearchForm;
