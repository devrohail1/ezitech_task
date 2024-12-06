import React from "react";
import { FaHeart } from "react-icons/fa6";

function HeroText() {
  return (
    <div className="grid grid-cols-12 ">
      <div className="col-start-2 col-span-12 xl:col-start-3 xl:col-span-8 text-[40px] sm:text-6xl flex flex-col justify-center items-center  font-bold py-10 sm:mr-20 mt-10">
        <h1>Learn the fundamentals with our</h1>
        <h1 className="mt-3 sm:mt-7">
          Experts in <span className="text-blue-700"> Programming </span>
        </h1>
      </div>
      <div className="col-start-2 col-span-10 p-12 lg:col-start-5  lg:col-span-4 mt-9">
        <div class="flex px-4 py-5 bg-white  rounded-full border overflow-hidden  mx-auto font-[sans-serif]">
          <input
            type="email"
            placeholder="Search Internships..."
            class="w-full outline-none bg-transparent text-gray-600 text-sm"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192.904 192.904"
            width="16px"
            class="fill-gray-600"
          >
            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
          </svg>
        </div>
      </div>
      <div className="col-start-1 col-span-12 justify-center lg:mr-56  lg:col-start-5 lg:col-span-6 text-sm sm:text-xl flex gap-2 px-4 py-5 mt-2  sm:mt-8 ">
        Explore our more useful products <FaHeart className="mt-1" />
      </div>
      <div className="col-start-1 col-span-12 hidden lg:ml-32  lg:col-start-4 lg:col-span-5 lg:flex justify-around items-center mt-5">
        <img className="w-32 sm:h-12" src="/Images/EZIBLOGS.png" alt="" />
        <img className="w-36 h-9" src="/Images/ezipos.png" alt="" />
        <img className="w-32 h-12" src="/Images/EZIBLOGS.png" alt="" />
      </div>
    </div>
  );
}

export default HeroText;
