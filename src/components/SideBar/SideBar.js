import React from "react";
import Icon from "../Icon/icon";
import { UserInfo } from "../UserInfo/UserInfo";
import { sideBarData } from "./data";

/**
 * Render SideBar component
 * @returns {React.Component} renders button component
 */
const SideBar = () => {
  const active = 0;
  return (
    <div className="hidden lg:block fixed border-r border-gray0 w-[304px] h-full ">
      <div className="pl-[54px] pt-[32px] pb-[40px]">
        <Icon name="logo" />
      </div>
      <div>
        {sideBarData.map((data, index) => (
          <div
            key={data.title}
            className={`pl-[60px] ${
              active === index && "border-l-2 border-orangeDefault"
            }`}
          >
            {data.header ? (
              <p className="mt-[12px] mb-[20px] text-[12px] text-gray400">
                {data.header}
              </p>
            ) : (
              <div className="flex h-[28px] items-center mb-[20px] cursor-pointer">
                <div className="w-[20px] ">
                  <Icon name={data.icon} />
                </div>

                <p
                  className={`ml-[12px] ${
                    active === index ? "text-orangeDefault" : "text-gray400"
                  }`}
                >
                  {data.title}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="absolute bottom-[60px] left-0">
        <UserInfo />
      </div>
    </div>
  );
};
export default SideBar;
