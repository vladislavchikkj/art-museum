import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import FavoritesPage from './pages/FavoritesPage'
import HomePage from './pages/HomePage'

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
