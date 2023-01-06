/* eslint-disable @next/next/no-img-element */
import { GoSearch } from 'react-icons/go';
import { SupportData } from '../../assets/support';

export const Search = () => {
  return (
    <div className="lg:max-w-screen-xl mx-auto mt-20 md:mt-10 mb-36 md:mb-72">
      <div className="hidden lg:grid grid-cols-2 max-w-screen-xl absolute -z-10">
        <img
          src={SupportData.pic01}
          className="scale-90"
          alt="search_element"
        />
        <img src={SupportData.pic02} className="ml-12" alt="search_element" />
        <img
          src={SupportData.pic04}
          className="absolute mt-80 md:mt-96 pt-24 scale-50"
          alt="search_element"
        />
        <img
          src={SupportData.pic03}
          className="absolute ml-96 pl-72 scale-50 mt-24"
          alt="search_element"
        />
      </div>
      <div className="max-w-screen-lg mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-slate-900 pt-16 lg:pt-72">
          Support
        </h1>
        <p className="max-w-lg mx-auto text-lg mt-4 text-slate-500">
          Explore Best in Travel 2023 with Welcome to Vietnam with cool features
          and experiences.
        </p>
        <div className="flex justify-center">
          <div className="mt-8 flex justify-end items-center">
            <input
              className="shadow-sm md:shadow-xl text-xl w-max border rounded-full pl-10 pr-20 py-2 md:py-5 focus:outline-slate-500 transition duration-800"
              type="text"
              placeholder="Search anything!"
            />
            <div className="absolute p-2 md:p-4 mr-1 rounded-full bg-blue-500 hover:bg-blue-700 transition duration-700 cursor-pointer">
              <GoSearch className="text-2xl md:text-3xl rounded-full text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
