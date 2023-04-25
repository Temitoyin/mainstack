import { useState, useEffect } from "react";
import Chart from "@/components/Chart/Chart";
import Filter from "@/components/Filter/Filter";
import Layout from "@/components/Layout/Layout";
import Reports from "@/components/Reports/Reports";

const Home = () => {
  const [apiData, setApiData] = useState({});
  useEffect(() => {
    fetch("https://fe-task-api.mainstack.io/")
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, []);

  const filterData = [
    {
      title: "1 Day",
      onClick: () => {
        console.log("hello");
      },
    },
    {
      title: "3 Days",
      onClick: () => {
        console.log("hello");
      },
    },
    {
      title: "7 Days",
      onClick: () => {
        console.log("hello");
      },
    },
    {
      title: "All Time",
      onClick: () => {
        console.log("hello");
      },
    },
    {
      title: "Custom Date",
      onClick: () => {
        console.log("hello");
      },
    },
  ];

  return (
    <Layout>
      <main className="pb-[44px]">
        <div className="flex items-center justify-between mb-[23px]">
          <div>
            <h1 className="text-[24px] font-semibold mb-[10px]">
              Good morning, Blessing ⛅️
            </h1>
            <p className="text-[14px]">Check out your dashboard summary.</p>
          </div>
          <a className="text-orangeDefault text-[14px] cursor-pointer">
            View analytics
          </a>
        </div>
        <div className="mb-[24px]">
          <Filter filterData={filterData} />
        </div>
        <div>
          <Chart
            chartInputData={
              apiData && apiData.graph_data && apiData.graph_data.views
            }
          />
        </div>
        <div className="flex justify-between mt-[24px]">
          <div className="w-[49.5%]">
            <Reports
              chartData={apiData && apiData.top_locations}
              type="locations"
              title="Top Locations"
            />
          </div>
          <div className="w-[49.5%]">
            <Reports
              chartData={apiData && apiData.top_sources}
              type="source"
              title="Top Referral source"
            />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
