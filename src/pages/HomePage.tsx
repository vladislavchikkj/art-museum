import React from 'react'
import Searcher from '../components/Searcher'
import Topics from '../components/Topics'
import OtherWorks from '../components/OtherWorks'

const HomePage: React.FC = () => {
  return (
    <>
      <Searcher />
      <Topics />
      <OtherWorks />
    </>
  )
}

export default HomePage
