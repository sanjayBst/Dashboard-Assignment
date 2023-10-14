import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Card from "./Card";



const MainPage = () => {
  return (
    <div>
      <div className="flex bg-gray-100 overflow-hidden">
        <Sidebar />
        <div >

        <Header  />
        <Card/>
        
        </div>
      </div>
    </div>
  );
};

export default MainPage;
