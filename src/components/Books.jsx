import React from "react";

const Books = () => {
  return (
    <>
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <div className="relative my-4  aspect-[1/1.5] w-44  rounded-xl bg-white p-4 shadow-lg md:w-48">
          <i class="fa-solid fa-trash-can absolute right-2 top-2 cursor-pointer text-xs text-slate-500 transition active:scale-95 active:text-red-600 md:text-sm md:hover:text-red-600"></i>
          <img
            src="https://miblart.com/wp-content/uploads/2020/01/crime-and-mystery-cover-scaled-1.jpeg"
            alt="book cover"
            className="mx-auto h-[75%] w-4/5"
          />
          <p className="mt-3 grid h-12 items-center overflow-hidden text-ellipsis text-center font-medium text-slate-800">
            Fortress Blood
          </p>
          <p className="h-4 overflow-hidden text-ellipsis text-center text-xs font-medium text-sky-700">
            <span className="text-slate-400">by</span> L.D. Gofflgan
          </p>
        </div>
      </div>
    </>
  );
};

export default Books;
