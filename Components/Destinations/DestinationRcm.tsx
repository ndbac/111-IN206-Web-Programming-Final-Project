/* eslint-disable @next/next/no-img-element */
import { DestinationRcm } from '../../assets/destinationRcm';

const destinationData = [
  {
    title: 'Hoi An - A Charming Town',
    pictureUrl: DestinationRcm.hoiAn,
    id: 1,
  },
  {
    title: 'The Imperial City in Hue',
    pictureUrl: DestinationRcm.hueImperial,
    id: 2,
  },
  {
    title: 'Lung Cu flag tower',
    pictureUrl: DestinationRcm.lungCu,
    id: 3,
  },
];

export const DestinationRecommended = () => {
  return (
    <>
      <div className="container max-w-screen-2xl mx-auto mt-20 mb-40">
        <div className="mx-10 mb-10 md:mb-14">
          <h3 className="uppercase text-slate-700 font-bold">Plan your trip</h3>
          <div className="flex justify-between">
            <h1 className="font-bold text-4xl md:text-5xl mt-5">
              Where to next?
            </h1>
            <button className="hidden lg:block border px-5 py-2 mt-14 mr-0 rounded-full font-bold text-sm hover:bg-blue-500 hover:text-white">
              View all destinations
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-10">
          {destinationData.map(des => (
            <div className="group h-86 lg:h-96" key={des.id}>
              <img
                src={des.pictureUrl}
                alt={des.title}
                className="hover:cursor-pointer object-cover w-[100%] h-48 md:h-[70%] lg:h-[100%] rounded-2xl group-hover:scale-110 group-hover:-translate-y-1 transition ease-in-out duration-700"
              />
              <button className="font-bold text-xl lg:text-2xl pt-4 w-full text-left group-hover:text-slate-800">
                {des.title}
              </button>
            </div>
          ))}
          <button className="lg:hidden md:col-span-3 mx-[20%] md:mx-[37%] text-center border -mt-4 md:-mt-8 px-5 py-2 rounded-full font-bold text-sm hover:bg-blue-500 hover:text-white">
            View all destinations
          </button>
        </div>
      </div>
    </>
  );
};
