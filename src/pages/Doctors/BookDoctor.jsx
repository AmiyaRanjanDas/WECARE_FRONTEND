import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UseFetchData from "../../hooks/UseFetchData";
import starIcon from "../../assets/images/Star.png";
import { format, addDays, parseISO } from "date-fns";
import { BASE_URL } from "../../config";
import HashLoader from "react-spinners/HashLoader.js";
import { toast } from 'react-toastify';
import { token } from "../../config.js";

function BookDoctor() {
  const navigate = useNavigate();
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user._id;
  const userToken = localStorage.getItem("token");

  const [submitLoad, setSubmitLoad] = useState(false);

  const {
    data: docData,
    loading,
    error,
  } = UseFetchData(`${BASE_URL}/doctors/${id}`);

  // to get already booked slot details
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    const fetchBookingData = async () => {
      if (!userToken) {
        console.log("not authorized");
      }
      try {
        const res = await fetch(
          `${BASE_URL}/bookings/get-booking/${id}?userId=${userId}`,
          {
            method: "get",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${userToken}`,
            },
          }
        );
        const result = await res.json();
        if (!res.ok) {
          throw new Error(result.message);
        }
        setBookingData(result.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchBookingData();
  }, [id, userId]);

  const [formDate, setFormDate] = useState("");
  const [formDay, setFormDay] = useState("");
  const [formTimeSlot, setformTimeSlot] = useState("");

  // to get details from table on click and set it on the form
  const setBookFormData = (dates,day, sTime, eTime) => {
    setFormDate(dates.date);
    setFormDay(dates.date);
    setformTimeSlot(sTime + "-" + eTime);
  };

  // to get next 7 days date and day
  const getNext7Days = () => {
    const today = new Date();
    const daysArray = [];

    for (let i = 0; i < 7; i++) {
      const nextDay = addDays(today, i);
      daysArray.push({
        date: format(nextDay, "yyyy-MM-dd"),
        day: format(nextDay, "EEEE"),
      });
    }

    return daysArray;
  };
  const next7Days = getNext7Days();

  // to convert (date) to (month & date)
  const formatDate1 = (dateString) => {
    const date = parseISO(dateString);
    return format(date, "dd MMMM");
  };

  // TUESDAY to TUE and SATURDAY to SAT
  const formatDay1 = (day) => {
    return day.slice(0, 3).toUpperCase();
  };

  // Organize time slots by day
  const organizeTimeSlotsByDay = (slots) => {
    const days = ["SAT", "SUN", "MON", "TUE", "WED", "THU", "FRI"];
    const organizedSlots = days.reduce((acc, day) => {
      acc[day] = [];
      return acc;
    }, {});

    slots?.forEach((slot) => {
      const dayAbbr = slot.day.slice(0, 3).toUpperCase();
      if (organizedSlots[dayAbbr]) {
        organizedSlots[dayAbbr].push(slot);
      }
    });

    return organizedSlots;
  };
  const organizedSlots = organizeTimeSlotsByDay(docData.timeSlots);

  // to compare two dates to see if they are the same
  const checkDateCompare = (date1, date2) => {
    const d2 = date2.split("T")[0];
    return date1 === d2;
  };

  const isSlotBooked = (date, startTime, endTime) => {
    if (!bookingData) return false;

    // Iterate through each booking
    for (const booking of bookingData) {
      // Check if the booking date matches the given date
      if (checkDateCompare(date, booking.appointmentDate)) {
        // Iterate through each slot in the booking
        for (const bookedSlot of booking.slot) {          
          // Extract start and end times of the booked slot
          const bookedStartTime=bookedSlot.startingTime;
          const bookedEndTime=bookedSlot.endingTime;

          // Check if the booked slot matches the given start and end times
          if (
            bookedStartTime === startTime &&
            bookedEndTime === endTime
          ) {
            return true; // Slot is booked
          }
        }
      }
    }

    return false; // Slot is not booked
  };


  function convertTimeSlot(timeSlot) {
    const [startingTime, endingTime] = timeSlot.split("-");
    return { startingTime, endingTime };
  }
  // final book button action
  const finalBook = async (e) => {
    e.preventDefault();
    const confirms = confirm("Are you sure!");
    if (confirms) {
      setSubmitLoad(true);
      if (!formTimeSlot || !formDate) {
        toast.error("Select a slot!");
        setSubmitLoad(false);
        return;
      }
      try {
        console.log();
        const res = await fetch(
          `${BASE_URL}/bookings/add-booking/${id}?userId=${userId}`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              ticketPrice: docData?.ticketPrice,
              appointmentDate: formDate,
              appointmentDay: formDay,
              slot: convertTimeSlot(formTimeSlot),
              status: "approved",
              isPaid: true,
            }),
          }
        );
        const { message } = await res.json();
        if (!res.ok) {
          throw new Error(message);
        }
        setSubmitLoad(false);
        toast.success(message);
        navigate("/checkout-success");
      } catch (error) {
        toast.error(error.message || "Error in Connection!");
        setSubmitLoad(false);
      }
    }
  };

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {
          // before data gets loaded
          loading && !error && (
            <div className="flex items-center justify-center w-full h-full">
              <HashLoader color="#0067FF" />
            </div>
          )
        }
        {
          // if any error
          error && !loading && (
            <div className="flex items-center justify-center w-full h-full">
              <h3 className="text-headingColor text-[20px] leading-[30px] font-semibold">
                {error}
              </h3>
              <HashLoader color="#0067FF" />
            </div>
          )
        }
        {
          // if everything is fine
          !loading && !error && (
            <>
              <div className="flex items-center justify-center gap-5">
                <figure>
                  <img src={docData?.photo} alt="" className="h-[150px]" />
                </figure>
                <div>
                  <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] font-semibold rounded">
                    {docData?.specialization}
                  </span>
                  <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                    {docData?.name}
                  </h3>
                  <div className="flex items-center gap-[6px]">
                    <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                      <img src={starIcon} alt="" />
                      {docData?.averageRating}
                    </span>
                    <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-textColor">
                    ( {docData?.totalRating})
                    </span>
                  </div>
                  <p className="text__para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px]">
                    {docData?.bio}
                  </p>
                </div>
              </div>

              <section>
                <div className="flex justify-between flex-col md:flex-row flex-wrap">
                  <div className="w-[100%] lg:w-[75%] pe-0 lg:pe-8">
                    <div className="relative overflow-x-auto">
                      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-sm uppercase bg-primaryColor text-white">
                          <tr>
                            {next7Days.map((dates, index) => (
                              <th
                                key={index}
                                scope="col"
                                className="px-2 py-3 text-center"
                              >
                                {formatDate1(dates?.date)}
                                <br />
                                {formatDay1(dates?.day)}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="text-center bg-white">
                            {next7Days.map((dates, index) => (
                              <td
                                key={index}
                                style={{ verticalAlign: "baseline" }}
                              >
                                {organizedSlots[formatDay1(dates.day)].map(
                                  
                                  (slot, idx) => {
                                    // Check if the slot is already booked
                                    const isBooked = isSlotBooked(
                                      dates.date,
                                      slot.startingTime,
                                      slot.endingTime
                                    );
                                    return (
                                      <div
                                        key={idx}
                                        className={`py-5 px-1 mt-1 me-1 w-100 ${
                                          isBooked
                                            ? "bg-[#f1aeae] cursor-not-allowed"
                                            : "bg-[#CCF0F3] cursor-pointer"
                                        }`}
                                        onClick={() =>
                                          !isBooked &&
                                          setBookFormData(
                                            dates,
                                            slot.day,
                                            slot.startingTime,
                                            slot.endingTime
                                          )
                                        }
                                        title={
                                          isBooked
                                            ? "This slot is already booked"
                                            : ""
                                        }
                                      >
                                        {slot.startingTime} - {slot.endingTime}
                                      </div>
                                    );
                                  }
                                )}
                              </td>
                            ))}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* =================form to store booking data============= */}
                  <div className="w-[100%] lg:w-[25%]">
                    <form action="#" className="space-y-8" onSubmit={finalBook}>
                      <div>
                        <label htmlFor="bookingDate" className="form__label">
                          Booking Date
                        </label>
                        <input
                          type="text"
                          id="bookingDate"
                          placeholder="Select date"
                          className="form__input mt-1"
                          value={formDate}
                          onChange={(e) => setFormDate(e.target.value)}
                          disabled
                        />
                      </div>
                      <div>
                        <input
                          type="hidden"
                          id="bookingDay"                  
                          value={formDay}
                          onChange={(e) => setFormDay(e.target.value)}
                          disabled
                        />
                      </div>
                      <div>
                        <label htmlFor="timeslot" className="form__label">
                          Time Slot
                        </label>
                        <input
                          type="text"
                          id="timeslot"
                          placeholder="Select timeslot"
                          className="form__input mt-1"
                          value={formTimeSlot}
                          onChange={(e) => setformTimeSlot(e.target.value)}
                          disabled
                        />
                      </div>
                      <button
                        className="btn rounded sm:w-fit"
                        type="submit"
                        disabled={submitLoad && true}
                      >
                        {submitLoad ? (
                          <HashLoader size={22} color="#ffffff" />
                        ) : (
                          "Book"
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </section>
            </>
          )
        }
      </div>
    </section>
  );
}

export default BookDoctor;

