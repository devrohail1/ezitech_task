import React from "react";
import ServicesCard from "../components/ServicesCard";

function Services() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-start-2 col-span-10">
        <div className="flex flex-col mt-24">
          <div className="flex flex-col md:flex-row justify-center items-center gap-11 sm:justify-evenly ">
            <ServicesCard
              image="Images/app-development.png"
              heading="App Development"
              paragraph="We offer hands-on exp to develop cross-platform and native apps for iOS, Android, Windows, and Mac, using the latest tools. Learn to store data in the cloud or on-premises and implement custom backend logic"
              color="bg-red-100"
            />
            <ServicesCard
              image="Images/thinking.png"
              heading="Artifical Intelligence"
              paragraph="Gain practical experience in Artificial Intelligence by building and deploying machine learning models. Learn key concepts, data processing, and model training to prepare for real-world AI challenges"
              color="bg-purple-100"
            />
            <ServicesCard
              image="Images/programming.png"
              heading="Web Development"
              paragraph="Exceptional web experiences engage, inspire, and drive results  all built on a foundation of strategic, innovative design l"
              color="bg-pink-100"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-11 sm:justify-evenly mt-14 ">
            <ServicesCard
              image="Images/app-development.png"
              heading="Graphic Design"
              paragraph="your journey to becoming a skilled graphic designer. Wherever your creativity is headed, we provide the inspiration, tools, and support to help you bring your vision to life"
              color="bg-blue-100"
            />
            <ServicesCard
              image="Images/thinking.png"
              heading="2d/3d Architecture"
              paragraph="We are mentors, guides, and partners in your journey to becoming a game developer. Wherever your passion leads, we provide the skills, tools, and support to help you bring your game ideas to life."
              color="bg-orange-100"
            />
            <ServicesCard
              image="Images/programming.png"
              heading="Digital Marketing"
              paragraph="We arere mentors, guides, and partners in your journey to mastering digital marketing. Wherever your career goals lead, we provide the knowledge, tools, and support to help you drive impactful marketing strategies
"
              color="bg-lime-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
