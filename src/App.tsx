import Layout from "@components/layout/Layout";
import Detail from "@pages/Detail/Detail";
import Favorites from "@pages/Favorites/Favorites";
import Home from "@pages/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Route>
    </Routes>
  );
};

export default App;
