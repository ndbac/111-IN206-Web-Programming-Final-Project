/* eslint-disable @next/next/no-img-element */
import { PostData } from '../../assets/stories';
import Link from 'next/link';
import slugify from 'slugify';

const StoryList = [
  {
    id: 1,
    pic: PostData.post01,
    title: 'Ring in 2023 in the world best New Year`s Eve',
    content:
      'New Year`s is a truly global celebration, and you`ll find a party on every continent. These 10 cities promise an unforgettable New Year`s Eve experience.',
    minRead: 6,
    date: 'Dec 11, 2022',
    tags: 'Experience - Events',
  },
  {
    id: 2,
    pic: PostData.post02,
    title: '14 free things to do in Cat Ba island',
    content:
      'With classy designer shops, once-in-a-lifetime restaurants and eye-watering entry fees, it`s easy to empty your wallet in Zürich without much effort…',
    minRead: 12,
    date: 'Dec 08, 2022',
    tags: '',
  },
  {
    id: 3,
    pic: PostData.post03,
    title: 'How to plan a trip to see Northern of Vietnam',
    content:
      'Seeing the northern lights in on many travelers` bucket list. But how do you plan a trip to see a natural phenomenon? Egill Bjarnason shares his tips.',
    minRead: 22,
    date: 'Dec 11, 2022',
    tags: 'Tips',
  },
  {
    id: 4,
    pic: PostData.post04,
    title: '11 best cafes and bars to visit in winter',
    content:
      'Stay warm while sightseeing this winter with hot chocolates, beers and cocktails in Nghe An`s best cafes and bars.',
    minRead: 18,
    date: 'Dec 11, 2022',
    tags: 'Foods',
  },
  {
    id: 5,
    pic: PostData.post05,
    title: '7 of ruins in Vietnam',
    content:
      'In the land of aloha, free attractions, activities and events abound if you know where to look. Here are our top free things to do in Vinh Phuc.',
    minRead: 20,
    date: 'Dec 11, 2022',
    tags: '',
  },
  {
    id: 6,
    pic: PostData.post06,
    title: 'Ha Giang`s best winter activities',
    content:
      'Winter in Ha Giang is a harsh but magical season. Here are the best things to do in Big Sky Country everything seems frozen.',
    minRead: 32,
    date: 'Nov 11, 2022',
    tags: 'Activities - Exploring',
  },
  {
    id: 7,
    pic: PostData.post07,
    title: 'Here`s how to get a visa to visit Ta Xue',
    content:
      'Take your time to explore Ta Xue`s inspiring landscapes and cultures, but first you`re probably going to need to invite a local.',
    minRead: 4,
    date: 'Dec 11, 2022',
    tags: 'Chill - Traveling',
  },
];

export const StoryPost = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-10 lg:mx-20 mt-28">
        <div className="flex">
          <div>
            {StoryList.map(story => {
              return (
                <div className="flex mb-12" key={story.id}>
                  <div className="h-[7rem] w-[7rem] md:h-[10rem] md:w-[10rem] overflow-hidden rounded-xl">
                    <img
                      src={story.pic}
                      alt={story.title}
                      className="h-[8rem] w-[8rem] md:h-[10rem] md:w-[10rem] object-cover object-center rounded-xl hover:scale-125 transition duration-700 hover:cursor-pointer"
                    />
                  </div>
                  <div className="ml-8 max-w-[60%]">
                    <p className="uppercase font-black text-sm text-gray-500 hover:cursor-pointer">
                      {story.tags}
                    </p>
                    <Link href={`/articles/${slugify(story.title)}`}>
                      <h1 className="text-md md:text-2xl font-bold text-blue-700 hover:cursor-pointer">
                        {story.title}
                      </h1>
                    </Link>
                    <p className="text-sm text-gray-500">
                      {story.minRead} min read - {story.date}
                    </p>
                    <p className="mt-2 md:block hidden">{story.content}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-[50%] lg:block hidden">
            <h1 className="font-bold text-lg lg:text-xl">
              Featured in Best in Travel 2022
            </h1>
            <hr className="mt-5" />
          </div>
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

        <hr className="mt-24" />
      </div>
    </>
  );
};
