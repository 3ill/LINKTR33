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
      <section className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center">
          <img
            src={logo}
            alt="logo"
            className="w-[62.384px] h-[58px] md:w-[80px] md:h-[70px]"
          />
          <h1 className="text-white font-orbitron text-[20px] md:text-[40px] font-extrabold tracking-wider">
            | Chikezie Egbu{' '}
          </h1>
        </div>

        <div>
          <img src={git} alt="fork" className="w-[40px] h-[40px]" />
        </div>
      </section>
    </motion.nav>
  );
};

export default Nav;
