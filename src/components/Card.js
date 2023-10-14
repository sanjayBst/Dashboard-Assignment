import React from "react";
import { RiExchangeDollarLine } from "react-icons/ri";
import { TbNotes,TbWallet } from "react-icons/tb";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Card = () => {
  return (
    <>
      <div className="flex  m-5">
        <span className="bg-white w-[250px] h-36 mx-3 rounded-lg flex">
          <div className=" m-4 mt-5 w-24 h-24 rounded-full  bg-green-100 ">
            <RiExchangeDollarLine className="m-5  w-14 h-14 text-green-600 " />
          </div>

          <span className="mt-7 ml-0 h-fit">
            <div className="text-[12px] text-gray-400 font-tilt my-1">
              Earning
            </div>
            <div className="text-xl font-bold my-1">$ 198k</div>
            <div className="text-[12px] font-tilt my-1">
              <span className="text-green-500">↑ 37.8% </span>
              <span>this month</span>
            </div>
          </span>
        </span>

        <span className="bg-white w-[250px] h-36 mx-3 rounded-lg flex">
          <div className=" m-4 mt-5 w-24 h-24 rounded-full  bg-purple-100 ">
            <TbNotes className="m-5  w-14 h-14 text-purple-600 " />
          </div>

          <span className="mt-7 ml-0 h-fit">
            <div className="text-[12px] text-gray-400 font-tilt my-1">
             Orders
            </div>
            <div className="text-xl font-bold my-1">$ 2.4k</div>
            <div className="text-[12px] font-tilt my-1">
              <span className="text-red-600">↓ 2% </span>
              <span>this month</span>
            </div>
          </span>
        </span>

        <span className="bg-white w-[250px] h-36 mx-3 rounded-lg flex">
          <div className=" m-4 mt-5 w-24 h-24 rounded-full  bg-blue-100 ">
            <TbWallet className="m-5  w-14 h-14 text-blue-700 " />
          </div>

          <span className="mt-7 ml-0 h-fit">
            <div className="text-[12px] text-gray-400 font-tilt my-1">
              Balance
            </div>
            <div className="text-xl font-bold my-1">$ 2.4k</div>
            <div className="text-[12px] font-tilt my-1">
              <span className="text-red-600">↓ 2%  </span>
              <span> this month</span>
            </div>
          </span>
        </span>

        

        <span className="bg-white w-[250px] h-36 ml-3 mr-4  rounded-lg flex">
          <div className=" m-4 mt-5 w-24 h-24 rounded-full  bg-red-100 ">
            <HiOutlineShoppingBag className="m-5  w-14 h-14 text-red-600 " />
          </div>

          <span className="mt-7 ml-0 h-fit">
            <div className="text-[12px] text-gray-400 font-tilt my-1">
              Total Sales
            </div>
            <div className="text-xl font-bold my-1">$ 89k</div>
            <div className="text-[12px] font-tilt my-1">
              <span className="text-green-500">↑ 11% </span>
              <span> this month</span>
            </div>
          </span>
        </span>

       
      </div>
    </>
  );
};

export default Card;
