import SearchForm from '@components/sections/SearchForm/searchForm';
import Topics from '@components/sections/Topics/topics';
import OtherWorks from '@components/sections/otherWorks';
import React from 'react';

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
