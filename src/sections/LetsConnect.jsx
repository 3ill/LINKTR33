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
      <div className={connectStyles.connectContainer}>
        <TypingText
          title="Connect With Me"
          textStyles={connectStyles.textStyles}
        />
      </div>
    </motion.section>
  );
};

const connectStyles = {
  connectContainer: 'flex flex-col justify-center items-center relative',
  textStyles:
    'text-white font-Azeret font-extrabold text-[20px] md:text-[40px] tracking-widest',
};

export default LetsConnect;
