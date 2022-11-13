/* eslint-disable @next/next/no-img-element */
import { TouristAttraction } from '../../assets/touristAttraction';
import { FiArrowRight } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Mousewheel, Pagination } from 'swiper';
import Typed from 'react-typed';

const swiperStyle = {
  '--swiper-pagination-color': '#FFFFFF',
  '--swiper-pagination-bullet-inactive-color': '#999999',
  '--swiper-pagination-bullet-inactive-opacity': '1',
  '--swiper-pagination-bullet-size': '8px',
  '--swiper-pagination-bullet-horizontal-gap': '6px',
};

const discoveryData = [
  {
    content:
      'The 5 best days trips to discover in Hanoi capital with your family',
    pictureUrl: TouristAttraction.cauVang,
    id: 1,
  },
  {
    content:
      'Help me! Which is the more feasible to travel Sai Gon: train or plane?',
    pictureUrl: TouristAttraction.haLong,
    id: 2,
  },
  {
    content: 'The top food and drink you must try in Hai Phong',
    pictureUrl: TouristAttraction.hoiAn,
    id: 3,
  },
];

export const DiscoveryCard = (props: {
  content: string;
  pictureUrl: string;
}) => {
  return (
    <div className="hover:cursor-pointer group overflow-hidden">
      <div className="z-20 group absolute flex items-end bottom-10">
        <h1 className="text-white text-xl md:text-2xl ml-5 lg:max-w-[82%] md:max-w-[70%] max-w-[80%]">
          {props.content}
        </h1>
        <FiArrowRight className="ml-4 text-white text-5xl mr-5 md:mr-10 group-hover:translate-x-6 duration-500" />
      </div>
      <img
        src={props.pictureUrl}
        alt={props.content}
        className="object-cover min-h-screen opacity-70 hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-1 transition ease-in-out duration-700"
      />
    </div>
  );
};

export const HomeHeader = () => {
  return (
    <>
      <div className="absolute left-0 right-0 text-center max-w-7xl mx-auto mt-[40%] lg:mt-[16%] z-20">
        <Typed
          strings={[
            'Discovery story-worthy travel moments',
            'The best of Vietnam, digitized',
            "We're here to tell Vietnam's story to the world!",
          ]}
          typeSpeed={200}
          backSpeed={150}
          loop
          className="text-white text-4xl md:text-6xl lg:text-8xl font-bold"
        />
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
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="bg-black"
      >
        {discoveryData.map(place => (
          <SwiperSlide key={place.id}>
            <DiscoveryCard
              content={place.content}
              pictureUrl={place.pictureUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
