import React from "react";
import OtherWorks from "../components/sections/OtherWorks";
import SearchForm from "../components/sections/SearchForm/SearchForm";
import Topics from "../components/sections/Topics";

const Home: React.FC = () => {
  return (
    <>
      <SearchForm />
      <Topics />
      <OtherWorks />
    </>
  );
};

export default Home;
