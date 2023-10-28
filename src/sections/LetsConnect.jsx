import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, planetVariants } from '../utils/motion';
import { TitleText } from '../components/CustomTexts';
import { links } from '../constants';

const LetsConnect = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.75 }}
      className="padding-t"
    >
      <div className="flex flex-col">
        <TitleText title="let's connect" textStyles="header-text" />
        <p className="font-satoshi text-white-400 font-medium md:max-w-[700px] lg:max-w-[700px] mt-3 md:text-[18px]">
          Feel free to reach out on any of the platforms listed below to kick
          off a conversation.
        </p>
        <div className="flex flex-row gap-5 mt-3">
          {links.map((link, index) => (
            <React.Fragment key={index}>
              <motion.button variants={planetVariants('left')}>
                <img
                  src={link.img}
                  alt={link.label}
                  className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] hover:animate-pulse hover:scale-110 active:scale-105 transition"
                />
              </motion.button>
            </React.Fragment>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default LetsConnect;
