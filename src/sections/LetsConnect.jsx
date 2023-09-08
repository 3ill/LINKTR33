import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import { TypingText } from '../components/CustomTexts';
const LetsConnect = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.75 }}
      className="padding-t"
    >
      <div className="flex flex-col justify-center items-center">
        <TypingText
          title="Connect With Me"
          textStyles="text-white font-Azeret font-semibold text-[20px] md:text-[40px] tracking-widest"
        />
      </div>
    </motion.section>
  );
};

export default LetsConnect;
