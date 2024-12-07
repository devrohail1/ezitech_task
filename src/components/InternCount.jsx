import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

function InternCount() {
  const [startAnimation, setStartAnimation] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.5 } // Adjust threshold to trigger animation when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <main ref={sectionRef} className="py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto items-center px-4 lg:px-8 lg:mt-28">
        {/* Left Text Section */}
        <div>
          <h1 className="px-6 md:px-0 text-4xl md:text-6xl font-semibold mb-12">
            Hundreds of Successful Internships &{" "}
            <span className="relative inline-block">
              Counting
              <span className="absolute left-0 bottom-0 h-[0.25em] w-full bg-blue-400 -z-10"></span>
            </span>
          </h1>
          <p className="px-6 md:px-0 text-base md:text-lg text-gray-700 leading-relaxed">
            With a commitment to quality training and career advancement, we've
            empowered students from diverse backgrounds. Through structured
            internships, hands-on projects, and expert mentorship, Ezitech
            Institute ensures that every student builds a solid foundation in
            IT.
          </p>
        </div>

        {/* Right Box Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Section 1 */}
          <div className="text-center border-b-2 md:border-b-0 md:border-r-2 border-gray-200">
            <p className="text-5xl font-bold text-gray-700 p-3">
              {startAnimation && <CountUp end={37} duration={2.5} />}+
            </p>
            <p className="text-gray-600 mt-2 mb-2">Industry MOUs</p>
          </div>

          {/* Section 2 */}
          <div className="text-center border-b-2 md:border-b-0">
            <p className="text-5xl font-bold text-gray-700 p-3">
              {startAnimation && <CountUp end={327} duration={2.5} />}
            </p>
            <p className="text-gray-600 mt-2 mb-2">Active Students</p>
          </div>

          {/* Section 3 */}
          <div className="text-center pt-6 border-b-2 md:border-b-0 md:border-r-2 border-gray-200">
            <p className="text-5xl font-bold text-gray-700 p-3">
              {startAnimation && <CountUp end={98} duration={2.5} suffix="%" />}
            </p>
            <p className="text-gray-600 mt-2 mb-2">Positive Feedback</p>
          </div>

          {/* Section 4 */}
          <div className="text-center pt-6">
            <p className="text-5xl font-bold text-gray-700 p-3">
              {startAnimation && <CountUp end={6663} duration={2.5} />}
            </p>
            <p className="text-gray-600 mt-2">Successful Graduates</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default InternCount;
