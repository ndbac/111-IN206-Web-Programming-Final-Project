import type { NextPage } from 'next';
import { NavigationBar } from '../Components/Navigation/Navigation';
import { HomeHeader } from '../Components/Header/HomeHeader';
import { DestinationRecommended } from '../Components/Destinations/DestinationRcm';

const Home: NextPage = () => {
  return (
    <>
      <NavigationBar />
      <HomeHeader />
      <DestinationRecommended />
    </>
  );
};

export default Home;
