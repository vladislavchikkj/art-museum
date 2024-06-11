import React from "react";
import SearchForm from "../components/sections/SearchForm";
import OtherWorks from "../components/sections/OtherWorks";
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
