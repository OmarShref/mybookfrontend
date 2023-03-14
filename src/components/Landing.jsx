import React from "react";
import landingImage from "../assets/landing-image.png";

const Landing = () => {
  return (
    <>
      <div className="relative my-4 flex items-center justify-between overflow-hidden rounded-xl p-4">
        <div className="absolute top-0 right-2/4 h-full w-full translate-x-1 -skew-x-12 rounded-md bg-slate-800"></div>
        <div>
          <p className="relative min-w-[40%] text-xs text-white sm:text-base lg:text-2xl">
            <span className="text-xl text-sky-400 sm:text-2xl lg:text-4xl">
              Discover
            </span>
            <br /> books full of content with our website.
          </p>
          <a href="#books-list">
            <button className="relative mt-4 w-full rounded-md bg-sky-700 py-2 text-xs text-slate-50 transition active:scale-95 sm:text-base md:text-lg md:hover:bg-sky-600 lg:mt-8 lg:text-xl xl:mt-10 xl:text-2xl">
              Let's do it
            </button>
          </a>
        </div>
        <img src={landingImage} alt="man reading a book" className="relative" />
      </div>
    </>
  );
};

export default Landing;
