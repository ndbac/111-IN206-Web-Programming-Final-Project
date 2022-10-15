/* eslint-disable @next/next/no-img-element */
import { TouristAttraction } from '../../assets/tourist-attraction';
import { FiArrowRight } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Mousewheel, Pagination } from 'swiper';

const swiperStyle = {
  '--swiper-pagination-color': '#FFFFFF',
  '--swiper-pagination-bullet-inactive-color': '#999999',
  '--swiper-pagination-bullet-inactive-opacity': '1',
  '--swiper-pagination-bullet-size': '8px',
  '--swiper-pagination-bullet-horizontal-gap': '6px',
};

export const HomeHeader = () => {
  return (
    <>
      <div className="absolute left-0 right-0 text-center max-w-7xl mx-auto mt-[40%] lg:mt-[16%] z-20">
        <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold">
          Discovery story-worthy travel moments
        </h1>
      </div>
      <Swiper
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        style={swiperStyle}
        modules={[Autoplay, Mousewheel, Pagination]}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
        mousewheel={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="bg-black"
      >
        <SwiperSlide>
          <div className="hover:cursor-pointer group overflow-hidden">
            <div className="z-20 group absolute flex items-end bottom-10">
              <h1 className="text-white text-xl md:text-2xl ml-5 lg:max-w-[82%] md:max-w-[70%] max-w-[80%]">
                The 5 best days trips to discover in Hanoi capital with your
                family
              </h1>
              <FiArrowRight className="ml-4 text-white text-5xl mr-5 md:mr-10 group-hover:translate-x-6 duration-500" />
            </div>
            <img
              src={TouristAttraction.cauVang}
              alt="Cau Vang - Vietnam"
              className="object-cover min-h-screen opacity-70 hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-1 transition ease-in-out duration-700"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hover:cursor-pointer group overflow-hidden">
            <div className="z-20 group absolute flex items-end bottom-10">
              <h1 className="text-white text-xl md:text-2xl ml-5 lg:max-w-[82%] md:max-w-[70%] max-w-[80%]">
                Help me! Which is the more feasible to travel Sai Gon: train or
                plane?
              </h1>
              <FiArrowRight className="ml-4 text-white text-5xl mr-5 md:mr-10 group-hover:translate-x-6 duration-500" />
            </div>
            <img
              src={TouristAttraction.haLong}
              alt="Cau Vang - Vietnam"
              className="object-cover min-h-screen opacity-70 hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-1 transition ease-in-out duration-700"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hover:cursor-pointer group overflow-hidden">
            <div className="z-20 group absolute flex items-end bottom-10">
              <h1 className="text-white text-xl md:text-2xl ml-5 lg:max-w-[82%] md:max-w-[70%] max-w-[80%]">
                The top food and drink you must try in Hai Phong
              </h1>
              <FiArrowRight className="ml-4 text-white text-5xl mr-5 md:mr-10 group-hover:translate-x-6 duration-500" />
            </div>
            <img
              src={TouristAttraction.hoiAn}
              alt="Cau Vang - Vietnam"
              className="object-cover min-h-screen opacity-70 hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-1 transition ease-in-out duration-700"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* <div className="grid grid-cols-3 bg-black">
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
      </div> */}
    </>
  );
};
