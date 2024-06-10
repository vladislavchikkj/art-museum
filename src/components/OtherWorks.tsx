import React, { useContext } from 'react'
import styled from 'styled-components'
import ArtContext from '../context/ArtContext'
import SmallCard from './SmallCard'
import TitleSection from './TitleSection'

const OtherWorks: React.FC = () => {
  const { artworks, loading, error } = useContext(ArtContext) // Получите данные из контекста

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }
  return (
    <Wrapper>
      <TitleSection subtitle={'Here some more'} title={'Other works for you'} />
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
    </Wrapper>
  )
}

export default OtherWorks

const Wrapper = styled.div`
  padding: 20px 0 100px 0;
  text-align: center;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 40px;
`
