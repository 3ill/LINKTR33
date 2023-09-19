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
      <div className={footerStyles.footerWrapper}>
        <TypingText
          title="All rights reserved"
          textStyles={footerStyles.footerText}
        />

        <a
          href="mailto: preciousegbu@gmail.com ? subject: Mailed From Link Tree"
          className={footerStyles.mailTextStyle}
        >
          preciousegbu@gmail.com
        </a>
      </div>
    </motion.footer>
  );
};

const footerStyles = {
  footerWrapper: 'flex flex-col justify-center items-center',
  footerText:
    'text-[#ababab] font-lexend gray-gradient text-[12px] md:text-[18px] font-semibold tracking-[2.4px] mt-[5px]',
  mailTextStyle:
    'text-white font-lexend gray-gradient text-[12px] md:text-[18px] font-semibold tracking-[2.4px]',
};

export default Footer;
