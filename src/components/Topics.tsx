import React from 'react'
import styled from 'styled-components'
import BookmarkButton from './BookmarkButton/BookmarkButton'

const Topics: React.FC = () => {
  return (
    <Wrapper>
      <Header>
        <Subtitle>Topics for you</Subtitle>
        <Title>Our special gallery</Title>
      </Header>
      <Gallery>
        {[1, 2, 3].map((item, index) => (
          <Card key={index}>
            <ImagePlaceholder>Image</ImagePlaceholder>
            <CardContent>
              <CardTitle>Charles V, bust length...</CardTitle>
              <CardAuthor>Giovanni Britto</CardAuthor>
              <CardFooter>
                <CardStatus>Public</CardStatus>
                <BookmarkButton />
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </Gallery>
      <Pagination>
        <PageButton active>1</PageButton>
        <PageButton>2</PageButton>
        <PageButton>3</PageButton>
        <PageButton>4</PageButton>
        <NextButton>›</NextButton>
      </Pagination>
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

const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
`

const Subtitle = styled.div`
  color: #ff7a00;
  font-size: 14px;
`

const Title = styled.h1`
  font-size: 32px;
  color: #333;
`

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
`

const Card = styled.div`
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
`

const CardContent = styled.div`
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background: white;
  position: absolute;
  padding: 15px;
  width: 80%;
  bottom: 0;
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

const Pagination = styled.div`
  display: flex;
  width: 100%;
  margin: 20px;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
`

const PageButton = styled.button<{ active?: boolean }>`
  background: ${({ active }) => (active ? '#ff7a00' : '#FAFAFA')};
  color: ${({ active }) => (active ? '#fff' : '#333')};
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background: #ff7a00;
    color: #fff;
  }
`

const NextButton = styled(PageButton)`
  padding: 5px 8px;
`
