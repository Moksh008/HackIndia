import React from "react";
import bgImage from "/abovefooter.png"; // your main big background image
import starIcon from "/star.png"; // star image

const Authen = () => {
  return (
    <section className="relative w-full px-6 lg:px-12 py-12">
      {/* Top Centered Text with Star */}
      <div className="flex flex-col items-center text-center mb-10">
        {/* Star + Heading in one row */}
        <div className="flex items-center gap-4 mb-4">
          <img src={starIcon} alt="Star" className="w-8 h-8 lg:w-12 lg:h-12" />
          <button className="px-4 py-1 text-xs font-semibold bg-gray-100 rounded-full">
            TRANSFORM
          </button>
        </div>

        {/* Heading */}
        <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900 leading-snug">
          Authentically secure,{" "}
          <span className="text-blue-600">sustainable</span>
        </h2>
      </div>

      {/* Background Image */}
      <div className="relative w-full">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-auto rounded-[2rem] shadow-md"
        />

        {/* Floating Info Card (bottom-right) */}
        <div className="absolute bottom-6 right-6 bg-white shadow-lg rounded-2xl p-4 max-w-xs">
          <p className="text-sm text-gray-700">
            Smaller currencies may often appear to have a lower carbon footprint,
            but that may simply be because there are fewer transactions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Authen;