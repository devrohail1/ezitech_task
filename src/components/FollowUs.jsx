import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin, FaYoutube } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

function FollowUs() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-start-2 col-span-10">
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-28">
          <div className="flex flex-col justify-center items-center  border-b-2  md:border-none px-12  gap-4">
            <FaLinkedin className="text-5xl md:text-7xl text-gray-600" />
            <p>Follow us on LinkedIn</p>
            <p className="mb-3">Latest news and Updates</p>
          </div>
          <div className="flex flex-col justify-center items-center px-12 border-b-2 md:border-b-0 md:border-l-2 gap-4">
            <FaYoutube className="text-5xl md:text-7xl text-gray-600" />
            <p>Follow us on Youtube</p>
            <p className="mb-3">Latest news and Updates</p>
          </div>
          <div className="flex flex-col justify-center items-center px-12 md:border-b-0 border-b-2 md:border-l-2 gap-4">
            <FaFacebookSquare className="text-5xl md:text-7xl text-gray-600" />
            <p>Follow us on Facebook</p>
            <p className="mb-3">Latest news and Updates</p>
          </div>
          <div className="flex flex-col justify-center items-center px-12 md:border-b-0  border-b-2 md:border-l-2 gap-4">
            <IoLogoWhatsapp className="text-5xl md:text-7xl text-gray-600" />
            <p>Whatsapp Channel</p>
            <p className="mb-3">Join the Community</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FollowUs;
