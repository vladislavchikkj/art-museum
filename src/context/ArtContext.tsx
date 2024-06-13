import { fetchArtworks } from "@api/artApi";
import { ArtContextProps, ArtProviderProps, Artwork } from "@type/types";
import React, { createContext, useEffect, useState } from "react";

const ArtContext = createContext<ArtContextProps>({
  artworks: [],
  loading: true,
  error: null,
});

export const ArtProvider: React.FC<ArtProviderProps> = ({ children }) => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page] = useState(1);

  useEffect(() => {
    const loadArtworks = async () => {
      try {
        setLoading(true);
        const data = await fetchArtworks(page);
        setArtworks(data.data);
        setLoading(false);
      } catch (err) {
        const errorMessage = (err as Error).message;
        setError(errorMessage);
        setLoading(false);
      }
    };

    loadArtworks();
  }, [page]);

  return (
    <ArtContext.Provider value={{ artworks, loading, error }}>
      {children}
    </ArtContext.Provider>
  );
};

export default ArtContext;
