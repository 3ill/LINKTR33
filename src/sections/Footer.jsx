import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import { TypingText } from '../components/CustomTexts';

const Footer = () => {
  return (
    <motion.footer
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.75 }}
      className="padding"
    >
      <div className="flex flex-col justify-center items-center">
        <TypingText
          title="All rights reserved"
          textStyles="text-[#ababab] font-Azeret text-[12px] md:text-[18px] font-semibold tracking-[2.4px] mt-[5px]"
        />

        <a
          href="mailto: preciousegbu@gmail.com ? subject: Mailed From Link Tree"
          className="text-white font-Azeret text-[12px] md:text-[18px] font-semibold tracking-[2.4px]"
        >
          preciousegbu@gmail.com
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;
