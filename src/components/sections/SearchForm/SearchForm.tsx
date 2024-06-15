import { searchArtworks } from '@api/searchArtworks.ts';
import SmallCard from '@components/ui/smallCard/smallCard.tsx';
import Spinner from '@components/ui/spinner/spinner.tsx';
import { sortOptions } from '@constants/constants.ts';
import { useDebounce } from '@hooks/useDebounce.ts';
import { Artwork } from '@type/types.ts';
import { sortResults } from '@utils/sortUtils.ts';
import { searchSchema } from '@utils/validationSchema.ts';
import React, { ChangeEvent, useState } from 'react';
import * as yup from 'yup';
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

  const handleSearch = async () => {
    if (debouncedQuery.trim() === '') {
      setError('Query cannot be empty.');
      setResults([]);
      return;
    }

    try {
      await searchSchema.validate(debouncedQuery);
      setError('');
      setLoading(true);
      const artworks = await searchArtworks(debouncedQuery);
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

  return (
    <Wrapper>
      <Heading>
        Let's Find Some <Highlight>Art</Highlight> <br /> Here!
      </Heading>
      <SearchBox>
        <Input placeholder="Search art, artist, work..." value={query} onChange={handleInputChange} />
        <SearchIcon src="search.png" alt="search" onClick={handleSearch} />
      </SearchBox>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {loading && <Spinner />}
      {results.length > 0 && (
        <SortBox>
          <SortLabel>Sort by:</SortLabel>
          <Select value={sortOption} onChange={handleSortChange}>
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
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
