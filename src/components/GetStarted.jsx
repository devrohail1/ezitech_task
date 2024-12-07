import React from "react";

function GetStarted() {
  return (
    <div className="relative bg-white py-8 px-4 md:px-16 rounded-lg shadow-[0px_8px_20px_rgba(0,0,0,0.15)] max-w-7xl mx-auto mt-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Section */}
        <div className="col-span-12 md:col-span-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 px-6 md:px-0">
            Ready to get started?
          </h2>
          <p className="text-gray-600 text-lg md:text-xl px-6 md:px-0">
            At Ezitech, we constantly push boundaries to deliver excellence. Our
            commitment to quality and innovation makes us your trusted partner
            for growth and success.
          </p>
        </div>

        {/* Right Section */}
        <div className="col-span-12 md:col-span-6 flex justify-center md:justify-end items-center relative">
          <img
            src="Images/circle1.png"
            alt="Illustration"
            className="w-auto  rounded-lg"
          />
          <button className="absolute bg-blue-500 text-white px-6 md:px-12 py-4 md:py-7 rounded-full text-lg md:text-xl font-semibold shadow-lg">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
