import React, { useState } from "react";
import Link from "next/link";

export default ({ data }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 left-0 right-0 z-20 flex flex-wrap p-3 bg-gray-900">
        <button
          className="z-20 flex items-center justify-center p-3 m-3 text-gray-100 transition-all duration-1000 ease-in-out transform bg-gray-800 rounded-md focus:outline-none hover:rounded-full hover:rotate-180 focus:bg-gray-700"
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          {menuIsOpen ? (
            <svg
              height="24"
              width="24"
              fill="none"
              className="m-1"
              className="z-20"
            >
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              height="24"
              width="24"
              fill="none"
              className="m-1"
              className="z-20"
            >
              <path
                d="M4 8H20M4 16H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </nav>
      <div
        className={`fixed p-3 bg-gray-900 w-full transition-all ease-in-out duration-1000 border-gray-800 border-t-2 border-solid block shadow-2xl transform ${
          menuIsOpen ? "translate-y-0 -mb-0" : "-translate-y-full -mb-32"
        }`}
      >
        <nav className={`flex flex-col p-3`}>
          {data.map((item) => (
            <Link href={item.href}>
              <a
                key={JSON.stringify(item)}
                onClick={() => setMenuIsOpen(!menuIsOpen)}
                className="inline-block p-3 font-bold tracking-widest text-blue-500 rounded-md hover:text-blue-400 focus:text-blue-500 hover:bg-gray-700"
              >
                {item.text}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};
