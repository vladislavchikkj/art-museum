import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import BookmarkButton from './BookmarkButton'

interface SmallCardProps {
  title: string
  author: string
  status: string
  imageId: string
}

const SmallCard: React.FC<SmallCardProps> = ({
  title,
  author,
  status,
  imageId,
}) => {
  return (
    <Card to={'/detail'}>
      <ImagePlaceholder>
        {imageId ? (
          <Image
            src={`https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`}
            alt={title}
          />
        ) : (
          'No Image'
        )}
      </ImagePlaceholder>
      <Info>
        <Title>{title}</Title>
        <Author>{author}</Author>
        <Status>{status}</Status>
      </Info>
      <BookmarkButton />
    </Card>
  )
}

export default SmallCard

const Card = styled(Link)`
  display: flex;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 10px;
  align-items: center;
  text-decoration: none;
  color: black;
`

const ImagePlaceholder = styled.div`
  width: 60px;
  height: 60px;
  background-color: #e0e0e0;
  border-radius: 5px;
  margin-right: 10px;
`

const Info = styled.div`
  flex: 1;
  text-align: left;
`

const Title = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 0;
`

const Author = styled.p`
  font-size: 12px;
  color: #f39c12;
  margin: 0;
`

const Status = styled.p`
  font-size: 12px;
  color: #666;
  margin: 0;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`
