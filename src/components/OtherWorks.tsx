import React, { useContext } from 'react'
import styled from 'styled-components'
import ArtContext from '../context/ArtContext'
import SmallCard from './SmallCard'
import TitleSection from './TitleSection'

const OtherWorks: React.FC = () => {
  const { artworks, loading, error } = useContext(ArtContext)

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
        {artworks.map((artwork) => (
          <SmallCard
            id={artwork.id}
            key={artwork.id}
            title={artwork.title}
            author={artwork.artist_display}
            imageId={artwork.image_id}
            status={artwork.is_public_domain}
          />
        ))}
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
