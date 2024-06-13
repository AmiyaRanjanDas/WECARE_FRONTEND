import React from "react";
import { Link } from "react-router-dom";
import { BASE_URL,token } from "../../config.js";
import {toast} from 'react-toastify';

function SideBarr({ docData }) {
  const convertToAmPm = (time) => {
    let [hours, minutes] = time.split(":").map(Number);
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 0 to 12 for 12 AM/PM
    const minutesStr = minutes.toString().padStart(2, "0"); // Ensure two digits for minutes
    return `${hours}:${minutesStr} ${ampm}`;
  };

  const bookingHandler = async () => {
    try {
      const res = await fetch(
        `${BASE_URL}/bookings/checkout-session/${docData._id}`,
        {
          method: "post",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      if(!res.ok){
        throw new Error(data.message='please try again');
      }
      if(data.session.url){
        window.location.href=data.session.url;
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="shadow-panelShadow p-5 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text_para mt-0 font-semibold">Ticket Price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
        ₹ {docData.ticketPrice}
        </span>
      </div>
      {/* All timeslot */}
      <div className="mt-[30px]">
        <p className="text_para mt-0 font-semibold text-headingColor">
          Available Time Slots:
        </p>
        <ul className="mt-3">
          {docData.timeSlots?.map((item, index) => (
            <li key={index} className="flex items-center justify-between mb-2">
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {item?.day}
              </p>
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {convertToAmPm(item?.startingTime)} -{" "}
                {convertToAmPm(item?.endingTime)}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <Link to={`/doctors/book/${docData._id}`}>
        <button 
        // onClick={bookingHandler}
        className="btn px-2 w-full rounded-md">Book Appointment</button>
      </Link>
    </div>
  );
}

export default SideBarr;
