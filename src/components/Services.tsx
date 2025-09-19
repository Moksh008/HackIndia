import React from "react";
import img1 from "/Ellipse 41.png";
import img2 from "/Ellipse 40.png";
import img3 from "/Ellipse 42.png";
import img4 from "/Ellipse 43.png";

const features = [
  {
    img: img1,
    text: "You don’t have to be a real estate tycoon to invest in property.",
    angle: -60,
    imgFirst: false,
  },
  {
    img: img2,
    text: "Your gateway to smarter real estate investing",
    angle: 110,
    imgFirst: true,
  },
  {
    img: img3,
    text: "A blockchain marketplace for fractional real estate ownership",
    angle: 200,
    imgFirst: true,
  },
  {
    img: img4,
    text: "Save 50% on trading fees with your Opulent pass",
    angle: 260,
    imgFirst: true,
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative w-full px-6 py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* LEFT SIDE */}
        <div className="flex flex-col items-start">
          {/* Features Label */}
          <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full mb-4">
            FEATURES
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 max-w-xl">
            We are platform for <br /> Everyone
          </h2>

          {/* Button */}
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition">
            Mint purpose
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative w-full h-[650px] flex justify-center items-center">
          {/* Circular Background using divs */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full border border-gray-200"
                style={{
                  width: `${120 + i * 60}px`,
                  height: `${120 + i * 60}px`,
                }}
              />
            ))}
          </div>
          <div className="absolute left-[-250px] top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-0">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full border border-gray-100"
                style={{
                  width: `${120 + i * 60}px`,
                  height: `${120 + i * 60}px`,
                  left: "0",
                  top: "50%",
                  transform: `translateY(-50%)`,
                  zIndex: 0,
                }}
              />
            ))}
          </div>

          {/* Feature bubbles positioned via rotation */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            {features.map((f, i) => (
              <div
                key={i}
                className="absolute flex items-center max-w-xs"
                style={{
                  transform: `rotate(${f.angle}deg) translate(260px) rotate(-${f.angle}deg)`,
                }}
              >
                {f.imgFirst && (
                  <img
                    src={f.img}
                    alt={`feature ${i + 1}`}
                    className="w-28 h-28 rounded-full object-cover shadow-md"
                  />
                )}
                <div className="bg-white shadow-md px-4 py-2 rounded-2xl text-gray-700 text-sm ml-3 mr-3">
                  {f.text}
                </div>
                {!f.imgFirst && (
                  <img
                    src={f.img}
                    alt={`feature ${i + 1}`}
                    className="w-28 h-28 rounded-full object-cover shadow-md"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;