import React from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
import {
  TbSettings2,
  TbCircleKey,
  TbCube,
  TbUserSquare,
  TbWallet,
  TbDiscount2,
  TbHelpSquare,

  //   TbChevronRight,
} from "react-icons/tb";

const Header = () => {
  return (
    <>
      <div className="flex   flex-wrap lg:hidden w-full text-white h-16 bg-sidebar">
        <h3 className=" sm:hidden md:block mt-5 ml-5 font-tilt">Dashboard</h3>
        <span className=" md:hidden sm:block mt-4 ml-5 font-tilt">
          {" "}
          <TbSettings2 className="w-7 h-7" />
        </span>
        <span className="flex  font-tilt">
          <TbCircleKey className="sm:ml-8 md:ml-16 mt-6 cursor-pointer" />
          <TbCube className="sm:ml-3 md:ml-14 mt-6 cursor-pointer" />
          <TbUserSquare className="sm:ml-3 md:ml-14 mt-6 cursor-pointer" />
          <TbWallet className="sm:ml-3 md:ml-14 mt-6 cursor-pointer" />
          <TbDiscount2 className="sm:ml-3 md:ml-14 mt-6 cursor-pointer" />
          <TbHelpSquare className="sm:ml-3 md:ml-14 mt-6 cursor-pointer" />
        </span>
        <span className=" lg:hidden  md:ml-24 sm:ml-10 sm:mt-[18px] ">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 w-3 h-3 my-auto text-gray-400 left-3"
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
              className=" sm:w-24 sm:h-4 py-3 pl-8 pr-4 text-[8px]  text-gray-500 border rounded-md bg-white "
            />
          </div>
        </span>
      </div>
      <div className="flex mx-6 mt-6 mb-2">
        <span className="md:text-xl sm:text-sm sm:ml-2 font-bold font-tilt">
          Hello Sanjay 👋🏻,{" "}
        </span>
        <span className="lg:ml-[700px] sm:hidden lg:block md:ml-[400px] sm:ml-12 ">
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
              className="w-44 h-8 sm:w-28 sm:h-4 py-3 pl-8 pr-4 text-xs  text-gray-500 border rounded-md bg-white "
            />
          </div>
        </span>
      </div>
    </>
  );
};

export default Header;
