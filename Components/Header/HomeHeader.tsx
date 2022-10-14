/* eslint-disable @next/next/no-img-element */
import { TouristAttraction } from '../../assets/tourist-attraction';
import { FiArrowRight } from 'react-icons/fi';

export const HomeHeader = () => {
  return (
    <>
      <div className="absolute left-0 right-0 text-center max-w-7xl mx-auto mt-48 z-20">
        <h1 className="text-white text-6xl md:text-8xl font-bold">
          Discovery story-worthy travel moments
        </h1>
      </div>
      <div className="grid grid-cols-3 bg-black">
        <div className="hover:cursor-pointer">
          <div className="z-20 group absolute flex items-end w-[33.33%] bottom-10">
            <h1 className="text-white text-3xl ml-5">
              The 5 best days trips to discover in Hanoi capital
            </h1>
            <FiArrowRight className="ml-4 text-white text-5xl mr-10 group-hover:translate-x-6 duration-500" />
          </div>
          <img
            src={TouristAttraction.cauVang}
            alt="Cau Vang - Vietnam"
            className="object-cover min-h-screen opacity-70 hover:opacity-100 duration-500"
          />
        </div>
        <div className="hover:cursor-pointer">
          <div className="z-20 group absolute flex items-end w-[33.33%] bottom-10">
            <h1 className="text-white text-3xl ml-5">
              Help me! Which is the more feasible to travel Saigon: train or
              plane?
            </h1>
            <FiArrowRight className="ml-4 text-white text-5xl mr-10 group-hover:translate-x-6 duration-500" />
          </div>
          <img
            src={TouristAttraction.haLong}
            alt="Cau Vang - Vietnam"
            className="object-cover min-h-screen opacity-70 hover:opacity-100 duration-500"
          />
        </div>
        <div className="hover:cursor-pointer">
          <div className="z-20 group absolute flex items-end w-[33.33%] bottom-10">
            <h1 className="text-white text-3xl ml-5">
              The top food and drink you must try in Hai Phong
            </h1>
            <FiArrowRight className="ml-4 text-white text-5xl mr-10 group-hover:translate-x-6 duration-500" />
          </div>
          <img
            src={TouristAttraction.hoiAn}
            alt="Cau Vang - Vietnam"
            className="object-cover min-h-screen opacity-70 hover:opacity-100 duration-500"
          />
        </div>
      </div>
    </>
  );
};
