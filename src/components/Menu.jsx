import React from "react";
import { BiPlusMedical } from "react-icons/bi";
import {
  AiOutlineAppstore,
  AiOutlineCalendar,
  AiOutlineUser,
  AiOutlineClockCircle,
  AiOutlineCreditCard,
  AiOutlineMessage,
  AiOutlineFileText,
  AiOutlineSetting,
} from "react-icons/ai";

export default function Menu() {
  return (
    <>
      <div>
        <p className="flex items-center px-3">
          <BiPlusMedical className="text-purple-700 text-xl" />
          <span className="font-black tracking-tight text-lg">Doct.</span>
        </p>
      </div>
      <nav className="mt-14">
        <a
          href="#"
          className="p-3 bg-black text-white w-full rounded-md flex items-center gap-2"
        >
          <AiOutlineAppstore />
          Overview
        </a>
        <a
          href="#"
          className="p-3 text-slate-500 w-full flex items-center gap-2"
        >
          <AiOutlineCalendar />
          Appointment
        </a>
        <a
          href="#"
          className="p-3 text-slate-500 w-full flex items-center gap-2"
        >
          <AiOutlineUser />
          My patients
        </a>
        <a
          href="#"
          className="p-3 text-slate-500 w-full flex items-center gap-2"
        >
          <AiOutlineClockCircle />
          Schedule Timings
        </a>
        <a
          href="#"
          className="p-3 text-slate-500 w-full flex items-center gap-2"
        >
          <AiOutlineCreditCard />
          Payments
        </a>
        <a
          href="#"
          className="p-3 text-slate-500 w-full flex items-center gap-2"
        >
          <AiOutlineMessage />
          Message
        </a>
        <a
          href="#"
          className="p-3 text-slate-500 w-full flex items-center gap-2"
        >
          <AiOutlineFileText />
          Blog
        </a>
        <a
          href="#"
          className="p-3 text-slate-500 w-full flex items-center gap-2"
        >
          <AiOutlineSetting />
          Settings
        </a>
      </nav>
    </>
  );
}
