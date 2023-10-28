import { logo } from '../assets';
import { Tilt } from 'react-tilt';

const Profile = () => {
  return (
    <section className="absolute left-5 top-[120px] md:top-[170px] md:left-[100px] lg:top-[200px] ">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
      >
        <div className="flex w-[80px] md:w-[150px] md:h-[150px] h-[80px] bg-slate-gray rounded-full bg-opacity-60 backdrop-blur-sm p-2 items-center shadow-md hover:scale-110 ">
          <img
            src={logo}
            alt="logo"
            className="w-[60px] h-[60px] md:w-[130px] md:h-[130px]"
          />
        </div>
      </Tilt>
    </section>
  );
};

export default Profile;
