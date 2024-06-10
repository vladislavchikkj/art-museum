import React from 'react'
import Searcher from '../components/Searcher'
import Topics from '../components/Topics'
import OtherWorks from '../components/OtherWorks'

const Home: React.FC = () => {
  return (
    <>
      <Searcher />
      <Topics />
      <OtherWorks />
    </>
  )
}

export default Home
