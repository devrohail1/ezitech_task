import React from "react";

function Seminar() {
  return (
    <>
      <main className="hero">
        <div className="grid grid-cols-12 lg:min-h-[88vh]">
          <div className=" col-start-3 col-span-8 lg:col-start-2 lg:col-span-4 mt-12 flex  items-center">
            <div className="hero-image ">
              <img className="rounded-xl" src="/Images/Seminarfr.png" alt="" />
            </div>
          </div>
          <div
            className="hero-txt col-start-1 px-10 md:px-0 col-span-12 lg:col-start-7
      lg:col-span-6 flex flex-col  justify-center  mt-12"
          >
            <h1 className="text-3xl md:text-6xl font-bold relative">
              Empowering Connections in the{" "}
              <span className="relative inline-block">
                Digital World
                <span className="absolute left-0 bottom-0 h-[0.25em] w-full bg-blue-400 -z-10"></span>
              </span>
            </h1>

            <p className="mt-6 text-base md:text-xl lg:max-w-96 text-gray-500">
              We equip future professionals with the essential tools to thrive
              in both traditional and digital IT landscapes.
            </p>
            <p className="mt-6 text-base md:text-xl lg:max-w-96 text-gray-400">
              With years of experience and countless successful placements,
              Ezitech Institute has perfected a unique learning process that
              goes beyond theory. We delve deep into practical skills and
              real-world applications, helping students understand, connect, and
              excel in the ever-evolving tech market.
            </p>
            <div>
              <button className="  bg-blue-500 text-white px-6 py-3 md:px-12 md:py-7 rounded-full text-base md:text-xl font-semibold shadow-lg mt-8">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Seminar;
