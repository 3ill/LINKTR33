import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import { TitleText } from '../components/CustomTexts';
import { Tilt } from 'react-tilt';
import { profile } from '../assets';

const About = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.75 }}
      className="flex flex-col"
      id="about"
    >
      <TitleText title="something about me" textStyles="header-text" />
      <div className="flex flex-col md:flex-row items-center   gap-5 lg:gap-9 ">
        <p className=" font-satoshi text-white-400 font-medium md:max-w-[400px] lg:max-w-[700px] mt-3 md:leading-[30px] md:text-[18px]">
          Hey, I&apos;m Chikezie, but you can just call me 3illBaby. I&apos;m a
          software developer, mainly into MERN stack, with a sweet spot for
          Blockchain and Smart Contract development. When I&apos;m not coding up
          something cool, you&apos;ll probably find me deep into anime or
          kicking butt in Call of Duty Mobile. I&apos;m all about innovation and
          fun, whether it&apos;s watching a great show or owning it in an online
          showdown.
        </p>
        <div>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
          >
            <div className="flex  bg-gray-400 bg-opacity-60 md:w-[450px] md:h-[500px] md:mt-5  shadow-lg backdrop-blur-sm rounded-[9px] p-5 hover:scale-110">
              <img
                src={profile}
                className="object-cover w-[300px]  ml-5 md:ml-[90px]"
              />
            </div>
          </Tilt>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
