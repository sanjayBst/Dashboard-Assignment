import React from "react";
import { RiExchangeDollarLine } from "react-icons/ri";
import { TbNotes,TbWallet } from "react-icons/tb";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Card = () => {
  return (
    <>
      <div className="flex   sm:flex-wrap  mt-4 md:mx-10  lg:mx-5 md:w-[720px] lg:w-full ">
        <span className="flex bg-white lg:w-[250px] md:mr-6 lg:mr-4 lg:h-32 sm:w-[330px] sm:h-44 mx-3 sm:my-5   rounded-lg  ">
          <div className=" lg:mx-4 sm:ml-10   sm:my-10 lg:mt-4 w-24 h-24 rounded-full  bg-green-100 ">
            <RiExchangeDollarLine className="m-6  w-12 h-12 text-green-600 " />
          </div>

          <span className="lg:mt-5  sm:my-10 sm:ml-4 lg:ml-0 h-fit">
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

        <span className="flex bg-white lg:w-[250px] lg:h-32 sm:w-[330px] sm:h-44 mx-3 sm:my-5   rounded-lg  ">
          <div className=" lg:mx-4 sm:ml-10   sm:my-10 lg:mt-4 w-24 h-24 rounded-full  bg-purple-100 ">
            <TbNotes className="m-6  w-12 h-12 text-purple-600 " />
          </div>

          <span className="lg:mt-5  sm:my-10 sm:ml-4 lg:ml-0 h-fit">
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

        <span className="flex bg-white lg:w-[250px]  md:mr-6 lg:mr-4 lg:h-32 sm:w-[330px] sm:h-44 mx-3 sm:my-5   rounded-lg  ">
          <div className=" lg:mx-4 sm:ml-10   sm:my-10 lg:mt-4 w-24 h-24 rounded-full  bg-blue-100 ">
            <TbWallet className="m-6   w-12 h-12 text-blue-700 " />
          </div>

          <span className="lg:mt-5  sm:my-10 sm:ml-4 lg:ml-0 h-fit">
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

        

        <span className="flex bg-white lg:w-[250px] lg:h-32 sm:w-[330px] sm:h-44 mx-3 sm:my-5   rounded-lg  ">
          <div className=" lg:mx-4 sm:ml-10   sm:my-10 lg:mt-4 w-24 h-24 rounded-full  bg-red-100 ">
            <HiOutlineShoppingBag className="m-6   w-12 h-12 text-red-600 " />
          </div>

          <span className="lg:mt-5  sm:my-10 sm:ml-4 lg:ml-0 h-fit">
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
