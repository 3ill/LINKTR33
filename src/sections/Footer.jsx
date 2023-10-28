import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import { TypingText } from '../components/CustomTexts';
import { footerLinks } from '../constants';

const Footer = () => {
  return (
    <motion.footer
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.75 }}
      className="sm:px-16 px-8 sm:py-18 py-12 flex flex-col bg-gray-400 bg-opacity-60 backdrop-blur-sm"
    >
      <div>
        <TypingText
          title="DSA CORP"
          textStyles="text-white font-satoshi  font-semibold text-[15px] md:text-[18px]"
        />

        <div className="flex flex-col mt-3 tracking-wide">
          <a
            href="mailto: preciousegbu@gmail.com ? subject: Mailed From Link Tree"
            className="text-white font-satoshi   font-medium text-[12px] md:text-[15px]"
          >
            preciousegbu@gmail.com
          </a>
          {footerLinks.map((link, index) => (
            <React.Fragment key={index}>
              <a
                href={link.url}
                className="text-gray-100 font-satoshi text-[12px] md:text-[15px]"
              >
                {link.label}
              </a>
            </React.Fragment>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <p className="font-semibold font-Azeret text-white text-[15px]">
            Building The Future
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
