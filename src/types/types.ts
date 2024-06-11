import { ReactNode } from "react";

export interface Artwork {
  id: number;
  title: string;
  artist_display: string;
  artist_title: string;
  image_id: string;
  dimensions?: string;
  credit_line?: string;
  department_title?: string;
  is_public_domain: boolean;
}

export interface ArtContextProps {
  artworks: Artwork[];
  loading: boolean;
  error: string | null;
}

export interface ArtProviderProps {
  children: ReactNode;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface SmallCardProps {
  id: number;
  title: string;
  author: string;
  status: boolean;
  imageId: string;
  onRemove?: (id: number) => void;
}
