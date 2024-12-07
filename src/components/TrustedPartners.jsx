import React from "react";

function TrustedPartners() {
  return (
    <>
      <main className="hero">
        <div className="grid grid-cols-12 ">
          <div className=" col-start-3 col-span-8 lg:col-start-2 lg:col-span-4 mt-28 flex items-center">
            <div className="hero-image">
              <img src="/Images/partner.png" alt="" />
            </div>
          </div>
          <div
            className="hero-txt col-start-1 col-span-12 lg:col-start-7
      lg:col-span-6 flex flex-col  justify-center  mt-12 px-12 md:px-0"
          >
            <h1 className="text-4xl md:text-6xl font-bold relative">
              Trusted by Leading{" "}
              <span className="relative inline-block">
                Organizations
                <span className="absolute left-0 bottom-0 h-[0.25em] w-full bg-blue-400 -z-10"></span>
              </span>
            </h1>

            <p className="mt-9 text-base md:text-xl lg:max-w-96">
              Ezitech is a trusted partner for digital growth, from emerging
              startups to established institutions. We proudly support our
              clients’ journeys, helping them drive success and innovation in
              the digital landscape.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default TrustedPartners;
