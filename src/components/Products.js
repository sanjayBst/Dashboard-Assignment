import React from "react";
import Product_1 from "../assets/Product_1.jpg";
import Product_2 from "../assets/Product_2.jpeg";

const Products = () => {
  return (
    <>
    <div className="w-screen  ">

    
      <div className="lg:w-[1070px] md:h-fit lg:mb-0 md:mb-12 md:mr-12 md:ml-10 lg:ml-8 sm:hidden md:block h-full bg-white shadow-xl rounded-lg mx-8 my-2">
        <div className="flex  ">
          <span className="lg:ml-[30px] md:ml-[20px] mt-4 text-lg font-bold">Product sell</span>
          <span className="lg:ml-[610px] md:ml-[400px] mt-4 text-xs font-extralight text-gray-500">
            Search
          </span>
          <span className="lg:ml-[200px] md:ml-[70px] mt-4 text-xs font-extralight text-gray-500">
            filter
          </span>
        </div>
        <div className="flex ">
          <span className="lg:ml-[30px] md:ml-[20px] mt-4 text-xs font-light text-gray-500">
            Product Name
          </span>
          <span className="lg:ml-[630px] md:ml-[350px] mt-4 text-xs font-extralight text-gray-500">
            Stock
          </span>
          <span className="lg:ml-[90px] md:ml-[50px] mt-4 text-xs font-extralight text-gray-500">
            Price
          </span>
          <span className="lg:ml-[90px] md:ml-[50px] mt-4 text-xs font-extralight text-gray-500">
            Total Sales
          </span>
        </div>

        <div className="flex  ">
          <span className="ml-[30px] mt-4 text-xs font-light text-gray-500">
            <img
              src={Product_1}
              alt="Product 1"
              className="h-12 w-24 rounded-lg"
            />
          </span>
          <span className="ml-[10px] mt-4 ">
            <div className="text-md font-bold">Abstract 3D</div>
            <div className="lg:text-xs md:text-[12px] md:mr-[50px]  font-thin">
              Lorem ipsum dolor sit amet consectetur elit.{" "}
            </div>
          </span>
          <span className="lg:ml-[290px] md:ml-[20px] mt-7 lg:text-xs md:text-[10px]  text-gray-500">
            32 in stock
          </span>
          <span className="lg:ml-[70px] md:ml-[40px] mt-7 md:text-[10px] lg:text-xs font-bold">
            $ 45.99
          </span>
          <span className="lg:ml-[100px] mt-7 md:ml-[50px] md:text-[10px] lg:text-xs  text-gray-500">
            20
          </span>
        </div>

        

        <div className="flex md:mb-6 lg:mb-0">
          <span className="ml-[30px] mt-4 text-xs font-light text-gray-500">
            <img
              src={Product_2}
              alt="Product 2"
              className="h-12 w-24 rounded-lg"
            />
          </span>
          <span className="ml-[10px] mt-4 md:mb-5 lg:mb-0">
            <div className="text-md font-bold">Sarphens Illustration</div>
            <div className="lg:text-xs md:text-[12px] md:mr-[50px]  font-thin">
              Lorem ipsum dolor sit amet consectetur elit.{" "}
            </div>
          </span>
          <span className="lg:ml-[290px] md:ml-[20px] mt-7 lg:text-xs md:text-[10px]  text-gray-500">
            32 in stock
          </span>
          <span className="lg:ml-[70px] md:ml-[40px] mt-7 md:text-[10px] lg:text-xs font-bold">
            $ 45.99
          </span>
          <span className="lg:ml-[100px] mt-7 md:ml-[50px] md:text-[10px] lg:text-xs  text-gray-500">
            20
          </span>
        </div>
      </div>

      <div className=" sm:w-80 h-fit pt-4 text-2xl font-tilt md:hidden ml-10 rounded-lg mx-8 my-2 mb-9">
        Product sell
      </div>

      <div className="  h-fit md:hidden bg-white shadow-xl rounded-lg mr-6 ml-7 my-2 mb-9">
      <div className="ml-8 mr-8 lg:hidden ">
          <span className="ml-[30px] mt-4 text-xs font-light text-gray-500">
            <img
              src={Product_1}
              alt="Product 1"
              className="h-40 w-screen rounded-lg"
            />
          </span>
          <span className="ml-[10px] mt-4 ">
            <div className="text-sm font-bold">Abstract 3D</div>
            <div className="text-[11px] font-thin">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </div>
          </span>

          <div className="flex" >
          <span className=" mt-7 text-xs font-bold text-black">
          Stock
          </span>
            <span className="ml-16 mt-7 text-xs  text-gray-500">
            32 in stock
          </span>
          </div>

          <div className="flex" >
          <span className=" mt-7 text-xs font-bold text--black">
          Price
          </span>
          <span className="ml-16 mt-7 text-xs text-gray-500 font-light">
            $ 45.99
          </span>
          </div>

          <div className="flex" >
          <span className=" mt-7  text-xs font-bold text--black">
          Total Sales
          </span>
          <span className="ml-9 mt-7 text-xs mb-8  text-gray-500">
            20
          </span>
          </div>
          
          

          
        </div>
      </div>

      <div className="  h-fit md:hidden bg-white shadow-xl rounded-lg mx-8  my-2 mb-9">
      <div className="ml-8 mr-8 lg:hidden ">
          <span className="ml-[30px] mt-4 text-xs font-light text-gray-500">
            <img
              src={Product_2}
              alt="Product 2"
              className="h-40 w-screen rounded-lg"
            />
          </span>
          <span className="ml-[10px] mt-4  ">
            <div className="text-sm font-bold">Sarphens Illustration</div>
            <div className="text-[11px] font-thin">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </div>
          </span>

          <div className="flex" >
          <span className=" mt-7 text-xs font-bold text-black">
          Stock
          </span>
            <span className="ml-16 mt-7 text-xs  text-gray-500">
            32 in stock
          </span>
          </div>

          <div className="flex" >
          <span className=" mt-7 text-xs font-bold text--black">
          Price
          </span>
          <span className="ml-16 mt-7 text-xs text-gray-500 font-light">
            $ 45.99
          </span>
          </div>

          <div className="flex" >
          <span className=" mt-7  text-xs font-bold text--black">
          Total Sales
          </span>
          <span className="ml-9 mt-7 text-xs mb-8  text-gray-500">
            20
          </span>
          </div>
          
          

          
        </div>
      </div>
      </div>
    </>
  );
};

export default Products;
