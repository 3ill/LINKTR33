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
        <p className="text-[#ababab] font-Azeret text-[12px] md:text-[18px] font-semibold tracking-[2.4px]">
          All rights reserved
        </p>
        <TypingText
          title="preciousegbu@gmail.com"
          textStyles="text-white font-Azeret text-[12px] md:text-[18px] font-semibold tracking-[2.4px] mt-[5px]"
        />
      </div>
    </motion.footer>
  );
};

export default Footer;
