import React, { useContext } from 'react'
import styled from 'styled-components'
import SmallCard from '../components/SmallCard'
import TitleSection from '../components/TitleSection'
import ArtContext from '../context/ArtContext'

const Favorites: React.FC = () => {
  const { artworks, loading, error } = useContext(ArtContext) // Получите данные из контекста

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }
  return (
    <>
      <Heading>
        Here Are Your <br />
        <Highlight>
          <Bookmark src="bookmark.svg" alt="bookmark" />
          <div>Favorites</div>
        </Highlight>
        <TitleSection
          subtitle={'Topics for you'}
          title={'Our special gallery'}
        />
      </Heading>
      <Grid>
        {artworks.map(
          (artwork: {
            id: number
            title: string
            artist_display: string
            image_id: string
          }) => (
            <SmallCard
              id={artwork.id}
              key={artwork.id}
              title={artwork.title}
              author={artwork.artist_display}
              status={'Public'} // Не уверен, что это поле правильное
              imageId={artwork.image_id}
            />
          )
        )}
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
  padding-bottom: 50px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 20px;
  padding-bottom: 4rem;
`
