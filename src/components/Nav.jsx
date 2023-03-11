import React from "react";

const Nav = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2 text-sky-900">
          <i className="fa-solid fa-book text-xl sm:text-2xl"></i>
          <p className="font-tilt_neon text-lg sm:text-xl">my book</p>
        </div>
        <input
          type="text"
          className="w-40 rounded-md border-2 border-slate-200 bg-slate-50 px-4 py-2 text-slate-900 focus-visible:border-sky-900 focus-visible:outline-none sm:w-60 lg:w-96"
          placeholder="Search..."
        />
      </div>
    </>
  );
};

export default Nav;
