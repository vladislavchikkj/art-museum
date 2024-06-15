import OtherWorks from '@components/sections/otherWorks';
import SearchForm from '@components/sections/searchForm/searchForm';
import Topics from '@components/sections/topics/topics';
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
