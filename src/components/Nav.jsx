import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import { git, logo } from '../assets';

const Nav = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="padding"
    >
      <section className={navStyles.sectionContainer}>
        <div className={navStyles.navItems}>
          <img src={logo} alt="logo" className={navStyles.logoStyles} />
          <h1 className={navStyles.headerStyles}>| Chikezie </h1>
        </div>

        <div>
          <img src={git} alt="fork" className="w-[40px] h-[40px]" />
        </div>
      </section>
    </motion.nav>
  );
};

const navStyles = {
  sectionContainer: 'flex flex-row justify-between items-center',
  navItems: 'flex flex-row items-center',
  logoStyles: 'w-[62.384px] h-[58px] md:w-[80px] md:h-[70px]',
  headerStyles:
    'text-white font-lexend purple-gradient text-[30px] md:text-[50px] font-extrabold tracking-wider',
};

export default Nav;
