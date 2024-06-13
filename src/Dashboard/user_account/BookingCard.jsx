import React from "react";
import starIcon from "../../assets/images/Star.png";

import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

function BookingCard({ data }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getUTCDate().toString().padStart(2, "0");
    const month = date
      .toLocaleString("en-US", { month: "short" })
      .toUpperCase();
    return `${day} ${month}`;
  };

  var bgClr = "";
  if (data?.status === "approved") {
    bgClr = "rgb(73 255 103)";
  } else {
    bgClr = "rgb(255 226 121)";
  }
  
  return (
    <div className="p-4 me-2 mt-2 lg:p-6 bg-[rgb(232,246,255)]">
      <div>
        <img src={data?.doctor?.photo} alt="" className="w-full" />
      </div>

      <div className="mt-4 lg:mt-6 flex items-center justify-between">
        <h2 className="text-[18px] leading-[30px] lg:text-[22px] lg:leading-9 text-headingColor font-[700] ">
          Dr. {data?.doctor?.name}
        </h2>
        <span
          style={{ background: bgClr }}
          className="py-1 px-3 lg:py-2 lg:px-4 text-[15px] leading-4 lg:text-[15px] lg-leading-7 font-semibold rounded"
        >
          {data?.status}
        </span>
      </div>

      <div className="mt-3 lg:mt-5 flex items-center justify-between">
        <div>
          <h3 className="text-[16px] leading-7 lg:text-[18px] lg-leading-[30px] font-semibold text-headingColor">
            Price :
          </h3>
          <p className="text-[14px] leading-6 font-[400] text-primaryColor">
            ₹ {data?.ticketPrice}.00
          </p>
        </div>
        <div>
          <h3 className="text-[16px] leading-7 lg:text-[18px] lg-leading-[30px] font-semibold text-headingColor">
            {formatDate(data?.appointmentDate)}
          </h3>
          <p className="text-[14px] leading-6 font-[400] text-textColor">
            {data?.slot[0]?.startingTime} - {data?.slot[0]?.endingTime}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookingCard;
