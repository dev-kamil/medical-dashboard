import React from "react";
import {
  AiOutlineSearch,
  AiOutlineQuestionCircle,
  AiOutlineBell,
} from "react-icons/ai";
import doctorPicture from "../assets/doctor.jpg";

export default function TopBar() {
  return (
    <div className="flex items-center justify-between text-slate-500">
      <div className="flex items-center gap-2">
        <AiOutlineSearch className="text-slate-400 text-2xl" />
        <input
          type="text"
          placeholder="Search Appointment, Patient or etc."
          className="bg-transparent placeholder:text-slate-400 focus:outline-none min-w-[300px]"
        />
      </div>
      <div className="flex items-center gap-6">
        <AiOutlineQuestionCircle className="text-2xl" />
        <AiOutlineBell className="text-2xl" />
        <div className="flex items-center gap-4">
          <img
            src={doctorPicture}
            alt="doctor profile picture"
            className="h-8 rounded-full"
          />
          <div>
            <p className="text-slate-800 font-bold leading-none">Stephen Conley</p>
            <p className="text-sm">Cardiologist</p>
          </div>
        </div>
      </div>
    </div>
  );
}
