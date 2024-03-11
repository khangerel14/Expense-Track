"use client";
import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PieChart = () => {
  const [chartData, setChartData] = useState({
    labels: ["Bills", "Food", "Shopping", "Insurence", "Clothing"],
    datasets: [
      {
        data: [5000000, 5000000, 9900220, 5000000, 5000000],
        backgroundColor: [
          "rgba(22, 189, 202, 1)",
          "rgba(28, 100, 242, 1)",
          "rgba(231, 70, 148, 1)",
          "rgba(242, 144, 28, 1)",
          "rgba(253, 186, 140, 1)",
        ],
        borderColor: [
          "rgba(22, 189, 202, 1)",
          "rgba(28, 100, 242, 1)",
          "rgba(231, 70, 148, 1)",
          "rgba(242, 144, 28, 1)",
          "rgba(253, 186, 140, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });

  const [chartOptions, setChartOptions] = useState({
    cutoutPersentage: 60,
    plugins: {
      legend: {
        display: false, // Hide the legend
        position: "right",
      },
    },
    elements: {
      arc: {
        borderWidth: 0, // Hide the border of the arcs
      },
    },
  });

  const getSymbolForLabel = (label) => {
    const symbols = {
      Bills: "💸",
      Food: "🍔",
      Shopping: "🛍️",
      Insurence: "🛡️",
      Clothing: "👕",
    };
    return symbols[label] || "";
  };

  const total = chartData.datasets[0].data.reduce(
    (sum, value) => sum + value,
    0
  );

  const tableData = chartData.labels.map((label, index) => ({
    label: label,
    value: chartData.datasets[0].data[index],
    percentage: ((chartData.datasets[0].data[index] / total) * 100).toFixed(2),
    color: chartData.datasets[0].backgroundColor[index],
    symbol: getSymbolForLabel(label),
  }));

  return (
    <div className="flex gap-10 items-center">
      <div className="relative p-2" style={{ width: "220px", height: "220px" }}>
        <Doughnut data={chartData} options={chartOptions} />
      </div>
      <div className="table-container">
        <table className="table-auto">
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td className=" px-3 py-2" style={{ color: data.color }}>
                  {data.label}
                </td>
                <td className="px-3 py-2">{data.value}</td>
                <td className="px-3 py-2">{data.percentage}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PieChart;