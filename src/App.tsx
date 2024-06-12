import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { ArtProvider } from "./context/ArtContext";
import Detail from "./pages/Detail/Detail";
import Favorites from "./pages/Favorites/Favorites";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <ArtProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </ArtProvider>
  );
};

export default App;
