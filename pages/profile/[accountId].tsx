import type { NextPage } from 'next';
import { NavigationBarDark } from '../../Components/Navigation/NavigationDark';
import { Footer } from '../../Components/Footer/Footer';
import { Profile } from '../../Components/Profile';

const ProfilePage: NextPage = () => {
  return (
    <>
      <NavigationBarDark />
      <Profile />
      <Footer />
    </>
  );
};

export default ProfilePage;
