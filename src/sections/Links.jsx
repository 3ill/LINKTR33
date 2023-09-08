import { links } from '../constants';

const Links = () => {
  const linkClicked = ({ url }) => {
    const link = url;
    window.open(link, '_blank');
  };
  return (
    <section className="padding relative">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[348px] md:w-[548px] md:h-[620px] h-[420px] bg-[#7e7e7e]/20 rounded-[12px] flex flex-col gap-y-7 justify-center items-center padding">
          {links.map((link) => (
            <div
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
                className="w-[200px] h-[40px] md:h-[60px] rounded-[10px] bg-[#ffff]/30 flex justify-center items-center shadow-lg group"
              >
                <h1 className="text-white font-Azeret text-[14px] md:text-[18px] font-semibold group-hover:pulse-animation">
                  {link.label}
                </h1>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Links;
