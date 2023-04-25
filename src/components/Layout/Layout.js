import React from "react";
import SideBar from "../SideBar/SideBar";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <div className="flex relative h-screen w-screen ">
        <div className="mr-[0px] lg:mr-[304px]">
          <SideBar />
        </div>
        <div className="w-full ">
          <div className="px-[60px] h-[68px] flex items-center mb-[24px] w-full lg:w-[calc(100vw-304px)] fixed bg-[#fff] z-[1000]">
            <h1 className="text-[20px] font-medium">Dashboard</h1>
          </div>
          <div className=" pt-[68px] px-[30px] lg:px-[60px] overflow-scroll z-[999] relative ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
