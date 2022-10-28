import type { NextPage } from 'next';
import { NavigationBar } from '../Components/Navigation/Navigation';
import { HomeHeader } from '../Components/Header/HomeHeader';
import { DestinationRecommended } from '../Components/Destinations/DestinationRcm';
import { HomeBanner } from '../Components/HomeBanner/HomeBanner';

const Home: NextPage = () => {
  return (
    <>
      <NavigationBar />
      <HomeHeader />
      <DestinationRecommended />
      <HomeBanner />
    </>
  );
};

export default Home;
