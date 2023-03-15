import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { BASE_URL } from "../server/server";

const Books = () => {
  const [books, setBooks] = useState([
    { title: "", author: "", genre: "", cover: "" },
  ]);

  const [filter, setFilter] = useState("");

  const [showAddBookModal, setShowAddBookModal] = useState(false);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [cover, setCover] = useState("");

  const [enableAdding, setEnableAdding] = useState(true);

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
  const deleteBook = (id) => {
    try {
      axios({
        method: "delete",
        withCredentials: true,
        url: BASE_URL,
        data: {
          id: id,
        },
      })
        .then((res) => {
          if (res.status === 200) {
            getBooks();
          } else {
            alert("Please, make sure you have good connection and try again");
          }
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };
  const addBook = () => {
    if (enableAdding) {
      setEnableAdding(false);
      try {
        axios({
          method: "post",
          withCredentials: true,
          url: BASE_URL,
          data: {
            title: title,
            author: author,
            genre: genre,
            cover: cover,
          },
        })
          .then((res) => {
            if (res.status === 201) {
              getBooks();
              setTitle("");
              setAuthor("");
              setGenre("");
              setCover("");
              setShowAddBookModal(false);
              setEnableAdding(true);
            } else if (res.status === 200) {
              alert(res.data);
              setEnableAdding(true);
            } else {
              alert("Please, make sure you have good connection and try again");
              setEnableAdding(true);
            }
          })
          .catch((err) => {
            console.log(err);
            setEnableAdding(true);
          });
      } catch (error) {
        console.log(error);
        setEnableAdding(true);
      }
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      {showAddBookModal && (
        <div className="fixed  inset-0 z-20 flex place-items-center items-center justify-center bg-black/40 p-4">
          <div className="relative flex flex-col items-center justify-center rounded-xl bg-white p-8">
            <i
              onClick={() => {
                setShowAddBookModal(false);
                setTitle("");
                setAuthor("");
                setGenre("");
                setCover("");
              }}
              className="fa-solid fa-rectangle-xmark absolute top-2 left-4 cursor-pointer text-xl text-slate-500 transition active:scale-95 active:text-sky-700 md:hover:text-sky-700"
            ></i>
            <h2 className="mb-4 text-2xl font-semibold text-sky-900">
              ADD BOOK
            </h2>
            <label htmlFor="title" className="self-start text-xs text-sky-800">
              title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              placeholder="title"
              onChange={(e) => setTitle(e.target.value)}
              dir="auto"
              className="max-w-[240px] rounded-md border-2 border-slate-200  px-2 py-1 focus-visible:outline-sky-700"
            />
            <label htmlFor="author" className="self-start text-xs text-sky-800">
              author
            </label>
            <input
              id="author"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              dir="auto"
              placeholder="author"
              className="max-w-[240px] rounded-md border-2 border-slate-200  px-2 py-1 focus-visible:outline-sky-700"
            />
            <label htmlFor="genre" className="self-start text-xs text-sky-800">
              genre
            </label>
            <input
              id="genre"
              type="text"
              value={genre}
              placeholder="genre"
              onChange={(e) => setGenre(e.target.value)}
              dir="auto"
              className="max-w-[240px] rounded-md border-2 border-slate-200  px-2 py-1 focus-visible:outline-sky-700"
            />
            <label htmlFor="cover" className="self-start text-xs text-sky-800">
              cover
            </label>
            <input
              id="cover"
              type="text"
              value={cover}
              placeholder="cover"
              onChange={(e) => setCover(e.target.value)}
              dir="auto"
              className="max-w-[240px] rounded-md border-2 border-slate-200  px-2 py-1 focus-visible:outline-sky-700"
            />
            <button
              onClick={() => {
                addBook();
              }}
              className="mt-4 w-full rounded-md bg-sky-800 py-2 text-slate-100 transition active:scale-95 active:bg-sky-700 md:hover:bg-sky-700"
            >
              ADD
            </button>
          </div>
        </div>
      )}
      <div id="books-list" className="flex flex-col pt-4">
        <div className="sticky top-4 z-10 flex items-center justify-between">
          <i
            onClick={() => {
              setShowAddBookModal(true);
            }}
            className="fa-solid fa-square-plus cursor-pointer text-4xl text-sky-900 active:scale-95 active:text-sky-700 md:hover:text-sky-700"
          ></i>
          <input
            type="text"
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
            }}
            placeholder="Search..."
            dir="auto"
            className="w-40 rounded-md border-2 border-slate-200  bg-slate-50/80 px-4 py-2 text-slate-900 focus-visible:border-sky-900 focus-visible:outline-none sm:w-60 lg:w-96"
          />
        </div>
        <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {books
            .filter((book) =>
              book.title
                .toLocaleLowerCase()
                .includes(filter.trim().toLocaleLowerCase())
            )
            .map((book) => {
              return (
                <div className="group relative my-4">
                  <div className="tob-0 absolute inset-0 rounded-2xl bg-blue-500 transition group-active:blur-md md:group-hover:blur-md"></div>
                  <div className="relative  aspect-[1/1.5] w-44  rounded-xl bg-white p-4 shadow-lg md:w-48">
                    <i
                      onClick={() => {
                        deleteBook(book._id);
                      }}
                      className="fa-solid fa-trash-can absolute right-2 top-2 cursor-pointer text-xs text-slate-500 transition active:scale-95 active:text-red-600 md:text-sm md:hover:text-red-600"
                    ></i>
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
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Books;
