import type { NextPage } from 'next';
import { NavigationBarDark } from '../../Components/Navigation/NavigationDark';
import { Footer } from '../../Components/Footer/Footer';
import { Articles } from '../../Components/Articles';

const ArticlesPage: NextPage = () => {
  return (
    <>
      <NavigationBarDark />
      <Articles />
      <Footer />
    </>
  );
};

export default ArticlesPage;
