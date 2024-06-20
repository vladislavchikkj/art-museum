import { API_BASE_URL, ARTWORK_ENDPOINT } from '@constants/constants';
import { Artwork } from '@utils/types/types';

export const fetchFavoritesArtworks = async (ids: number[]): Promise<Artwork[]> => {
  try {
    const promises = ids.map((id) =>
      fetch(`${API_BASE_URL}${ARTWORK_ENDPOINT}${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((data) => data.data),
    );
    const results = await Promise.all(promises);
    return results;
  } catch (error) {
    throw new Error('Failed to fetch artworks');
  }
};
