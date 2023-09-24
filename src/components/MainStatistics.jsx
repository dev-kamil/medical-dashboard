import React from "react";
import {
  AiOutlineCalendar,
  AiOutlineUser,
  AiOutlineMessage,
  AiOutlineVideoCamera,
} from "react-icons/ai";

export default function MainStatistics() {
  const stats = [
    {
      color: "bg-indigo-500",
      icon: <AiOutlineCalendar />,
      value: "24.1k",
      description: "Appointments",
    },
    {
      color: "bg-red-500",
      icon: <AiOutlineUser />,
      value: "166.3k",
      description: "Total Patient",
    },
    {
      color: "bg-orange-500",
      icon: <AiOutlineMessage />,
      value: "53.5k",
      description: "Clinic Consulting",
    },
    {
      color: "bg-sky-500",
      icon: <AiOutlineVideoCamera />,
      value: "28.3k",
      description: "Video Consulting",
    },
  ];
  return (
    <div className="mt-6 grid grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div className={`${stat.color} rounded-xl p-4 text-white flex items-center gap-4 hover:brightness-110`}>
          <div className="text-4xl bg-white/10 p-4 inline-block rounded-full">
            {stat.icon}
          </div>
          <div>
            <p className="font-bold text-2xl leading-none">{stat.value}</p>
            <p className="text-slate-100 leading-none mt-2">{stat.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
