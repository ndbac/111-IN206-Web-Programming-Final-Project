import type { NextPage } from 'next';
import { NavigationBar } from '../Components/Navigation/Navigation';
import { HomePage } from '../Components/HomePage';

const Home: NextPage = () => {
  return (
    <>
      <NavigationBar />
      <HomePage />
    </>
  );
};

export default Home;
