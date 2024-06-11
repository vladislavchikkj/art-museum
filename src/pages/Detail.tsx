import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import BookmarkButton from '../components/BookmarkButton'
import ArtContext from '../context/ArtContext'
import { Artwork } from '../types/types'

const Detail: React.FC = () => {
  const { id } = useParams()
  const { artworks } = useContext(ArtContext)

  const artwork: Artwork | undefined = artworks.find(
    (art: Artwork) => art.id === parseInt(id || '', 10)
  )
  if (!artwork) {
    return <div>Loading...</div>
  }
  return (
    <Wrapper>
      <ImagePlaceholder>
        {artwork.image_id ? (
          <Image
            src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
            alt={artwork.title}
          />
        ) : (
          'No Image'
        )}
        <AddToFav>
          <BookmarkButton id={artwork.id} />
        </AddToFav>
      </ImagePlaceholder>
      <Content>
        <div>
          <Title>{artwork.title}</Title>
          <Author>{artwork.artist_title}</Author>
          <Date>1535-45</Date>
        </div>
        <Overview>
          <SectionTitle>Overview</SectionTitle>
          <InfoList>
            <InfoItem>
              <strong>Artist nationality:</strong> {artwork.artist_display}
            </InfoItem>
            <InfoItem>
              <strong>Dimensions:</strong> Sheet: {artwork.dimensions}
            </InfoItem>
            <InfoItem>
              <strong>Credit Line:</strong> {artwork.credit_line}
            </InfoItem>
            <InfoItem>
              <strong>Repository:</strong> {artwork.department_title}
            </InfoItem>
            <InfoItem>
              {artwork.is_public_domain ? <b>Public</b> : <b>Private</b>}
            </InfoItem>
          </InfoList>
        </Overview>
      </Content>
    </Wrapper>
  )
}

export default Detail

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  gap: 2rem;
  padding: 2rem 0 2rem 0;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`

const ImagePlaceholder = styled.div`
  position: relative;
  background: #fafafa;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 18px;
  border-radius: 10px;
  overflow: hidden;
`
const AddToFav = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
`
const Image = styled.img`
  align-self: start;
  width: 100%;
  max-height: 600px;
  object-fit: contain;
  border-radius: 10px;
`

const Content = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin: 0;
`

const Author = styled.p`
  padding-top: 20px;
  font-size: 18px;
  color: #f39c12;
  margin: 5px 0;
  font-weight: 500;
`

const Date = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #666;
  margin: 5px 0;
`
const Overview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const SectionTitle = styled.h2`
  font-size: 20px;
  color: #333;
  margin: 20px 0 10px;
`

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 14px;
  color: #666;
`

const InfoItem = styled.li`
  margin-bottom: 5px;
  strong {
    color: #f39c12;
  }
`
