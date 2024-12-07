import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function ServicesCard({ color, heading, paragraph, image }) {
  return (
    <div
      className={`group relative w-72 flex flex-col gap-3  py-12 px-4 rounded-lg hover:bg-white ${color} shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
    >
      {/* Flex container for image and heading */}
      <div className="flex flex-col items-start mb-4">
        {/* Logo */}
        <img src={image} alt="Logo" className="w-12 h-auto mb-2" />

        {/* Heading */}
        <h2 className="flex items-center text-2xl font-bold text-gray-900 relative">
          {heading}
          <span className="ml-2 mt-1 text-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <MdOutlineKeyboardArrowRight />
          </span>
        </h2>
      </div>

      {/* Description */}
      <p className="text-md text-gray-400 mb-4">{paragraph}</p>

      {/* Explore Landing */}
      <h3 className=" items-center hidden text-sm font-semibold text-gray-900 mt-2 group-hover:flex ">
        Explore Landing
        <span className="ml-2 mt-1 text-xs">
          <FaArrowRight />
        </span>
      </h3>
    </div>
  );
}

export default ServicesCard;
