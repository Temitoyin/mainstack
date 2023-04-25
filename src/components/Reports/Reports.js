import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Icon from "../Icon/icon";
ChartJS.register(ArcElement, Tooltip, Legend);

const Reports = ({ chartData, title, type }) => {
  const colors = ["blue", "purple", "green", "lightOrange", "orange"];
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
    <div className="w-full border border-gray0 rounded-[12px] min-h-[326px] px-[24px] pt-[24px]">
      <header className="flex justify-between">
        <p>{title}</p>
        <a className="text-orangeDefault cursor-pointer">View full reports</a>
      </header>
      <div className="flex mt-[52px]">
        <div className="w-[50%]">
          {chartData &&
            chartData.map((data, index) => (
              <div className="flex items-center mb-[19px]" key={index}>
                <div className="w-[28px] h-[17px]">
                  <Icon
                    className="h-full w-full"
                    name={
                      type === "source"
                        ? data.source
                        : data.country.toLowerCase()
                    }
                  />
                </div>
                <p className="px-[8px] capitalize">
                  {type === "source" ? data.source : data.country}
                </p>
                <p className="pr-[12px] font-medium text-[16px]">{`${data.percent}%`}</p>
                <div
                  className={`bg-${colors[index]} w-[12px] h-[12px] rounded-full `}
                />
              </div>
            ))}
        </div>
        <div className="w-[50%] max-h-[200px] flex justify-end">
          {chartData && chartData.length > 0 && (
            <Doughnut data={data} options={options} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Reports;
