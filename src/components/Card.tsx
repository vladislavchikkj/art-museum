import React from 'react'
import styled from 'styled-components'
import BookmarkButton from './BookmarkButton/BookmarkButton'

interface SmallCardProps {
  title: string
  author: string
  status: string
}

const SmallCard: React.FC<SmallCardProps> = ({ title, author, status }) => {
  return (
    <Card>
      <ImagePlaceholder />
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

const Card = styled.div`
  display: flex;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 10px;
  align-items: center;
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
