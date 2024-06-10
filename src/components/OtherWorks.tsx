import React from 'react'
import styled from 'styled-components'
import SmallCard from './Card'

const OtherWorks: React.FC = () => {
  return (
    <Wrapper>
      <Header>Here some more</Header>
      <SubHeader>Other works for you</SubHeader>
      <Grid>
        {Array.from({ length: 9 }).map((_, index) => (
          <SmallCard
            key={index}
            title={'Charles V, bust length...'}
            author={'Giovanni Britto'}
            status={'Public'}
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

const Header = styled.h2`
  color: #f39c12;
  margin-bottom: 5px;
`

const SubHeader = styled.h1`
  color: #333;
  margin-bottom: 20px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 40px;
`
