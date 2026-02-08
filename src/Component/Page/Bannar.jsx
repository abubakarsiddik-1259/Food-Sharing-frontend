import React from "react";
import BannarImg from "../../assets/veersajid-fries-7490192_1280.jpg";

const Bannar = () => {
  return (
    <div>
      <div className="relative my-3">
        <img
          src={BannarImg}
          alt="banner"
          className="w-full h-120 rounded-xl object-cover"
        />
        <div className="absolute bottom-50 left-60 mx-auto text-4xl text-purple-600 font-bold">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold ">
            Share Food. <span className="text-yellow-300">Spread Smiles</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg md:text-xl text-green-100">
            PlateShare helps you donate surplus food to people in need. Reduce
            food waste and build a caring community—one plate at a time.
          </p>

          <label className="input mx-auto mt-10 mr-5">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
