import React from "react";
import { AiOutlineUser, AiOutlineRise, AiOutlineFall } from "react-icons/ai";

export default function PatientStatistics() {
  const stats = [
    {
      value: "24.4k",
      description: "New Patient",
      change: 15,
      color: "sky-500",
    },
    {
      value: "166.3k",
      description: "Old Patient",
      change: -3,
      color: "orange-500",
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl text-slate-800">Patients</h2>
        <div className="bg-white px-4 py-2 rounded-xl">
          <select name="patient-stats-year" className="text-slate-400">
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>
      </div>
      <div className="bg-white rounded-xl mt-4 py-2">
        <ul>
          {stats.map((stat, index) => (
            <div
              key={`patient-stats-${index}`}
              className="flex items-center gap-4 px-4 py-3"
            >
              <div
                className={`text-${stat.color} bg-${stat.color}/10 text-3xl p-4 rounded-full`}
              >
                <AiOutlineUser />
              </div>
              <div>
                <p className="text-slate-800 font-bold text-2xl">
                  {stat.value}
                </p>
                <p className="text-slate-500">{stat.description}</p>
              </div>
              <div
                className={`${
                  stat.change >= 0 ? "text-indigo-500" : "text-red-500"
                } self-start ml-auto flex items-center gap-1 font-medium mt-1`}
              >
                {stat.change >= 0 ? <AiOutlineRise /> : <AiOutlineFall />}
                <p>{stat.change}%</p>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}