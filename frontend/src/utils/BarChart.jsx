"use client";
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: false,
          data: [2500000, 2000000, 3000000, 4000000, 5000000, 3000000, 4500000],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgb(132,204,22)",
        },
        {
          label: false,
          data: [4100000, 2100000, 2100000, 2100000, 2000000, 3100000, 2500000],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgb(249,115,22)",
        },
      ],
    });
  }, []);

  return (
    <>
      <div className="w-full relative p-1 bg-white">
        <Bar
          data={chartData}
          options={chartOptions}
          width={"588px"}
          height={"226px"}
        />
      </div>
    </>
  );
};

export default BarChart;
