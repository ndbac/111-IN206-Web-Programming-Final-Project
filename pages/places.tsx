import type { NextPage } from 'next';
import { NavigationBar } from '../Components/Navigation/Navigation';
import { Footer } from '../Components/Footer/Footer';
import { Places } from '../Components/Places/Places';

const PlacesPage: NextPage = () => {
  return (
    <>
      <NavigationBar />
      <Places />
      <Footer />
    </>
  );
};

export default PlacesPage;
