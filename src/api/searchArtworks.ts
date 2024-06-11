import { Artwork } from "../types";

export const searchArtworks = async (query: string): Promise<Artwork[]> => {
  try {
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks/search?q=${query}&fields=id,title,image_id,artist_display,is_public_domain`
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
