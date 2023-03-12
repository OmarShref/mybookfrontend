import React from "react";

const Books = () => {
  return (
    <>
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <div className="relative my-4 flex aspect-[1/1.5] w-40 flex-col items-center justify-center rounded-xl bg-white p-4 shadow-lg sm:w-44 md:w-48">
          <i class="fa-solid fa-trash-can absolute right-2 top-2 cursor-pointer text-xs text-slate-500 transition active:scale-95 active:text-red-600 md:text-sm md:hover:text-red-600"></i>
          <img
            src="https://miblart.com/wp-content/uploads/2020/01/crime-and-mystery-cover-scaled-1.jpeg"
            alt="book cover"
            className="h-[75%] w-4/5"
          />
          <p className="mt-3 text-center font-sans font-medium text-slate-800">
            ملائك نصيبين
          </p>
          <p className="text-center text-xs font-medium text-sky-700">
            <span className="text-slate-400">by</span> Ahmed Khaled
          </p>
        </div>
        <div className="relative my-4 flex aspect-[1/1.5] w-40 flex-col items-center justify-center rounded-xl bg-white p-4 shadow-lg sm:w-44 md:w-48">
          <i class="fa-solid fa-trash-can absolute right-2 top-2 cursor-pointer text-xs text-slate-500 transition active:scale-95 active:text-red-600 md:text-sm md:hover:text-red-600"></i>
          <img
            src="https://i.pinimg.com/564x/72/57/26/72572616aa047fdf2e58b1f50269e8f5.jpg"
            alt="book cover"
            className="h-[75%] w-4/5"
          />
          <p className="mt-3 text-center font-sans font-medium text-slate-800">
            ملائك نصيبين
          </p>
          <p className="text-center text-xs font-medium text-sky-700">
            <span className="text-slate-400">by</span> Ahmed Khaled
          </p>
        </div>
        <div className="relative my-4 flex aspect-[1/1.5] w-40 flex-col items-center justify-center rounded-xl bg-white p-4 shadow-lg sm:w-44 md:w-48">
          <i class="fa-solid fa-trash-can absolute right-2 top-2 cursor-pointer text-xs text-slate-500 transition active:scale-95 active:text-red-600 md:text-sm md:hover:text-red-600"></i>
          <img
            src="https://edit.org/photos/images/cat/book-covers-big-2019101610.jpg-1300.jpg"
            alt="book cover"
            className="h-[75%] w-4/5"
          />
          <p className="mt-3 text-center font-sans font-medium text-slate-800">
            ملائك نصيبين
          </p>
          <p className="text-center text-xs font-medium text-sky-700">
            <span className="text-slate-400">by</span> Ahmed Khaled
          </p>
        </div>
      </div>
    </>
  );
};

export default Books;
