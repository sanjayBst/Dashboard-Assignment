import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex mx-6 mt-6 mb-2">
        <span className="md:text-xl sm:text-sm sm:ml-4 font-bold font-tilt">Hello Sanjay 👋🏻, </span>
        <span className="lg:ml-[700px] md:ml-[400px] sm:ml-24 ">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 w-4 h-4 my-auto text-gray-400 left-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="w-44 h-8 sm:w-32 sm:h-4 py-3 pl-8 pr-4 text-xs  text-gray-500 border rounded-md bg-white "
            />
          </div>
        </span>
      </div>
    </>
  );
};

export default Header;
