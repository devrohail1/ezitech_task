import React from "react";
import Section1Card from "../components/Section1Card";
import InfiniteSlider from "../components/Slider";

function Section1() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-start-1 col-span-12 mt-4">
        <InfiniteSlider />
      </div>
      <div className="col-start-1 col-span-12 sm:col-start-2 sm:col-span-12 text-lg md:text-3xl xl:text-5xl flex flex-col justify-center items-center font-bold  sm:font-semibold py-10 sm:mr-20 mt-10 sm:mt-20">
        <h1>Shaping and Empowering Future IT Talent </h1>
        <h1 className="mt-2 sm:mt-4">Through a Seamless Process</h1>
      </div>
      <div className="col-start-2 col-span-10 flex flex-col xl:flex-row justify-evenly gap-3 sm:gap-44 mt-2 sm:mt-7">
        <Section1Card
          step="1"
          number={1}
          heading="Discover Tech"
          paragraph="Explore internships across various
technologies that align with your career
goals. Start your journey by selecting a
field that excites you."
        />
        <Section1Card
          step="2"
          number={2}
          heading="Evaluate Skill"
          paragraph="Our process includes an interview and a
short evaluation task to assess your
skills and readiness, helping us match
you with the right opportunity."
        />
        <Section1Card
          step="3"
          number={3}
          heading="Track Record"
          paragraph="Once selected, gain access to our
iPortal to monitor your internship
progress, track your achievements, and
stay on top of your goals."
        />
      </div>
    </div>
  );
}

export default Section1;
