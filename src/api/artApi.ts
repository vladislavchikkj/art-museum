import { API_URL } from '../constants/constants'

export const fetchArtworks = async (page: number = 2) => {
  const response = await fetch(`${API_URL}?page=${page}`)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  const data = await response.json()
  return data
}

export const fetchArtworkDetails = async (id: number) => {
  const response = await fetch(`${API_URL}/${id}`)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  const data = await response.json()
  return data
}
