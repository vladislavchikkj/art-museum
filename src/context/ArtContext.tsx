import React, { ReactNode, createContext, useEffect, useState } from 'react'
import { fetchArtworks } from '../api/artApi'
import { Artwork } from '../types/types'

interface ArtContextProps {
  artworks: Artwork[]
  loading: boolean
  error: string | null
}

const ArtContext = createContext<ArtContextProps>({
  artworks: [],
  loading: true,
  error: null,
})

interface ArtProviderProps {
  children: ReactNode
}

export const ArtProvider: React.FC<ArtProviderProps> = ({ children }) => {
  const [artworks, setArtworks] = useState<Artwork[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)

  useEffect(() => {
    const loadArtworks = async () => {
      try {
        setLoading(true)
        const data = await fetchArtworks(page)
        setArtworks(data.data)
        setLoading(false)
      } catch (err: any) {
        setError(err.message)
        setLoading(false)
      }
    }

    loadArtworks()
  }, [page])

  return (
    <ArtContext.Provider value={{ artworks, loading, error }}>
      {children}
    </ArtContext.Provider>
  )
}

export default ArtContext
