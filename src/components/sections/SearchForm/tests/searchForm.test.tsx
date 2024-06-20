import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { searchArtworks } from '@utils/searchArtworks';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import SearchForm from '../searchForm';

jest.mock('@api/searchArtworks');

const theme = {
  colors: {
    primary: '#ff0',
    error: '#f00',
  },
  spacing: {
    padding: '1rem',
    small: '0.5rem',
  },
};

const mockArtworks = [
  { id: '1', title: 'Artwork 1', artist: 'Artist 1' },
  { id: '2', title: 'Artwork 2', artist: 'Artist 2' },
];

beforeEach(() => {
  (searchArtworks as jest.Mock).mockResolvedValue([]);
});

test('renders SearchForm component with correct elements', () => {
  render(
    <ThemeProvider theme={theme}>
      <Router>
        <SearchForm />
      </Router>
    </ThemeProvider>,
  );

  expect(screen.getByText(/Let's Find Some/i)).toBeInTheDocument();
  expect(screen.getByText(/Art/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Search art, artist, work.../i)).toBeInTheDocument();
});

test('displays error message when search query is empty', async () => {
  render(
    <ThemeProvider theme={theme}>
      <Router>
        <SearchForm />
      </Router>
    </ThemeProvider>,
  );

  fireEvent.click(screen.getByAltText('search'));

  await waitFor(() => expect(screen.getByText('Query cannot be empty.')).toBeInTheDocument());
});

test('displays loading spinner during search', async () => {
  (searchArtworks as jest.Mock).mockResolvedValueOnce(mockArtworks);

  render(
    <ThemeProvider theme={theme}>
      <Router>
        <SearchForm />
      </Router>
    </ThemeProvider>,
  );

  fireEvent.change(screen.getByPlaceholderText(/Search art, artist, work.../i), { target: { value: 'Art' } });
  fireEvent.click(screen.getByAltText('search'));
});
