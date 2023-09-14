import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion';

import { links } from '../constants';

const Links = () => {
  const linkClicked = ({ url }) => {
    const link = url;
    window.open(link, '_blank');
  };
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.75 }}
      className="padding relative"
    >
      <div className={linkStyles.linkContainer}>
        <div className={linkStyles.linkWrapper}>
          {links.map((link, index) => (
            <motion.div
              variants={fadeIn('down', 'spring', index * 0.5, 0.75)}
              key={link.url}
              className="flex flex-row gap-[21px] items-center"
            >
              <img
                src={link.img}
                className="w-[40px] h-[40px] md:w-[80px] md:h-[80px] hover:animate-pulse"
                onClick={() => linkClicked(link)}
              />
              <button
                onClick={() => linkClicked(link)}
                className={linkStyles.buttonStyle}
              >
                <h1 className={linkStyles.labelStyle}>{link.label}</h1>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const linkStyles = {
  linkContainer: 'flex flex-col justify-center items-center',
  linkWrapper:
    'w-[348px] md:w-[548px] md:h-[620px] h-[420px] bg-[#7e7e7e]/20 rounded-[12px] flex flex-col gap-y-7 justify-center items-center padding shadow-lg',
  buttonStyle:
    'w-[200px] h-[40px] md:h-[60px] rounded-[10px] bg-[#ffff]/30 flex justify-center items-center shadow-lg group',
  labelStyle:
    'text-white font-Azeret text-[14px] md:text-[18px] font-semibold group-hover:pulse-animation',
};

export default Links;
