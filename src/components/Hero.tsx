import React from "react";
import heroFrame from "/hero-bg.jpg.png"; // main hero image
import circleBg from "/Circlehero.png"; // background circle arcs

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start bg-gray-50 overflow-hidden px-6 py-16">
      {/* Background Circle Arcs */}
      <img
        src={circleBg}
        alt="Circle Background"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] max-w-none opacity-60 z-0 pointer-events-none"
      />

      {/* Heading above the image */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight text-center mt-12 mb-16 z-20 relative">
        Discover <span className="text-indigo-600">Unique</span> NFT places for Land
      </h1>

      {/* Hero Image Container */}
      <div className="relative w-full max-w-5xl z-10">
        {/* Middle Overlay */}
        <img
          src={heroFrame}
          alt="Hero Frame"
          className="w-full h-auto object-contain rounded-3xl"
        />

        {/* User Badge - Left */}
        <div className="absolute top-8 left-8 flex items-center space-x-3 bg-white shadow-lg px-4 py-2 rounded-full">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Anna May"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold text-gray-800">Anna May</p>
            <p className="text-sm text-gray-500">Minted Property</p>
          </div>
        </div>

        {/* User Badge - Right */}
        <div className="absolute top-8 right-8 flex items-center space-x-3 bg-white shadow-lg px-4 py-2 rounded-full">
          <img
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt="Jane Holand"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold text-gray-800">Jane Holand</p>
            <p className="text-sm text-gray-500">Minted Property</p>
          </div>
        </div>

        {/* Description + CTA Button */}
        <p className="absolute bottom-10 left-8 text-gray-700 bg-white/90 px-5 py-1 rounded-xl">
          Web3 + AI powered real estate <br /> trading platform
        </p>

        <button className="absolute bottom-10 right-8 px-7 py-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-purple-700 transition">
          Mint now
        </button>
      </div>
    </section>
  );
};

export default Hero;
