import OtherWorks from "@components/sections/OtherWorks";
import SearchForm from "@components/sections/SearchForm/SearchForm";
import Topics from "@components/sections/Topics/Topics";
import React from "react";

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
