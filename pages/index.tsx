import type { NextPage } from 'next';
import { NavigationBar } from '../Components/Navigation/Navigation';
import { HomePage } from '../Components/HomePage';
import { Footer } from '../Components/Footer/Footer';

const Home: NextPage = () => {
  return (
    <>
      <NavigationBar />
      <HomePage />
      <Footer />
    </>
  );
};

export default Home;
