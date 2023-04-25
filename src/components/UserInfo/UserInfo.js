import React from "react";
import Icon from "../Icon/icon";
import ProfileImage from "@/assets/images/profileImage.png";
import Image from "next/image";

/**
 * Render User Info component
 * @returns {React.Component} renders button component
 */
export const UserInfo = () => {
  return (
    <div className="flex items-center pr-[16px] justify-between w-[304px] pl-[60px] ">
      <div className="flex items-center">
        <div className="w-[32px] h-[32px] rounded-full bg-gray-500 mr-[12px] overflow-hidden">
          <Image src={ProfileImage} object-fit="contain" alt="profile" />
        </div>
        <p>Blessing Daniels</p>
      </div>
      <div className="cursor-pointer">
        <Icon name="more" />
      </div>
    </div>
  );
};
