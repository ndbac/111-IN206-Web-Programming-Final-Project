import type { NextPage } from 'next';
import { NavigationBar } from '../Components/Navigation/Navigation';
import { Footer } from '../Components/Footer/Footer';
import { Newsletter } from '../Components/Newsletter/Newsletter';

const Home: NextPage = () => {
  return (
    <>
      <NavigationBar />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
