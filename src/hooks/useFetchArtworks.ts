import { useEffect, useState } from 'react'

interface Artwork {
  id: number
  title: string
  artist_title: string
  image_id: string
}

const useFetchArtworks = (page: number, itemsPerPage: number) => {
  const [artworks, setArtworks] = useState<Artwork[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchArtworks = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch(
          `https://api.artic.edu/api/v1/artworks?page=${page}&limit=${itemsPerPage}`
        )
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setArtworks(data.data)
      } catch (err) {
        setError('Error fetching artworks')
      } finally {
        setLoading(false)
      }
    }

    fetchArtworks()
  }, [page, itemsPerPage])

  return { artworks, loading, error }
}

export default useFetchArtworks
