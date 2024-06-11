export interface Artwork {
  id: number
  title: string
  artist_display: string
  artist_title: string
  image_id: string
  dimensions?: string
  credit_line?: string
  department_title?: string
  is_public_domain: boolean
}
