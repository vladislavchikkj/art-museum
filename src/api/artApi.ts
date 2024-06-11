import { API_URL } from "../constants/constants";

export const fetchArtworks = async (page: number, query = "") => {
  const url = new URL(API_URL);
  url.searchParams.append("page", page.toString());
  url.searchParams.append("limit", "9");
  if (query) {
    url.searchParams.append("q", query);
  }

  try {
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`Error fetching artworks: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message || "Error fetching artworks");
  }
};
