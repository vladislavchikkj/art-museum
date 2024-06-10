import React from 'react'
import styled from 'styled-components'

const Detail: React.FC = () => {
  return (
    <Wrapper>
      <ImagePlaceholder>
        <IconPlaceholder />
      </ImagePlaceholder>
      <Content>
        <Title>Charles V, bust length, holding a sword, facing right</Title>
        <Author>Giovanni Britto</Author>
        <Date>1535-45</Date>
        <SectionTitle>Overview</SectionTitle>
        <InfoList>
          <InfoItem>
            <strong>Artist nationality:</strong> German
          </InfoItem>
          <InfoItem>
            <strong>Dimensions:</strong> Sheet: 19 3/8 x 13 11/16 in. (49.2 x
            34.8 cm)
          </InfoItem>
          <InfoItem>
            <strong>Credit Line:</strong> Rogers Fund, 1917
          </InfoItem>
          <InfoItem>
            <strong>Repository:</strong> Metropolitan Museum of Art, New York,
            NY
          </InfoItem>
          <InfoItem>Public</InfoItem>
        </InfoList>
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
`

const ImagePlaceholder = styled.div`
  width: 30rem;
  height: 30rem;
  background-color: #e0e0e0;
  border-radius: 5px;
  margin-bottom: 20px;
  position: relative;
`

const IconPlaceholder = styled.div`
  width: 24px;
  height: 24px;
  background-color: #e0e0e0;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  right: 10px;
`

const Content = styled.div`
  width: 100%;
  max-width: 600px;
  text-align: left;
`

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin: 0;
`

const Author = styled.p`
  font-size: 18px;
  color: #f39c12;
  margin: 5px 0;
`

const Date = styled.p`
  font-size: 16px;
  color: #666;
  margin: 5px 0;
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
`
