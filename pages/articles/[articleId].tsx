import type { NextPage } from 'next';
import { NavigationBarDark } from '../../Components/Navigation/NavigationDark';
import { Footer } from '../../Components/Footer/Footer';
import { Articles } from '../../Components/Articles';
import { motion, useScroll } from 'framer-motion';

const ArticlesPage: NextPage = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <NavigationBarDark />
      <motion.div
        className="fixed top-0 left-0 right-0 h-[8px] bg-blue-600 origin-left opacity-100 z-50"
        style={{ scaleX: scrollYProgress }}
      />
      <Articles />
      <Footer />
    </>
  );
};

export default ArticlesPage;
