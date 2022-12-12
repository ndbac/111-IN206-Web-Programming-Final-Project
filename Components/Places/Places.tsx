/* eslint-disable @next/next/no-img-element */
import { Background } from '../../assets/background';
import { FiSearch } from 'react-icons/fi';
import { BiChevronDown } from 'react-icons/bi';
import { PlaceData } from '../../assets/places';

const placeList = [
  {
    id: 1,
    name: 'Da Nang',
    location: 'The middle',
    pic: PlaceData.daNang,
  },
  {
    id: 2,
    name: 'Hai Phong',
    location: 'The North',
    pic: PlaceData.haPhong,
  },
  {
    id: 3,
    name: 'Ha Noi',
    location: 'The capital city',
    pic: PlaceData.haNoi,
  },
  {
    id: 4,
    name: 'Lam Dong',
    location: 'The South',
    pic: PlaceData.lamDong,
  },
  {
    id: 5,
    name: 'Lao Cai',
    location: 'The Northest',
    pic: PlaceData.laoCai,
  },
  {
    id: 6,
    name: 'Ho Chi Minh',
    location: 'The South',
    pic: PlaceData.saiGon,
  },
  {
    id: 7,
    name: 'Yen Bai',
    location: 'The Southwest',
    pic: PlaceData.yenBai,
  },
];

export const Places = () => {
  return (
    <>
      <div className="relative">
        <img
          src={Background.background03}
          alt="background"
          className="h-[30rem] w-full object-cover"
        />
        <div className="absolute bottom-[5%] left-[5%]">
          <h1 className="text-white text-6xl font-bold">
            Explore on places on WTV
          </h1>
          <p className="text-white mt-5">Eyes on Vietnam, South-East Asia</p>
        </div>
      </div>
      <div className="mt-8 md:mt-0 px-8 max-w-screen-xl mx-auto">
        <div className="max-w-screen-xl mx-auto mt-[4%] relative">
          <input
            type="email"
            placeholder="Search places"
            className="w-full md:w-[60%] px-4 py-2 md:px-8 md:py-3 border focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 placeholder-black"
          />
          <FiSearch className="text-xl absolute left-[92%] md:left-[55%] lg:left-[57%] bottom-[30%] hover:cursor-pointer" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4 md:gap-32">
          <div className="col-span-1">
            <p className="mb-2 text-md ml-2">Filter by type of place</p>
            <div className="relative">
              <select className="border px-5 w-full py-3 rounded-full appearance-none">
                <option value="0">All types</option>
                <option value="1">Continents and Subcontinents</option>
                <option value="2">Regions</option>
                <option value="3">Provinces</option>
                <option value="4">Cities</option>
                <option value="4">Neighborhoods</option>
              </select>
              <BiChevronDown className="absolute text-3xl bottom-0 text-gray-900 right-3 top-[25%]" />
            </div>
          </div>
          <div className="col-span-1">
            <p className="mb-2 text-md ml-2">Sort places by</p>
            <div className="relative">
              <select className="border px-5 w-full py-3 rounded-full appearance-none">
                <option value="0">Most popular</option>
                <option value="1">A - Z</option>
                <option value="2">Z - A</option>
              </select>
              <BiChevronDown className="absolute text-3xl bottom-0 text-gray-900 right-3 top-[25%]" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-20 gap-12">
          {placeList.map((place, index) => {
            return (
              <div className="col-span-1" key={index}>
                <div className="h-[18rem] w-auto overflow-hidden rounded-lg">
                  <img
                    src={place.pic}
                    alt={place.name}
                    className="object-cover h-[18rem] rounded-lg hover:scale-125 hover:cursor-pointer transition duration-700"
                  />
                </div>
                <p className="uppercase text-sm mt-4">{place.location}</p>
                <h1 className="text-2xl font-bold hover:cursor-pointer hover:underline">
                  {place.name}
                </h1>
              </div>
            );
          })}
        </div>
        <div className="mt-14">
          <span className="px-3 md:px-4 py-2 hover:cursor-pointer hover:bg-slate-200 mr-2 rounded-full border">
            {'<'}
          </span>
          <span className="px-3 md:px-4 py-2 hover:cursor-pointer bg-slate-200 mx-2 rounded-full border">
            1
          </span>
          <span className="px-3 md:px-4 py-2 hover:cursor-pointer hover:bg-slate-200 mx-2 rounded-full border">
            2
          </span>
          <span className="px-4 py-2 hover:cursor-pointer hover:bg-slate-200 mx-2 rounded-full border">
            3
          </span>
          <span className="mx-2">...</span>
          <span className="px-3 md:px-4 py-2 hover:cursor-pointer hover:bg-slate-200 mx-2 rounded-full border">
            100
          </span>
          <span className="px-3 md:px-4 py-2 hover:cursor-pointer hover:bg-slate-200 mx-2 rounded-full border">
            {'>'}
          </span>
        </div>
        <hr className="mt-12" />
      </div>
    </>
  );
};
