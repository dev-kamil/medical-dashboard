import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function GenderStatistics() {
  const data = {
    labels: ["Male", "Female", "Child"],
    datasets: [
      {
        label: "Patients",
        data: [45, 30, 25],
        backgroundColor: ["#f97316", "#6366f1", "#0ea5e9"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "circle"
        },
      },
    },
  };

  return (
    <div className="mt-4">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl text-slate-800">Gender</h2>
        <div className="bg-white px-4 py-2 rounded-xl">
          <select name="patient-stats-year" className="text-slate-400">
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>
      </div>
      <div className="bg-white rounded-xl mt-4 py-4">
        <div className="max-w-[250px] m-auto">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
}
