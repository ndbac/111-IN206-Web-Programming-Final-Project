import type { NextPage } from 'next';
import { NavigationBarDark } from '../Components/Navigation/NavigationDark';
import { Footer } from '../Components/Footer/Footer';
import { Search } from '../Components/Search';

const SearchPage: NextPage = () => {
  return (
    <>
      <NavigationBarDark />
      <Search />
      <Footer />
    </>
  );
};

export default SearchPage;
