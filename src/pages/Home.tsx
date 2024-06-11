import OtherWorks from '@components/OtherWorks'
import SearchForm from '@components/SearchForm'
import Topics from '@components/Topics'
import React from 'react'

const Home: React.FC = () => {
  return (
    <>
      <SearchForm />
      <Topics />
      <OtherWorks />
    </>
  )
}

export default Home
