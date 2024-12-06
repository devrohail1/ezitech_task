import React from "react";
import "./style.css";

const InfiniteSlider = () => {
  const images = [
    "/Images/figma.png",
    "/Images/flutter.png",
    "/Images/html.png",
    "/Images/illustrator.png",
    "/Images/java-2.png",
    "/Images/java.png",
    "/Images/laravel.png",
    "/Images/mongodb.png",
    "/Images/motion-ui.png",
    "/Images/nodejs.png",
    "/Images/react.png",
    "/Images/sketchup.png",
    "/Images/vujs.png",
    "/Images/game-maker.png",
  ];

  return (
    <div className="overflow-hidden w-full py-4">
      <div className="flex animate-slider gap-10">
        {/* Original and duplicate images */}
        {[...images, ...images].map((image, index) => (
          <img
            key={index}
            src={image} // Use the current image URL
            className="w-28 h-12 object-contain mx-2"
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
