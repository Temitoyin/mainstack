import React from "react";
import Icon from "../Icon/icon";

export const UserInfo = () => {
  return (
    <div className="flex items-center pr-[16px] justify-between w-[304px] pl-[60px]">
      <div className="flex items-center">
        <div className="w-[32px] h-[32px] rounded-full bg-gray-500 mr-[12px]"></div>
        <p>Blessing Daniels</p>
      </div>
      <Icon name="more" />
    </div>
  );
};
