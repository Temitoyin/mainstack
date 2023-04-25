import React from "react";

/**
 * Render Filter component
 * @param {Array} filterData the filter data
 * @returns {React.Component} renders button component
 */
const Filter = ({ filterData }) => {
  const active = 3;
  return (
    <div className="flex flex-wrap">
      {filterData &&
        filterData.map((data, index) => (
          <div
            className={`flex items-center justify-center border border-gray0 h-[40px] rounded-full  px-[10px] mb:px-[16px] py-[12px] mr-[20px] cursor-pointer hover:border-orangeDefault hover:bg-gradientOrange hover:text-orangeDefault min-w-[64px] mb-[8px] mb:mb-[0px] ${
              active === index && "border-orangeDefault bg-gradientOrange"
            }`}
            onClick={() => data.onClick()}
            key={data.title}
          >
            <p
              className={`text-[10px] mb:text-[14px] font-sohne ${
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
