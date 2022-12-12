/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Background } from '../../assets/background';
import { BiRightArrowAlt } from 'react-icons/bi';

export const Newsletter = () => {
  return (
    <>
      <div>
        <div className="relative overflow-hidden">
          <img
            src={Background.background02}
            alt="background"
            className="h-[60rem] lg::h-[55rem] w-full object-cover"
          />
          <div className="absolute top-[10%] md:top-[15%] lg:top-[20%] md:mx-10 px-10 lg:mx-auto lg:max-w-screen-2xl left-0 right-0 mr-auto ml-auto">
            <div className="md:flex">
              <div className="mt-[5%] mx-6 md:mx-0 md:max-w-[65%]">
                <h1 className="text-white text-5xl md:text-7xl font-bold">
                  Your next trip starts here
                </h1>
                <p className="text-white text-lg md:text-2xl mt-8 md:mt-16">
                  Subscribe to our weekly newsletters to explore new
                  destinations and meet Welcome to Vietnam's far-flung team of
                  writers and editors. Packed with insightful advice from local
                  experts, our newsletters will bring the world to your inbox.
                </p>
                <p className="text-white text-lg md:text-2xl mt-4 md:mt-7">
                  Want to read a recent newsletter?
                </p>
                <div className="mt-4 ml-5">
                  <div className="flex items-center">
                    <BiRightArrowAlt className="text-white text-2xl md:text-3xl mr-3" />
                    <p className="text-white text-sm md:text-md">
                      Get a deep dive into a trending destination
                    </p>
                  </div>
                  <div className="flex items-center mt-4 md:mt-0">
                    <BiRightArrowAlt className="text-white text-2xl md:text-3xl mr-3" />
                    <p className="text-white text-sm md:text-md">
                      Stay updated on the latest travel news and trends
                    </p>
                  </div>
                </div>
                <div className="flex mt-5 items-center">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-[80%] md:w-[60%] px-4 py-2 md:px-8 md:py-3 border rounded-full focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 placeholder-black"
                  />
                  <button className="ml-2 md:ml-6 bg-blue-600 hover:bg-blue-400 duration-500 text-white font-bold rounded-full px-4 md:px-12 py-3 hover:cursor-pointer">
                    Subscribe
                  </button>
                </div>
                <p className="text-white text-sm mt-4 ml-2">
                  Subscribe to Lonely Planet newsletters and promotions. Read
                  our{' '}
                  <a className="underline hover:cursor-pointer">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
              <div className="mt-8">
                <img src={Background.iphone} alt="welcome to vietnam app" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
