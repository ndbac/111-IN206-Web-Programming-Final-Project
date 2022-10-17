import { FiSearch, FiAlignLeft, FiArrowUpCircle } from 'react-icons/fi';
import { useState } from 'react';

export const NavigationBar = () => {
  const [sideBar, setSideBar] = useState(false);

  return (
    <>
      <div id="sidebar" className={sideBar ? 'block' : 'hidden'}>
        <div
          className="bg-black w-full h-full absolute opacity-30 z-50"
          onClick={() => setSideBar(!sideBar)}
        ></div>
        <div className="z-50 absolute min-w-[70%] min-h-full bg-white">
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
      <div className="z-20 left-0 right-0 max-w-screen-2xl items-center justify-center absolute mx-auto py-[5%] lg:py-[2%] grid grid-cols-3">
        <div className="flex ml-8 md:ml-10">
          <FiAlignLeft
            className="text-white text-2xl md:text-4xl -ml-3 mr-3 md:mr-5 lg:hidden hover:cursor-pointer"
            onClick={() => setSideBar(!sideBar)}
          />
          <div className="hover:cursor-pointer flex content-center text-white hover:text-slate-200">
            <FiSearch className="text-lg md:text-xl my-auto mr-1" />
            <h1 className="text-lg md:text-xl pt-1 my-auto hidden md:block">
              Search
            </h1>
          </div>
        </div>
        <div className="flex justify-center -mx-5 lg:mx-0">
          <h1 className="max-w-fit text-xl text-center md:text-4xl ml-0 xl:ml-0 lg:-ml-[80%] w-fit font-bold text-white hover:text-slate-200 hover:cursor-pointer">
            Welcome to Vietnam
          </h1>
        </div>
        <div className="flex items-center justify-end">
          <div className="lg:flex hidden">
            <h1 className="text-lg text-white hover:text-slate-200 mx-2 hover:cursor-pointer">
              Destinations
            </h1>
            <h1 className="text-lg text-white hover:text-slate-200 mx-2 hover:cursor-pointer">
              Stories
            </h1>
            <h1 className="text-lg text-white hover:text-slate-200 mx-2 hover:cursor-pointer">
              Shop
            </h1>
          </div>
          <div className="lg:mx-10 mr-5">
            <button className="hover:text-white text-sm md:text-lg font-bold duration-200 md:hover:bg-blue-600 md:bg-white md:py-2 md:px-5 md:rounded-full text-white md:text-black hover:cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
