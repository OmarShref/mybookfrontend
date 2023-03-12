import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../server/server";

const Books = () => {
  const [books, setBooks] = useState([
    { title: "", author: "", genre: "", cover: "" },
  ]);
  const getBooks = () => {
    try {
      axios({
        method: "get",
        withCredentials: true,
        url: BASE_URL,
      })
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data);
            setBooks(res.data);
          } else {
            alert("Please, make sure you have good connection and try again");
          }
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <div className="relative my-4  aspect-[1/1.5] w-44  rounded-xl bg-white p-4 shadow-lg md:w-48">
          <i className="fa-solid fa-trash-can absolute right-2 top-2 cursor-pointer text-xs text-slate-500 transition active:scale-95 active:text-red-600 md:text-sm md:hover:text-red-600"></i>
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
          <p className="h-4 overflow-hidden text-ellipsis text-center text-xs font-medium text-sky-600">
            'sience-fiction'
          </p>
        </div>
        {books.map((book) => {
          return (
            <div className="relative my-4  aspect-[1/1.5] w-44  rounded-xl bg-white p-4 shadow-lg md:w-48">
              <i className="fa-solid fa-trash-can absolute right-2 top-2 cursor-pointer text-xs text-slate-500 transition active:scale-95 active:text-red-600 md:text-sm md:hover:text-red-600"></i>
              <img
                src={`${book.cover}`}
                alt="book cover"
                className="mx-auto h-[75%] w-4/5"
              />
              <p className="mt-3 grid h-12 items-center overflow-hidden text-ellipsis text-center font-medium text-slate-800">
                {book.title}
              </p>
              <p className="h-4 overflow-hidden text-ellipsis text-center text-xs font-medium text-sky-700">
                <span className="text-slate-400">by</span> {book.author}
              </p>
              <p className="h-4 overflow-hidden text-ellipsis text-center text-xs font-medium text-sky-600">
                {`'${book.genre}'`}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Books;
