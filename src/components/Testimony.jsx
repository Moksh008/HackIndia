// Testimony.jsx
import React from "react";

export default function Testimony() {
  return (
    <div className="relative w-full bg-indigo-600 overflow-hidden py-4">
      <div className="flex whitespace-nowrap animate-marquee gap-16">
        {/* First Set */}
        <span className="text-white text-2xl font-semibold">
          Mint Your Land For Trade ✦
        </span>
        <span className="text-white text-2xl font-semibold">
          Mint Your Land For Trade ✦
        </span>
        <span className="text-white text-2xl font-semibold">
          Mint Your Land For Trade ✦
        </span>
        <span className="text-white text-2xl font-semibold">
          Mint Your Land For Trade ✦
        </span>

        {/* Duplicate Set for seamless loop */}
        <span className="text-white text-2xl font-semibold">
          Mint Your Land For Trade ✦
        </span>
        <span className="text-white text-2xl font-semibold">
          Mint Your Land For Trade ✦
        </span>
        <span className="text-white text-2xl font-semibold">
          Mint Your Land For Trade ✦
        </span>
        <span className="text-white text-2xl font-semibold">
          Mint Your Land For Trade ✦
        </span>
      </div>
    </div>
  );
}
