import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import useFetchArtworks from '../hooks/useFetchArtworks'
import BookmarkButton from './BookmarkButton/BookmarkButton'
import Pagination from './Pagination'
import TitleSection from './TitleSection'

const Topics: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 3

  const { artworks, loading, error } = useFetchArtworks(
    currentPage,
    itemsPerPage
  )
  const totalItems = 32
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <Wrapper>
      <TitleSection subtitle={'Topics for you'} title={'Our special gallery'} />
      <Gallery>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          artworks.map((artwork) => (
            <Card key={artwork.id} to={`/detail/${artwork.id}`}>
              <ImagePlaceholder>
                {artwork.image_id ? (
                  <Image
                    src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
                    alt={artwork.title}
                  />
                ) : (
                  'No Image'
                )}
              </ImagePlaceholder>
              <CardContent>
                <CardTitle>{artwork.title}</CardTitle>
                <CardAuthor>{artwork.artist_title}</CardAuthor>
                <CardFooter>
                  <CardStatus>Public</CardStatus>
                  <BookmarkButton />
                </CardFooter>
              </CardContent>
            </Card>
          ))
        )}
      </Gallery>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Wrapper>
  )
}

export default Topics

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
`

const Card = styled(Link)`
  position: relative;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 514px;
`

const ImagePlaceholder = styled.div`
  background: #e0e0e0;
  width: 100%;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 18px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

const CardContent = styled.div`
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background: white;
  position: absolute;
  padding: 15px;
  width: 80%;
  bottom: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`

const CardTitle = styled.h2`
  font-size: 16px;
  color: #333;
`

const CardAuthor = styled.div`
  color: #ff7a00;
  margin-bottom: 20px;
`

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CardStatus = styled.div`
  color: #666;
`
