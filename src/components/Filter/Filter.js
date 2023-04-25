import React from "react";

const Filter = ({ filterData }) => {
  const active = 3;
  return (
    <div className="flex">
      {filterData &&
        filterData.map((data, index) => (
          <div
            className={`flex items-center justify-center border border-gray0 h-[40px] rounded-full px-[16px] py-[12px] mr-[20px] cursor-pointer hover:border-orangeDefault hover:bg-gradientOrange hover:text-orangeDefault ${
              active === index && "border-orangeDefault bg-gradientOrange"
            }`}
            onClick={() => data.onClick()}
            key={data.title}
          >
            <p
              className={`text-[14px]  ${
                active === index && "text-orangeDefault"
              }`}
            >
              {data.title}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Filter;
