import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import Detail from './pages/Detail'

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/detail" element={<Detail />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
