/* eslint-disable react/no-unescaped-entities */

export const HomeBanner = () => {
  return (
    <>
      <div>
        <div className="bg-home-banner w-[100%] h-screen bg-center bg-cover bg-fixed">
          <h1 className="text-white font-bold text-center pt-[28%] lg:pt-[10%] text-2xl md:text-4xl">
            Welcome to Vietnam
          </h1>
          <h1 className="text-white font-bold text-center pt-[1%] text-4xl md:text-8xl uppercase">
            Best in travel
          </h1>
          <h1 className="text-white font-black text-center md:-mt-[3%] lg:mt-0 text-8xl md:text-[17rem]">
            2022
          </h1>

          <div className="md:flex max-w-4xl mx-5 lg:mx-auto">
            <p className="text-white text-xl md:text-[20px] text-center md:text-left md:max-w-[70%]">
              The results are in! Explore this year's expert-approved list of
              must-see destinations, places, and unforgettable experiences
              guaranteed to inspire.
            </p>
            <div className="text-center md:ml-5">
              <button className="block bg-white text-black mx-auto mt-5 md:mt-0 w-[70%] md:w-[120%] lg:px-5 py-2 rounded-full font-bold">
                Discover the Winners
              </button>
              <a className="text-white text-center text-[17px] block mt-5 ml-10 hover:cursor-pointer underline">
                How we choose
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
