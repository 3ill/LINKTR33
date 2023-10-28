import { TypingText } from '../components/CustomTexts';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';

const Hero = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.75 }}
      className=" relative padding flex flex-col justify-center max-h-screen sm:max-h-screen  text-white max-sm:text-[40px] md:text-4xl lg:text-8xl font-extrabold font-satoshi bg-black  border-b-slate-200 backdrop-blur-[5px] w-full items-center "
    >
      <TypingText title="‹Developer ᜵›" textStyles="max-sm:mt-[7px]" />
    </motion.section>
  );
};

export default Hero;
