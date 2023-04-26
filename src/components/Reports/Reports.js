import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Icon from "../Icon/icon";
ChartJS.register(ArcElement, Tooltip, Legend);

/**
 * Render Reports component
 * @param {Array} chartData the chart data
 * @param {string} title the title of the report page
 * @param {string} type the type of chart
 * @returns {React.Component} renders button component
 */
const Reports = ({ chartData, title, type }) => {
  const colors = [ "#599EEA",
  "#844FF6",
  "#0FB77A",
  "#FAB70A",
  "#F09468",];
  const [chartCount, setChartCount] = useState([]);
  const [chartLabels, setChartLabels] = useState([]);

  useEffect(() => {
    const count = chartData && chartData.map((e) => e.count);
    const labels =
      chartData &&
      chartData.map((e) => {
        if (type === "source") {
          return e.source;
        } else {
          return e.country;
        }
      });
    setChartCount(count);
    setChartLabels(labels);
  }, [chartData, type]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };
  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: "Count",
        data: chartCount,
        backgroundColor: [
          "#599EEA",
          "#844FF6",
          "#0FB77A",
          "#FAB70A",
          "#F09468",
        ],
        borderColor: ["#599EEA", "#844FF6", "#0FB77A", "#FAB70A", "#F09468"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="w-full border border-gray0 rounded-[12px] h-full min-h-[326px] px-[16px] xl:px-[24px] pt-[24px]">
      <header className="flex justify-between flex-col md:flex-row">
        <p className="text-[14px] xl:text-[16px] font-semibold font-sohne">{title}</p>
        <a className="text-orangeDefault cursor-pointer text-[14px] font-sohne">
          View full reports
        </a>
      </header>
      <div className="flex mt-[52px] flex-col sm:flex-row">
        <div className="w-full md:w-[50%]">
          {chartData &&
            chartData.map((data, index) => {
              let color = `bg-${colors[index]}`;
              return (
                <div className="flex items-center mb-[19px]" key={index}>
                <div className="w-[28px] h-[17px] flex-shrink-0">
                  <Icon
                    className="h-full w-full"
                    name={
                      type === "source"
                        ? data.source
                        : data.country.toLowerCase()
                    }
                  />
                </div>
                <p className="  px-[4px] lg:px-[8px] text-[10px] lg:text-[16px] capitalize font-sohne">
                  {type === "source" ? data.source : data.country}
                </p>
                <p className="  pr-[10px] lg:pr-[12px] font-medium text-[12px] lg:text-[16px] font-sohne">{`${data.percent}%`}</p>
                <span
                  className={` w-[12px] h-[12px] rounded-full flex-shrink-0`}
                  style={ {backgroundColor: `${colors[index]}`}}
                ></span>
              </div>
              )
              
})}
        </div>
        <div className=" w-full md:w-[50%] max-h-[200px] flex flex-shrink-0 justify-center md:justify-end">
          {chartData && chartData.length > 0 && (
            <Doughnut data={data} options={options} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Reports;
