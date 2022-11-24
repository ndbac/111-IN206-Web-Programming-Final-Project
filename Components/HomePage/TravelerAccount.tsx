/* eslint-disable @next/next/no-img-element */
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { TravelerAccounts } from '../../assets/travelerAccount';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const travelerData = [
  {
    content: '@richartwhitetravels',
    pictureUrl: TravelerAccounts.traveler01,
    id: 1,
  },
  {
    content: '@ali.vonlewinski',
    pictureUrl: TravelerAccounts.traveler02,
    id: 2,
  },
  {
    content: '@pandeyrr',
    pictureUrl: TravelerAccounts.traveler03,
    id: 3,
  },
  {
    content: '@unchartedbackpacker',
    pictureUrl: TravelerAccounts.traveler04,
    id: 4,
  },
  {
    content: '@o_thessalonikios',
    pictureUrl: TravelerAccounts.traveler05,
    id: 5,
  },
  {
    content: '@les_carnets_de_mel',
    pictureUrl: TravelerAccounts.traveler06,
    id: 6,
  },
  {
    content: '@richartwhitetravels',
    pictureUrl: TravelerAccounts.traveler07,
    id: 7,
  },
  {
    content: '@ali.vonlewinski',
    pictureUrl: TravelerAccounts.traveler08,
    id: 8,
  },
  {
    content: '@pandeyrr',
    pictureUrl: TravelerAccounts.traveler09,
    id: 9,
  },
];

export const TravelerAccount = () => {
  return (
    <>
      <div className="bg-blue-600">
        <div className="md:flex justify-between mx-[5%] lg:mx-[10%] pt-[80px] pb-[64px]">
          <a className="text-white text-4xl lg:text-5xl font-bold hover:cursor-pointer">
            #welcometovietnam
          </a>
          <div className="flex items-center mt-5 md:mt-0">
            <p className="text-white md:ml-16 md:text-sm lg:text-lg uppercase mr-5">
              Follow Welcome to Vietnam
            </p>
            <FaFacebook className="text-white text-sm md:text-xl mx-[3px] hover:cursor-pointer" />
            <FaLinkedin className="text-white text-sm md:text-xl mx-[3px] hover:cursor-pointer" />
            <FaInstagram className="text-white text-sm md:text-xl mx-[3px] hover:cursor-pointer" />
            <FaTwitter className="text-white text-sm md:text-xl mx-[3px] hover:cursor-pointer" />
          </div>
        </div>
        <div className="pb-16">
          <Swiper
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 0,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {travelerData.map(traveler => {
              return (
                <SwiperSlide key={traveler.id}>
                  <div className="bg-black relative">
                    <img
                      src={traveler.pictureUrl}
                      alt={traveler.pictureUrl}
                      className="h-[26rem] object-cover opacity-60 hover:opacity-100 hover:cursor-pointer transition duration-500"
                    />
                    <div className="absolute bottom-3 left-3 text-white text-lg">
                      <p>{traveler.content}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};
