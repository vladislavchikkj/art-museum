import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { Artwork } from '@type/types';
import { BrowserRouter as Router } from 'react-router-dom';
import SmallCard from '../smallCard';

const mockArtwork: Artwork = {
  id: 1,
  title: 'Artwork Title',
  artist_display: 'Artist Name',
  artist_title: 'Artist Title',
  image_id: '12345',
  dimensions: '100x100 cm',
  credit_line: 'Credit Line',
  department_title: 'Department',
  is_public_domain: true,
  date: 2023,
};

describe('SmallCard component', () => {
  it('renders artwork details correctly', () => {
    const { getByText, getByAltText } = render(
      <Router>
        <SmallCard artwork={mockArtwork} />
      </Router>,
    );

    const titleElement = getByText('Artwork Title');
    const artistElement = getByText('Artist Name');
    const imageElement = getByAltText('img_card');
    const statusElement = getByText('Public');

    expect(titleElement).toBeInTheDocument();
    expect(artistElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(statusElement).toBeInTheDocument();
  });

  it('renders "No Image" if image_id is null', () => {
    const artworkWithoutImage = { ...mockArtwork, image_id: null };

    const { getByText } = render(
      <Router>
        <SmallCard artwork={artworkWithoutImage} />
      </Router>,
    );

    const noImageText = getByText('No Image');
    expect(noImageText).toBeInTheDocument();
  });

  it('calls onRemove handler when Remove button is clicked', () => {
    const mockOnRemove = jest.fn();
    const { getByText } = render(
      <Router>
        <SmallCard artwork={mockArtwork} onRemove={mockOnRemove} />
      </Router>,
    );

    const removeButton = getByText('Remove');
    fireEvent.click(removeButton);

    expect(mockOnRemove).toHaveBeenCalledWith(1); // Ensure onRemove is called with the correct id
  });
});
