import React from "react";
import SideBar from "../SideBar/SideBar";

/**
 * Render Layout component
 * @param {null} children the children
 * @returns {React.Component} renders button component
 */
const Layout = ({ children }) => {
  return (
    <div className="relative">
      <div className="flex relative h-screen w-screen ">
        <div className="mr-[0px] lg:mr-[304px]">
          <SideBar />
        </div>
        <div className="w-full ">
          <div className=" px-[30px] sm:px-[35px] xl:px-[60px] h-[68px] flex items-center mb-[24px] w-full xl:w-[calc(100vw-304px)] fixed bg-[#fff] z-[1000]">
            <h1 className="text-[20px] font-medium">Dashboard</h1>
          </div>
          <div className=" pt-[68px] px-[30px] sm:px-[35px] xl:px-[60px] overflow-scroll z-[999] relative ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
