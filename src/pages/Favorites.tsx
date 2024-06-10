import React from 'react'
import styled from 'styled-components'
import SmallCard from '../components/Card'

const Favorites: React.FC = () => {
  return (
    <>
      <Heading>
        Here Are Your <br />
        <Highlight>
          <Bookmark src="bookmark.svg" alt="bookmark" />
          <div>Favorites</div>
        </Highlight>
        <Header>
          <Subtitle>Topics for you</Subtitle>
          <Title>Our special gallery</Title>
        </Header>
      </Heading>
      <Grid>
        {Array.from({ length: 19 }).map((_, index) => (
          <SmallCard
            key={index}
            title={'Charles V, bust length...'}
            author={'Giovanni Britto'}
            status={'Public'}
          />
        ))}
      </Grid>
    </>
  )
}

export default Favorites

const Heading = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: #333;
`

const Bookmark = styled.img`
  width: 2rem;
  padding-top: 2px;
`
const Highlight = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: #ff7a00;
`

const Header = styled.div`
  text-align: center;
  padding-top: 5rem;
`

const Subtitle = styled.div`
  color: #e0a449;
  font-size: 14px;
`

const Title = styled.p`
  margin: 0;
  font-size: 32px;
  color: #333;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 20px;
  padding-bottom: 4rem;
`
