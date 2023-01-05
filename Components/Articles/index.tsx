/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { PostData } from '../../assets/stories';
import { ExploreStories } from '../HomePage/ExploreStories';

export const Articles = () => {
  return (
    <>
      <div className="px-5 md:px-16">
        <div className="container max-w-screen-2xl mx-auto mb-14 lg:px-0">
          <div className="mt-5">
            <span className="text-blue-600 font-bold text-lg hover:cursor-pointer">
              Travel Stories
            </span>
            <span className="text-lg font-bold">{' > '}</span>
            <span className="text-blue-600 font-bold text-lg hover:cursor-pointer">
              Vietnam
            </span>
            <span className="text-lg font-bold">{' > '}</span>
            <span className="text-blue-600 font-bold text-lg hover:cursor-pointer">
              Hanoi
            </span>
            <span className="text-lg font-bold">{' > '}</span>
            <span className="text-blue-600 font-bold text-lg hover:cursor-pointer">
              Tay Ho
            </span>
          </div>
          <div className="mr-14">
            <h1 className="text-3xl md:text-5xl font-bold mt-7">
              7 Best Places To Go In Hanoi Over Tet Holiday
            </h1>
            <div className="flex mt-5 md:mt-0 md:justify-end items-center">
              <img
                className=" w-[50px] md:w-[70px] rounded-full border-blue-400 border-2"
                src={PostData.user}
                alt="Writer"
              />
              <div className="ml-5">
                <p className="hover:cursor-pointer text-lg text-blue-600 font-bold border-b border-blue-600 mb-2">
                  Nguyen Dinh Bac
                </p>
                <p className="text-sm">Dec 22, 2022 - 6 mins read</p>
              </div>
            </div>
          </div>
          <div className="mt-16 md:mx-16">
            <div className="max-h-[50rem] overflow-hidden">
              <img
                className="object-cover"
                src={PostData.thumb01}
                alt="Tet in Hanoi"
              />
            </div>
            <p className="italic text-right my-2">
              If you've ever stayed in Hanoi over Tet holiday—Lunar New Year—you
              know this: it's desolate.
            </p>
            <p className="mt-6 text-lg">
              Most people leave the city over this break, which usually happens
              from late January to mid February, and can last around two weeks
              for schools; businesses may only take one. Locals often go to
              visit relatives living in the provinces, and foreign workers like
              to take this time to travel. All of this leaves the city a bit of
              a ghost town. Most shops are closed, so you might even want to
              have some food stored up, and plenty of cash, as ATMs often run
              out of money.
            </p>
            <p className="mt-6 text-lg">
              But rather than resort to paranoia, you can see this instead as a
              time to have the city to yourself—a rare experience given its
              usual crowded state. And not everything will be closed. Here's a
              list of seven places to go in Hanoi over Tet.
            </p>
            <h2 className="text-3xl font-bold my-5">Hoan Kiem Lake</h2>
            <img
              className="md:h-[40rem] h-[20rem] object-cover mx-auto"
              src={PostData.hoanKiem}
              alt="Hoan Kiem Lake"
            />
            <p className="italic text-center my-2">
              The Turtle Tower in the center of Hoàn Kiếm Lake at sunset.
            </p>
            <p className="mt-6 text-lg">
              One of the cultural activities that the city provides is a
              firework display. This takes place over Hoan Kiem Lake. If
              visiting the lake, be wary of your possessions. It gets very
              crowded. Another alternative to viewing the fireworks is from a
              rooftop. You can try hotels in the area with rooftop terraces to
              get a comfortable view of the show.
            </p>
            <p className="mt-6 text-lg">
              According to legend, in early 1428, Emperor Lê Lợi was given a
              magical sword by the Golden Turtle God (Kim Qui) to smite the
              Chinese Ming Dynasty. After successfully fending off the invaders,
              the Emperor was boating on Hoàn Kiếm Lake when a giant turtle rose
              up and snatched the sword before diving back into the depths,
              never to be found again. Lê Lợi concluded that Kim Qui had come to
              reclaim the sword that its master, the Dragon King (Long Vương)
              had gifted him for the battle. The Emperor renamed the lake Hoàn
              Kiếm (“Lake of the Returned Sword”) to commemorate this event.
            </p>
            <h2 className="text-3xl font-bold my-5">Temple of Literature</h2>
            <img
              className="md:h-[40rem] h-[20rem] object-cover mx-auto"
              src={PostData.templeOfLiterature}
              alt="Temple of Literature"
            />
            <p className="italic text-center my-2">
              Temple of Literature one of the most important monuments in Hanoi.
            </p>
            <p className="mt-6 text-lg">
              Ho Chi Minh museum was built to show our gratitude and eternal
              memory of the great work of President Ho Chi Minh and our
              determination to study his thoughts and morals, strive to build a
              peaceful, unified, independent Vietnam country.
            </p>
            <p className="mt-6 text-lg">
              In 1076, his son established the Imperial Academy as a royal
              school for only members of the elite such as princes, nobles, and
              bureaucrats. The Imperial Academy, which was considered as the
              first university in Vietnam, opened for about 700 years and
              educated hundreds of well-known scholars and mandarins. Despite
              continuous wars and disasters, the Temple of Literature remained
              its precious architectural and cultural value.
            </p>
            <p className="mt-6 text-lg">
              Covering an area of over 54000 square meters, Temple of
              Literature, which is surrounded by an ancient brick wall, consists
              of five courtyards in different styles. The whole area consists of
              several main parts, which are described below.
            </p>
            <h2 className="text-3xl font-bold my-5">Ho Chi Minh Museum</h2>
            <img
              className="md:h-[40rem] h-[20rem] object-cover mx-auto"
              src={PostData.hCMMuseum}
              alt="Ho Chi Minh Museum"
            />
            <p className="italic text-center my-2">
              Ho Chi Minh Museum in Hanoi
            </p>
            <p className="mt-6 text-lg">
              Located to the south of the Imperial Citadel of Thang Long, Temple
              of Literature was founded in 1070, almost 1000 years ago, by
              Emperor Ly Thanh Tong as a temple to worship the Chinese
              philosopher Confucius.
            </p>
            <p className="mt-6 text-lg">
              Ho Chi Minh museum building is a bevelled square, nearly 20m high,
              each side measuring 70m in length, symbolizing an elegant white
              lotus flower. Four square blocks on the top floor are both lotus
              leaves. With an area of 18,000 m2, Ho Chi Minh Museum is the
              largest and most modern museum in the country.
            </p>
            <p className="mt-6 text-lg">
              In terms of content, Ho Chi Minh Museum represents the life and
              revolutionary career of President Ho Chi Minh associated with the
              nation and the era. On display solutions, the museum combines
              harmony with architecture, art and technology. The exhibition area
              of the museum is nearly 4,000 m2, presenting more than 2,000
              documents, artifacts, images reflecting the life and career of
              President Ho Chi Minh, attaching the important historical events
              of Vietnam from the late nineteenth century to the present.
            </p>
            <p className="mt-6 text-lg">
              Also worth a visit is the stilt house, once home to Ho Chi Minh,
              which is excellently preserved, and the One Pillar Pagoda. This
              pagoda is a reconstruction of the original 11th century temple,
              which was destroyed by French colonial troops.
            </p>
            <h2 className="text-2xl font-bold my-5 mt-10">
              When is the best time to visit Hanoi?
            </h2>
            <p className="mt-6 text-lg">
              Located in the north of the country, Hanoi actually enjoys a
              "cold" season, when temperatures drop into the teens.
            </p>
            <p className="mt-6 text-lg">
              With changes in humidity and sometimes strong winds coming from
              the river, nights can feel chilly in Hanoi in the months between
              November to February. This is usually the best time to visit
              Vietnam in general, as the weather is dry and pleasant, ideal for
              long walks around Hoan Kiem Lake and the narrow alleyways of Old
              Town Quarter.
            </p>
            <p className="mt-6 text-lg">
              If you'd rather experience warmer days, March, April, and October
              are good options as well. You'll get plenty of sunshine,
              temperatures in the high 20s, and a more bearable level of
              humidity - you'll also see higher prices, as these are popular
              months to visit Hanoi.
            </p>
          </div>
          <hr className="mt-14 -mb-10" />
        </div>
        <div className="pt-6">
          <p className="text-3xl font-bold">Add a review</p>
          <div className="flex">
            <p>Be the first to review</p>
            <p className="ml-3 font-black">
              "7 Best Places To Go In Hanoi Over Tet Holiday"
            </p>
          </div>
          <div className="text-center">
            <input
              placeholder="Share your thoughts"
              className="mt-5 w-[100%] px-8 py-8 lg:px-10 lg:py-10 border rounded-lg focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 placeholder-black"
            />
          </div>
          <button className="mt-4 bg-blue-700 text-white px-6 py-2 rounded-full hover:cursor-pointer hover:bg-blue-400 transition duration-700">
            Send
          </button>
        </div>
      </div>
      <ExploreStories />
    </>
  );
};
