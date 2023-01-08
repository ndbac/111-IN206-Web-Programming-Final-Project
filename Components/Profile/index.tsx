/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { ProfileData } from '../../assets/profile';
import { AiFillStar, AiOutlineHome, AiOutlineStar } from 'react-icons/ai';
import { GoVerified } from 'react-icons/go';
import { RiGlobalLine } from 'react-icons/ri';
import { FiShare, FiTwitter, FiInstagram } from 'react-icons/fi';
import { TiSocialFacebookCircular } from 'react-icons/ti';
import { PostData } from '../../assets/stories';
import { MdOutlineDirectionsWalk, MdOutlineSpeakerNotes } from 'react-icons/md';

export const Profile = () => {
  return (
    <>
      <div className="wow fadeInUp profile mb-28 mt-5 overflow-hidden">
        <div className="container max-w-screen-xl mx-auto">
          <div className="hidden lg:block">
            <img
              src={ProfileData.banner}
              alt="profile banner"
              className="absolute -z-10 rounded-3xl"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="lg:ml-12 lg:mr-8 lg:mt-64">
              <div className="col-span-1 max-h-profile pb-10 bg-white border rounded-3xl mt-10 lg:mt-10 mx-4 md:mx-24 lg:mx-4 overflow-hidden text-center">
                <div className="mt-10">
                  <img
                    src={PostData.user}
                    alt="profile user"
                    className="block md:w-6/12 w-7/12 mx-auto rounded-full"
                  />
                </div>
                <div className="mt-6 flex justify-center items-center">
                  <h1 className="font-bold text-4xl mr-2">Bac Ng</h1>
                  <GoVerified className="text-green-500 text-2xl" />
                </div>
                <div className="flex justify-center items-center mt-2">
                  <AiFillStar className="text-yellow-500" />
                  <p className="text-slate-900 font-bold text-md ml-1">4.8</p>
                  <p className="text-slate-500 text-md ml-3">(256 reviews)</p>
                </div>

                <div className="mt-5 flex items-center justify-center bg-slate-100 rounded-full px-2 py-1 mx-8">
                  <AiOutlineHome className="text-slate-500" />
                  <h1 className="text-slate-500 ml-2">Superhost</h1>
                  <AiOutlineStar className="text-slate-500 ml-5" />
                  <h1 className="text-slate-500 ml-2">256 reviews</h1>
                </div>

                <div className="flex justify-center mt-10">
                  <button className="flex items-center justify-center text-slate-800 font-bold">
                    <RiGlobalLine className="text-slate-500 text-xl mr-2" />
                    www.dinhbac.com
                  </button>
                </div>

                <div className="flex justify-center items-center mt-10">
                  <button className="border-2 px-4 py-1 rounded-full mr-2 text-md font-bold text-slate-700 hover:bg-slate-700 hover:text-white transition duration:500">
                    Contact
                  </button>
                  <button className="border-2 rounded-full py-2 px-2 text-slate-500 hover:bg-slate-700 hover:text-white transition duration:500">
                    <FiShare className="text-xl" />
                  </button>
                </div>

                <div className="flex justify-center items-center mt-7">
                  <FiTwitter className="text-xl text-slate-500 mx-3" />
                  <FiInstagram className="text-xl text-slate-500 mx-3" />
                  <TiSocialFacebookCircular className="text-2xl text-slate-500 mx-3" />
                </div>

                <div className="border-t mt-12 mx-14 text-center">
                  <p className="text-sm mt-10">Member since Mar 15, 2021</p>
                  <div>
                    <p className="text-sm cursor-pointer">
                      Report this property
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 lg:mt-96 lg:mr-14">
              <div className="mt-16 mx-4 lg:ml-5">
                <h1 className="font-bold text-3xl text-slate-900">
                  About Bac Ng
                </h1>
                <p className="text-slate-500 mt-8">
                  Described by Queenstown House & Garden magazine as having 'one
                  of the best views we've ever seen' you will love relaxing in
                  this newly built
                </p>
              </div>

              <div>
                <div className="grid grid-cols-4 ml-5 mt-10">
                  <div className="flex items-center">
                    <AiOutlineHome className="text-slate-500 mr-2 text-2xl" />
                    <h1 className="text-slate-500">Lives in</h1>
                  </div>
                  <h1 className="col-span-3 ml-4 font-bold text-gray-700">
                    Hanoi, Vietnam
                  </h1>
                </div>

                <div className="grid grid-cols-4 ml-5 mt-5">
                  <div className="flex items-center">
                    <MdOutlineDirectionsWalk className="text-slate-500 mr-2 text-2xl" />
                    <h1 className="text-slate-500">Date:</h1>
                  </div>
                  <h1 className="col-span-3 ml-4 font-bold text-blue-600 cursor-pointer">
                    Get direction
                  </h1>
                </div>

                <div className="grid grid-cols-4 ml-5 mt-5">
                  <div className="flex items-center">
                    <MdOutlineSpeakerNotes className="text-slate-500 mr-2 text-2xl" />
                    <h1 className="text-slate-500">Speak:</h1>
                  </div>
                  <h1 className="col-span-3 ml-4 font-bold text-gray-700">
                    English, Vietnamese
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
