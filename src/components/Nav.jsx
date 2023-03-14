import React from "react";

const Nav = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2 text-sky-900">
          <i className="fa-solid fa-book text-xl sm:text-2xl"></i>
          <p className="font-tilt_neon text-lg sm:text-xl">my book</p>
        </div>
      </div>
    </>
  );
};

export default Nav;
