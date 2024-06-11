const BASE_URL = 'https://api.artic.edu/api/v1/artworks'

export const fetchArtworks = async (page: number, query = '') => {
  const url = new URL(BASE_URL)
  url.searchParams.append('page', page.toString())
  url.searchParams.append('limit', '20') // количество картин на страницу, можно изменить по необходимости
  if (query) {
    url.searchParams.append('q', query)
  }

  try {
    const response = await fetch(url.toString())
    if (!response.ok) {
      throw new Error(`Error fetching artworks: ${response.statusText}`)
    }
    const data = await response.json()
    return data
  } catch (error: any) {
    throw new Error(error.message || 'Error fetching artworks')
  }
}
