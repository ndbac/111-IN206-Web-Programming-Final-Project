import type { NextPage } from 'next';
import { NavigationBar } from '../Components/Navigation/Navigation';
import { Footer } from '../Components/Footer/Footer';
import { Story } from '../Components/Stories';

const ArticlesPage: NextPage = () => {
  return (
    <>
      <NavigationBar />
      <Story />
      <Footer />
    </>
  );
};

export default ArticlesPage;
