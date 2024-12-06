import React from "react";
import Header from "../components/Header";
import HeroText from "../components/HeroText";

function Hero() {
  return (
    <>
      <div className="relative bg-cover bg-center min-h-screen w-auto object-fill bg-[url('/Images/woman.jpg')]">
        <div className="absolute inset-0 bg-blue-500 bg-opacity-50"></div>
        <div className="relative z-10 text-white">
          <Header />
          <HeroText />
        </div>
      </div>
    </>
  );
}

export default Hero;
