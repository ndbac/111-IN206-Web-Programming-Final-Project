import type { NextPage } from 'next';
import { Navigation } from '../Components/Navigation/Navigation';
import { HomeHeader } from '../Components/Header/HomeHeader';

const Home: NextPage = () => {
  return (
    <>
      <Navigation />
      <HomeHeader />
    </>
  );
};

export default Home;
