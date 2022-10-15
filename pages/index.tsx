import type { NextPage } from 'next';
import { NavigationBar } from '../Components/Navigation/Navigation';
import { HomeHeader } from '../Components/Header/HomeHeader';

const Home: NextPage = () => {
  return (
    <>
      <NavigationBar />
      <HomeHeader />
    </>
  );
};

export default Home;
