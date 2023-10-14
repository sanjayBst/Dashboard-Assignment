import React from "react";
import userImg from "../assets/user.jpeg";

import {
  TbSettings2,
  TbCircleKey,
  TbCube,
  TbUserSquare,
  TbWallet,
  TbDiscount2,
  TbHelpSquare,
  TbChevronDown,
  //   TbChevronRight,
} from "react-icons/tb";

const Sidebar = () => {
  return (
    <div className="text-white w-[250px] h-screen bg-sidebar">
      <div className=" flex p-5">
        <span className="pr-4">
          <TbSettings2 className=" h-8 w-8" />
        </span>
        <span className="text-2xl font-tilt">Dashboard</span>
      </div>
      <div className="px-8 py-4 text-xs ">
        <div className="py-2  flex items-end m-3 active [&.active]:bg-faded rounded-md p-2">
          <span className="pr-3  text-sm ">
            <TbCircleKey />
          </span>
          <span>Dashboard</span>
        </div>

        <div className="py-2 flex items-end p-2 m-3">
          <span className="pr-3  text-sm">
            <TbCube />
          </span>
          <span>Product</span>
        </div>
        <div className="py-2 flex items-end p-2 m-3">
          <span className="pr-3  text-sm">
            <TbUserSquare />
          </span>
          <span>Customers</span>
        </div>
        <div className="py-2 flex items-end p-2 m-3">
          <span className="pr-3  text-sm">
            <TbWallet />
          </span>
          <span>Income</span>
        </div>
        <div className="py-2 flex items-end p-2 m-3  ">
          <span className="pr-3  text-sm">
            <TbDiscount2 />
          </span>
          <span>Promote</span>
        </div>
        <div className="py-2 flex items-end p-2 m-3">
          <span className="pr-3  text-sm">
            <TbHelpSquare />
          </span>
          <span>Help</span>
        </div>
      </div>

      <div
        className="fixed 
             inset-x-0 
             bottom-3 
             bg-faded 
             rounded
             mx-3
             
             w-[205px]
             h-13
             flex"
      >
        <span>
          <img src={userImg} className="h-9 w-9 m-2 rounded-full " alt="user" />
        </span>
        <span className="mt-3">
          <div
            className="text-xs
             font-bold"
          >
            Sanjay Bisht
          </div>
          <div className="text-[10px]">Fronted Developer</div>{" "}
        </span>
        <div className="ml-7 mt-4 cursor-pointer">
          <TbChevronDown />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
