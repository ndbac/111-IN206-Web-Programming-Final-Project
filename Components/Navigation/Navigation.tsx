import { FiSearch, FiAlignLeft, FiArrowUpCircle } from 'react-icons/fi';
import { useState } from 'react';

export const Navigation = () => {
  const [sideBar, setSideBar] = useState(false);

  return (
    <>
      <div id="sidebar" className={sideBar ? 'block' : 'hidden'}>
        <div
          className="bg-black w-full h-full absolute opacity-30"
          onClick={() => setSideBar(!sideBar)}
        ></div>
        <div className="absolute min-w-[70%] min-h-full bg-white">
          <div>
            <div className="flex py-5 my-16 pl-10 hover:cursor-pointer">
              <h1 className="text-bold text-xl md:text-3xl font-semibold">
                Destinations
              </h1>
              <FiArrowUpCircle className="my-auto ml-auto mr-10 text-2xl md:text-3xl rotate-180" />
            </div>
            <div className="flex py-5 my-16 pl-10 hover:cursor-pointer">
              <h1 className="text-bold text-xl md:text-3xl font-semibold">
                Stories
              </h1>
              <FiArrowUpCircle className="my-auto ml-auto mr-10 text-2xl md:text-3xl rotate-180" />
            </div>
            <div className="flex py-5 my-16 pl-10 hover:cursor-pointer">
              <h1 className="text-bold text-xl md:text-3xl font-semibold">
                Shop
              </h1>
              <FiArrowUpCircle className="my-auto ml-auto mr-10 text-2xl md:text-3xl rotate-180" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl items-center justify-center bg-black mx-auto py-[5%] lg:py-[2%] grid grid-cols-3">
        <div className="flex ml-8 md:ml-10">
          <FiAlignLeft
            className="text-white text-2xl md:text-4xl -ml-3 mr-3 md:mr-5 lg:hidden"
            onClick={() => setSideBar(!sideBar)}
          />
          <div className="hover:cursor-pointer flex text-white hover:text-slate-200">
            <FiSearch className="text-lg md:text-xl my-auto mr-1" />
            <h1 className="font-bold text-lg md:text-xl my-auto hidden md:block">
              Search
            </h1>
          </div>
        </div>
        <div className="flex justify-center -mx-5 lg:mx-0">
          <h1 className="max-w-fit text-xl md:text-4xl w-fit font-bold font-montserrat text-white hover:text-slate-200 hover:cursor-pointer">
            Welcome to Hanoi
          </h1>
        </div>
        <div className="flex items-center justify-end">
          <div className="lg:flex hidden">
            <h1 className="text-lg font-bold text-white hover:text-slate-200 mx-2 hover:cursor-pointer">
              Destinations
            </h1>
            <h1 className="text-lg font-bold text-white hover:text-slate-200 mx-2 hover:cursor-pointer">
              Stories
            </h1>
            <h1 className="text-lg font-bold text-white hover:text-slate-200 mx-2 hover:cursor-pointer">
              Shop
            </h1>
          </div>
          <div className="lg:mx-10 mr-5">
            <button className="text-sm md:text-lg font-bold duration-200 md:hover:bg-blue-700 md:bg-white md:py-2 md:px-5 md:rounded-full text-white md:text-black hover:cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
