import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const TopDestinations = [
  'Ho Chi Minh City',
  'Hanoi Capital City',
  'Da Nang City',
  'Hai Phong City',
  'Mong Cai City',
  'Vinh City',
  'Ba Ria Vung Tau City',
  'Buon Ma Thuat City',
  'Can Tho City',
  'Quang Binh',
  'Nghe An',
  'Sapa',
  'Ha Giang',
  'Lang Son',
  'Explore more destinations',
];

const TravelInterests = [
  'Adventure Travel',
  'Art and Culture',
  'Beaches, Coasts, and Islands',
  'Festivals',
  'Food and Drink',
  'Honeymoon and Romance',
  'Road Trips',
  'Sustainable Travel',
  'Travel Gear and Tech',
];

const Shops = [
  'Destination Guides',
  'Lonely Planet Kids',
  'Lonely Planet Shop',
  'Non-English Guides',
];

const AboutUsData = [
  'Abou Welcome to Vietnam',
  'Abou Us',
  'Press, Trade, and Advertising',
  'Privacy Policy',
  'Terms and Conditions',
  'Work for Us',
  'Write for Us',
  'Sitemap',
];

export const Footer = () => {
  return (
    <>
      <div className="w-max-screen-xl mx-auto container">
        <div className="text-center md:text-left justify-center md:grid md:grid-cols-5 mt-24 mx-5 lg:mx-0">
          <div className="col-span-2 lg:max-w-[70%]">
            <h1 className="text-3xl lg:text-5xl text-blue-700 font-black md:max-w-[90%] lg:max-w-full">
              Welcome to Vietnam
            </h1>
            <p className="mt-5 text-lg">For Explorers Everywhere</p>
            <p className="mt-10 font-semibold text-md uppercase">Follow us</p>
            <div className="flex mt-2 justify-center md:justify-start">
              <FaFacebook className="mr-5 text-2xl text-blue-700 hover:cursor-pointer" />
              <FaLinkedin className="mr-5 text-2xl text-blue-900 hover:cursor-pointer" />
              <FaTwitter className="mr-5 text-2xl text-blue-500 hover:cursor-pointer" />
              <FaInstagram className="mr-5 text-2xl text-red-600 hover:cursor-pointer" />
            </div>

            <p className="uppercase text-md mt-10 font-bold">Subscribe</p>
            <p className="mt-4 text-blue-700 font-bold tex-lg lg:text-2xl">
              Get 20% off our online shop.
            </p>
            <input
              type="email"
              placeholder="Email address"
              className="mt-5 px-5 py-2 lg:px-10 lg:py-3 border rounded-full focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 placeholder-black"
            />
            <p className="mt-4 text-[10px] lg:text-[13px] mx-10 md:mx-0 md:max-w-[70%] lg:max-w-[90%] text-center md:text-left">
              Subscribe to Lonely Planet newsletters and promotions. Read our
              <a className="text-blue-700 hover:cursor-pointer hover:underline focus:outline-none">
                {' '}
                Privacy Policy
              </a>
              .
            </p>
            <button className="mt-5 text-sm lg:text-lg px-5 py-1 lg:px-7 lg:py-2 border font-bold rounded-full hover:bg-blue-700 hover:text-white">
              Sign Up
            </button>
          </div>
          <div className="col-span-1 hidden md:block">
            <h1 className="uppercase font-bold text-md lg:text-lg mb-7 hover:cursor-pointer">
              Top descriptions
            </h1>
            <div>
              {TopDestinations.map((data, index) => (
                <p
                  key={index}
                  className="text-[10px] lg:text-sm hover:text-blue-700 hover:cursor-pointer my-2 text-slate-600"
                >
                  {data}
                </p>
              ))}
            </div>
          </div>
          <div className="col-span-1 hidden md:block">
            <h1 className="uppercase font-bold text-md lg:text-lg mb-7 hover:cursor-pointer">
              Travel interests
            </h1>
            <div>
              {TravelInterests.map((data, index) => (
                <p
                  key={index}
                  className="text-[10px] lg:text-sm hover:text-blue-700 hover:cursor-pointer my-2 text-slate-600"
                >
                  {data}
                </p>
              ))}
            </div>
          </div>
          <div className="col-span-1 hidden md:block">
            <h1 className="uppercase font-bold text-md lg:text-lg mb-7 hover:cursor-pointer">
              Shop
            </h1>
            <div>
              {Shops.map((data, index) => (
                <p
                  key={index}
                  className="text-[10px] lg:text-sm hover:text-blue-700 hover:cursor-pointer my-2 text-slate-600"
                >
                  {data}
                </p>
              ))}
            </div>
            <h1 className="uppercase font-bold text-lg mt-16 mb-7 hover:cursor-pointer">
              About us
            </h1>
            <div>
              {AboutUsData.map((data, index) => (
                <p
                  key={index}
                  className="text-[10px] lg:text-sm hover:text-blue-700 hover:cursor-pointer my-2 text-slate-600"
                >
                  {data}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-16 mt-16">
        <div className="w-max-screen-xl mx-auto container lg:flex text-center items-center justify-between">
          <p className="text-white mx-5 text-sm md:text-md">
            © 2022 Welcome to Vietnam. All rights reserved. No part of this site
            may be reproduced without our written permission.
          </p>
          <div className="flex items-center justify-center mt-8 lg:mt-0">
            <p className="text-white font-bold text-sm lg:text-xl uppercase mr-5">
              Languages
            </p>
            <button className="text-black font-bold border py-1.5 px-12 lg:py-3 lg:px-16 rounded-full bg-white">
              English
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
