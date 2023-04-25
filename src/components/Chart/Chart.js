import React, { useEffect, useState } from "react";
import Icon from "../Icon/icon";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { formatDate } from "@/utils/utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

/**
 * Render Chart component
 * @param {Array} chartInputData the chart input data
 * @returns {React.Component} renders button component
 */
const Chart = ({ chartInputData }) => {
  const [values, setValues] = useState([]);
  const [chartLabels, setChartLabels] = useState([]);
  useEffect(() => {
    separateKeysAndValues(chartInputData);
  }, [chartInputData]);

  const separateKeysAndValues = (obj) => {
    const keys = [];
    const values = [];
    for (const key in obj) {
      keys.push(formatDate(key));
      values.push(obj[key]);
    }
    setValues(values);
    setChartLabels(keys);
    return [keys, values];
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: { display: true },
      },
      y: {
        grid: {
          color: "#DBDEE5",
        },
        border: {
          dash: [2, 4],
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  const labels = chartLabels && chartLabels;
  const data = {
    labels,
    datasets: [
      {
        label: "Page Views",
        data: values && values,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, "rgba(255, 84, 3, 0.2)");
          gradient.addColorStop(1, "rgba(255, 84, 3, 0)");
          return gradient;
        },
        fill: true,
        borderColor: "#FF5403",
      },
    ],
  };
  return (
    <div className="w-full border border-gray0 rounded-[12px] pl-[24px] pr-[14px] pt-[32px] pb-[22px] h-[576px]">
      <div className="flex justify-between">
        <h1 className="text-[18px] font-medium mb-[8px] font-sohne">Page Views</h1>
        <div className="pr-[10px] cursor-pointer">
          <Icon name="info" />
        </div>
      </div>
      <p className="text-[12px] text-gray500 mb-[24px] font-sohne">All Time</p>
      <p className=" text-[24px] md:text-[48px] font-semibold font-sohne">500</p>
      <div className="h-[75%]">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default Chart;
