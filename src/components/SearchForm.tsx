import React from 'react'
import styled from 'styled-components'

const SearchForm: React.FC = () => {
  return (
    <Wrapper>
      <Heading>
        Let's Find Some <Highlight>Art</Highlight> <br /> Here!
      </Heading>
      <SearchBox>
        <Input placeholder="Search art, artist, work..." />
        <SearchIcon src="search.png" alt="search" />
      </SearchBox>
    </Wrapper>
  )
}

export default SearchForm

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`

const Heading = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: #333;
`

const Highlight = styled.span`
  color: #ff7a00;
`

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 10px 20px;
  width: 60%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`

const Input = styled.input`
  border: none;
  outline: none;
  background: none;
  flex-grow: 1;
  font-size: 14px;
`

const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`
