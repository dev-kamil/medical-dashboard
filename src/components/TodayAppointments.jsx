import React from "react";
import {
  AiOutlineArrowRight,
  AiOutlineCheck,
  AiOutlineClose,
} from "react-icons/ai";
import profilePicture from "../assets/doctor.jpg";

function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60000);
}

export default function AppointmentRequest() {
  const appointments = [
    {
      first: "Jenny",
      last: "Wilson",
      picture: profilePicture,
      description: "Video Consulting",
      date: new Date(),
    },
    {
      first: "Annette",
      last: "Black",
      picture: profilePicture,
      description: "Clinic Consulting",
      date: addMinutes(new Date(), 15),
    },
    {
      first: "Robert",
      last: "Fox",
      picture: profilePicture,
      description: "Emergency",
      date: addMinutes(new Date(), 30),
    },
  ];

  return (
    <div className="py-1">
      <div>
        <h2 className="font-bold text-xl text-slate-800">Today Appointments</h2>
      </div>
      <div className="bg-white rounded-xl mt-4 py-2">
        <ul>
          {appointments.map((appointment, index) => (
            <li
              key={`today-appointment-${index}`}
              className="flex items-center gap-4 px-4 py-3 text-slate-500 first:bg-sky-500/10 first:rounded-md"
            >
              <img
                src={appointment.picture}
                alt="Picture of requesting person"
                className="h-12 rounded-full"
              />
              <div>
                <p className="text-slate-800 text-lg">
                  {appointment.first} {appointment.last}
                </p>
                <p className="text-sm first-letter:uppercase">
                  {appointment.description}
                </p>
              </div>
              <p className="whitespace-nowrap ml-auto text-sm">
                {index === 0
                  ? <p className="font-medium">Ongoing</p>
                  : appointment.date.toLocaleTimeString([], {
                      hour: "numeric",
                      minute: "numeric",
                    })}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
