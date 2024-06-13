import React from "react";
import DoctorCard from "./DoctorCard";
import { BASE_URL } from "../config";
import UseFetchData from "../hooks/UseFetchData";
import HashLoader from 'react-spinners/HashLoader.js';

function DoctorList() {
  const { data: docData, loading, error } = UseFetchData(`${BASE_URL}/doctors/greatdoctors`,3);

  return (
    <>
      {
        //before data get loaded 
        loading && !error && (
          <div className="flex items-center justify-center w-full h-full">
            <HashLoader color="#0067FF" />
          </div>
        )
      } 
      {
        //if any error
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
        //if everything is fine
        !loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            {docData.map((doctor) => (
              <DoctorCard key={doctor._id} doctor={doctor} />
            ))}
          </div>
        )
      }
    </>
  );
}

export default DoctorList;
