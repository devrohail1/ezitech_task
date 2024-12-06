import React from "react";
import { MdCall, MdOutlineAttachEmail } from "react-icons/md";
import {
  FaBehance,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaLocationDot,
  FaYoutube,
} from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";

function Header() {
  return (
    <div className="grid grid-cols-12 py-4">
      <div className="sm:col-start-2 sm:col-span-10 hidden  xl:flex justify-between  ">
        <h2 className="flex gap-1">
          <MdCall className="mt-1" />
          +923455555396
        </h2>
        <h2 className="flex gap-1">
          <MdOutlineAttachEmail className="mt-1" />
          INFO@EZITECH.ORG
        </h2>
        <h2 className="flex gap-1">
          <FaLocationDot className="mt-1" />
          WESTRIDGE 1 OFFICE 304-G،MAIN PESHAWAR ROAD, RAWALPINDI,PAKISTAN
        </h2>
        <div className="flex gap-2 ml-4">
          <FaFacebookF />
          <FaInstagram />
          <FaBehance />
          <FaLinkedinIn />
          <FaYoutube />
        </div>
      </div>
      <div className="col-start-1 col-span-12 sm:col-start-2 sm:col-span-10 py-4 px-9 rounded-xl bg-slate-200 mt-2 sm:mt-6 flex justify-between sm:justify-around items-center ">
        <img className="w-28 h-10" src="/Images/logo1.png" alt="" />
        <ul className="lg:flex hidden justify-between gap-8 xl:gap-12 md:text-sm xl-text-md text-black">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>INTERNSHIPS</li>
          <li>CAREERS</li>
          <li>COURSES</li>
          <li>TECH BLOGS</li>
        </ul>
        <button className="bg-blue-700 text-white text-sm xl:text-md px-3 py-2 rounded-full">
          IPORTAL LOGIN
        </button>
      </div>
    </div>
  );
}

export default Header;
