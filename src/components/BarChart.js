import React from "react";

const Chart = () => {
  return (
    <>
    <div className="sm:w-screen md:w-[385px] lg:w-[740px]  sm:pr-11 ">

      <div className="ml-5 sm:mr-32 my-5 md:ml-8 lg:ml-8 sm:w-full  sm:my-5  lg:w-[740px] h-44 bg-white">
        <div className="flex flex-col items-center justify-center   text-gray-700 bg-gray-100">
          <div className="flex flex-col items-center w-full max-w-screen-md  bg-white rounded-lg shadow-xl sm:p-8">
            <div className="flex items-end flex-grow w-full mt-2 space-x-2 sm:space-x-3">
              <div className="relative flex flex-col items-center flex-grow pb-5 group">
                <div className="relative flex justify-center w-full h-24 bg-fadedBars cursor-pointer  rounded-xl"></div>

                <span className="absolute bottom-0 text-[9px] font-bold">Jan</span>
              </div>
              <div className="relative flex flex-col items-center flex-grow pb-5 group">
                <div className="relative flex justify-center w-full h-20 bg-fadedBars cursor-pointer  rounded-xl"></div>
                <span className="absolute bottom-0 text-[9px] font-bold">Feb</span>
              </div>
              <div className="relative flex flex-col items-center flex-grow pb-5 group">
                <div className="relative flex justify-center w-full h-44 bg-fadedBars cursor-pointer rounded-xl"></div>
                <span className="absolute bottom-0 text-[9px] font-bold">Mar</span>
              </div>
              <div className="relative flex flex-col items-center flex-grow pb-5 group">
                <div className="relative flex justify-center w-full h-32 bg-fadedBars cursor-pointer rounded-xl"></div>
                <span className="absolute bottom-0 text-[9px] font-bold">Apr</span>
              </div>
              <div className="relative flex flex-col items-center flex-grow pb-5 group">
                <div className="relative flex justify-center w-full h-32 bg-fadedBars cursor-pointer rounded-xl"></div>
                <span className="absolute bottom-0 text-[9px] font-bold">May</span>
              </div>
              <div className="relative flex flex-col items-center flex-grow pb-5 group">
                <div className="relative flex justify-center w-full h-16 bg-fadedBars cursor-pointer rounded-xl"></div>
                <span className="absolute bottom-0 text-[9px] font-bold">Jun</span>
              </div>
              <div className="relative flex flex-col items-center flex-grow pb-5 group">
                <div className="relative flex justify-center w-full h-36 bg-fadedBars cursor-pointer rounded-xl"></div>
                <span className="absolute bottom-0 text-[9px] font-bold">Jul</span>
              </div>
              <div className="relative flex flex-col items-center flex-grow pb-5 group">
                <div className="relative flex justify-center w-full h-44 bg-bars cursor-pointer rounded-xl"></div>
                <span className="absolute bottom-0 text-[9px] font-bold">Aug</span>
              </div>
              <div className="relative flex flex-col items-center flex-grow pb-5 group">
                <div className="relative flex justify-center w-full h-36 bg-fadedBars cursor-pointer rounded-xl"></div>
                <span className="absolute bottom-0 text-[9px] font-bold">Sep</span>
              </div>
              <div className="relative flex flex-col items-center flex-grow pb-5 group">
                <div className="relative flex justify-center w-full bg-fadedBars cursor-pointer rounded-xl h-32"></div>
                <span className="absolute bottom-0 text-[9px] font-bold">Oct</span>
              </div>
              <div className="relative flex flex-col items-center flex-grow pb-5 group">
                <div className="relative flex justify-center w-full h-36 bg-fadedBars cursor-pointer rounded-xl"></div>
                <span className="absolute bottom-0 text-[9px] font-bold">Nov</span>
              </div>
              <div className="relative flex flex-col items-center flex-grow pb-5 group">
                <div className="relative flex justify-center w-full h-40 bg-fadedBars cursor-pointer rounded-xl"></div>
                <span className="absolute bottom-0 text-[9px] font-bold">Dec</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Chart;
