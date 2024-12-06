import React from "react";

function Section1Card({ step, heading, paragraph, number }) {
  return (
    <>
      <div className="flex flex-col gap-3 ">
        <div className="flex  gap-3 sm:justify-between xl:justify-evenly  ">
          <div className="flex flex-col ">
            <h3 className="mt-10 text-gray-300">STEP {step}</h3>
            <h1 className="text-5xl font-bold mt-4">{heading}</h1>
          </div>

          <h1 className="text-9xl font-bold text-slate-300">{number}</h1>
        </div>
        <p className="text-md mt-8 text-gray-500">{paragraph}</p>
      </div>
    </>
  );
}

export default Section1Card;
