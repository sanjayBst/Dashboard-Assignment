import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Card from "./Card";
import BarChart from "./BarChart";
import DonutChart from "./DonutChart";
import Products from "./Products";



const MainPage = () => {
  return (
    <div>
      <div className="flex bg-gray-100 overflow-hidden">
        <Sidebar />
        
        <div >

        <Header  />
        <Card/>
        <span className="flex flex-wrap">
            <BarChart/>
            <DonutChart/>
        </span>
        <Products/>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
