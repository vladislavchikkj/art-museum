import { Artwork } from "@type/types";

export const fetchFavoritesArtworks = async (
  ids: number[]
): Promise<Artwork[]> => {
  try {
    const promises = ids.map((id) =>
      fetch(`https://api.artic.edu/api/v1/artworks/${id}`).then((res) =>
        res.json()
      )
    );
    const results = await Promise.all(promises);
    return results.map((result) => result.data);
  } catch (error) {
    throw new Error("Failed to fetch artworks");
  }
};
