import type { NextPage } from 'next';
import { Footer } from '../Components/Footer/Footer';
import { NavigationBarDark } from '../Components/Navigation/NavigationDark';
import { CreateProduct } from '../Components/CreateProduct';

const CreatePage: NextPage = () => {
  return (
    <>
      <NavigationBarDark />
      <CreateProduct />
      <Footer />
    </>
  );
};

export default CreatePage;
