/* eslint-disable @next/next/no-img-element */
import { TravelStories } from '../../assets/travelStory';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { useState } from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

const hightLightStory = {
  title: 'The best 10 street foods in Hanoi',
  category: 'Foods',
  createdAt: 'Nov 13, 2022',
  readingTime: 6,
  description: `When referring to Vietnam, international friends will not only think about an S-shaped seaside nation with a lot of very-beautiful natural scenery and other natural resources luckily offered by nature but also imagine Vietnamese cuisine, especially Vietnam's street food cuisine.`,
  pictureUrl: TravelStories.food,
  id: 1,
};

const storyData = [
  {
    title: 'Cruise the Mekong Delta',
    category: 'Places',
    createdAt: 'Oct 23, 2022',
    readingTime: 10,
    description: `After travelling over 4,000km from the Tibetan Himalaya, the Mekong hits Vietnam and slows down to a more languid pace.`,
    pictureUrl: TravelStories.choNoi,
    id: 1,
  },
  {
    title: '8 of the best places to visit in Vietnam',
    category: 'Tips & Advice',
    createdAt: 'Nov 9, 2022',
    readingTime: 9,
    description: `From the capital Hanoi to the ancient city of Hue, from the Hagiang to Camau, here are eight of the best places to visit in Vietnam.`,
    pictureUrl: TravelStories.haGiang,
    id: 2,
  },
  {
    title: 'Light a lantern in Hoi An',
    category: 'Destinations',
    createdAt: 'Nov 26, 2022',
    readingTime: 12,
    description: `Over 50 workshops take part in the event, each trying to create the prettiest lantern. The colours are bright and the designs are strictly traditional.`,
    pictureUrl: TravelStories.hoiAn,
    id: 3,
  },
  {
    title: 'Hike through Cat Ba Island',
    category: 'Travels',
    createdAt: 'Oct 27, 2022',
    readingTime: 3,
    description: `You can't go wrong with a visit to Cat Ba Island. The views are spectacular, and the nearby Lan Ha Bay is a brilliant Halong alternative - another breathtakingly beautiful bay, without the tourist masses.`,
    pictureUrl: TravelStories.catBa,
    id: 4,
  },
];

export const StoryCard = (props: {
  category: string;
  title: string;
  createdAt: string;
  readingTime: number;
  description: string;
  pictureUrl: string;
}) => {
  return (
    <div className="mx-5">
      <img
        src={props.pictureUrl}
        alt={props.title}
        className="h-[21rem] object-cover rounded-full"
      />
      <div>
        <p className="font-bold text-md hover:underline hover:cursor-pointer mt-5 text-gray-700 text-sm">
          {props.category}
        </p>
        <h1 className="font-black text-2xl hover:underline hover:cursor-pointer">
          {props.title}
        </h1>
        <div className="flex font-bold text-sm">
          <p>{props.createdAt}</p>
          <p>&nbsp;-&nbsp;{props.readingTime} min read</p>
        </div>
        <p className="mt-5 text-sm">{props.description.slice(0, 150)}...</p>
      </div>
    </div>
  );
};

export const ExploreStories = () => {
  const [swiperPrevEl, setSwiperPrevEl] = useState<HTMLElement | null>(null);
  const [swiperNextEl, setSwiperNextEl] = useState<HTMLElement | null>(null);

  return (
    <>
      <div className="lg:mx-24">
        <div className="md:flex justify-between max-w-screen-2xl mx-16 lg:mx-auto mt-28 mb-12 relative pb-24 md:pb-0">
          <div className="max-w-md">
            <p className="uppercase text-gray-700 font-bold">
              Travel stories and news
            </p>
            <h3 className="font-bold text-5xl mt-8 mb-8 md:mb-0">
              Explore our latest stories
            </h3>
          </div>
          <div className="mt-32 absolute right-0 bottom-0">
            <button className="text-sm border my-1 md:my-0 md:mx-2 rounded-full px-8 py-[7px] font-semibold hover:bg-blue-600 hover:text-white">
              View all news
            </button>
            <button className="text-sm border my-1 md:my-0 md:mx-2 rounded-full px-8 py-[7px] font-semibold hover:bg-blue-600 hover:text-white">
              View all stories
            </button>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-10 max-w-screen-2xl mx-5 md:mx-16 lg:mx-auto mb-28">
          <div className="col-span-5 lg:col-span-3 bg-black max-h-[35rem] rounded-3xl overflow-hidden">
            <div className="relative">
              <img
                src={hightLightStory.pictureUrl}
                alt={hightLightStory.title}
                className="h-[35rem] w-full object-cover opacity-60"
              />
              <div className="absolute bottom-8 ml-10 mr-10 md:mr-36 text-white">
                <p className="font-bold text-sm md:text-lg hover:underline hover:cursor-pointer">
                  {hightLightStory.category}
                </p>
                <h1 className="font-black text-2xl md:text-4xl hover:underline hover:cursor-pointer">
                  {hightLightStory.title}
                </h1>
                <div className="flex font-bold text-sm md:text-md">
                  <p>{hightLightStory.createdAt}</p>
                  <p>&nbsp;-&nbsp;{hightLightStory.readingTime} min read</p>
                </div>
                <p className="mt-10 text-sm md:text-md">
                  {hightLightStory.description}
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-5 lg:col-span-2 flex relative pb-10">
            <Swiper
              navigation={{ prevEl: swiperPrevEl, nextEl: swiperNextEl }}
              modules={[Navigation]}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
              }}
              className="mySwiper"
            >
              {storyData.map(story => (
                <SwiperSlide key={story.id}>
                  <StoryCard
                    category={story.category}
                    title={story.title}
                    createdAt={story.createdAt}
                    readingTime={story.readingTime}
                    description={story.description}
                    pictureUrl={story.pictureUrl}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex absolute -bottom-4 right-2">
              <div ref={node => setSwiperPrevEl(node)}>
                <BsArrowLeftCircle className="text-3xl mx-2 hover:cursor-pointer text-gray-700 hover:text-black" />
              </div>
              <div ref={node => setSwiperNextEl(node)}>
                <BsArrowRightCircle className="text-3xl mx-2 hover:cursor-pointer text-gray-700 hover:text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
