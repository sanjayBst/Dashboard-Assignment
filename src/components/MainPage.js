import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";


const MainPage = () => {
  return (
    <div>
      <div className="flex bg-gray-100 overflow-hidden">
        <Sidebar />
        <div >

        <Header  />
        
        </div>
      </div>
    </div>
  );
};

export default MainPage;
