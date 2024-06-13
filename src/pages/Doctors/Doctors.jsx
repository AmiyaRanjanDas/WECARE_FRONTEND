import React, { useState, useEffect } from "react";
import patientAvatar from "../../assets/images/patient-avatar.png";

import { HiStar } from "react-icons/hi";
import DoctorCard from "../DoctorCard";
import { BASE_URL } from "../../config";
import UseFetchData from "../../hooks/UseFetchData";
import HashLoader from "react-spinners/HashLoader.js";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

function Doctors() {
  const [query, setQuery] = useState("");
  const [upQuery, setUpQuery] = useState("");

  const handleSearch = () => {
    setQuery(query.trim());
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setUpQuery(query);
    }, 500);
    return () => clearTimeout(timeout);
  }, [query]);

  const {
    data: docData,
    loading,
    error,
  } = UseFetchData(`${BASE_URL}/doctors?query=${upQuery}`);


  return (
    <>
      <section className="bg-[#e3eeff]">
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              className="py-4 pl-4 pr-2bg-transparent w-full focus:outline-none cursor-pointer placeholder::text-textColor"
              placeholder="Search Doctor by name or specialization"
            />
            <button
              className="btn mt-0 rounded-[0px] rounded-r-md"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Great Doctors</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our Health System offers unmatched,
              expert health care
            </p>
          </div>

          {/* ========Doctors List======= */}
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
        </div>
      </section>

      {/* ========Testimonial section======= */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our patient say</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our Health System offers unmatched,
              expert health care
            </p>
          </div>
          {/* ========Swiper======= */}
          <div className="mt-[30px] lg:mt-[55px]">
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 1, spaceBetween: 0 },
                760: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
              }}
            >
              {/* slide-1 */}
              <SwiperSlide>
                <div className="py-[30px] px-5 rounded-[13px]">
                  <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt="" />
                    <div>
                      <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                        Muhibur Rahman
                      </h4>
                      <div className="flex items-center gap-[2px]">
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                      </div>
                    </div>
                  </div>
                  <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                    "I have taken medical services from them. They treat so well
                    and they are providing the best medical services."
                  </p>
                </div>
              </SwiperSlide>
              {/* slide-2 */}
              <SwiperSlide>
                <div className="py-[30px] px-5 rounded-[13px]">
                  <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt="" />
                    <div>
                      <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                        Muhibur Rahman
                      </h4>
                      <div className="flex items-center gap-[2px]">
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                      </div>
                    </div>
                  </div>
                  <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                    "I have taken medical services from them. They treat so well
                    and they are providing the best medical services."
                  </p>
                </div>
              </SwiperSlide>
              {/* slide-3 */}
              <SwiperSlide>
                <div className="py-[30px] px-5 rounded-[13px]">
                  <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt="" />
                    <div>
                      <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                        Muhibur Rahman
                      </h4>
                      <div className="flex items-center gap-[2px]">
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                      </div>
                    </div>
                  </div>
                  <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                    "I have taken medical services from them. They treat so well
                    and they are providing the best medical services."
                  </p>
                </div>
              </SwiperSlide>
              {/* slide-4 */}
              <SwiperSlide>
                <div className="py-[30px] px-5 rounded-[13px]">
                  <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt="" />
                    <div>
                      <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                        Muhibur Rahman
                      </h4>
                      <div className="flex items-center gap-[2px]">
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                      </div>
                    </div>
                  </div>
                  <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                    "I have taken medical services from them. They treat so well
                    and they are providing the best medical services."
                  </p>
                </div>
              </SwiperSlide>
              {/* slide-5 */}
              <SwiperSlide>
                <div className="py-[30px] px-5 rounded-[13px]">
                  <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt="" />
                    <div>
                      <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                        Muhibur Rahman
                      </h4>
                      <div className="flex items-center gap-[2px]">
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                      </div>
                    </div>
                  </div>
                  <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                    "I have taken medical services from them. They treat so well
                    and they are providing the best medical services."
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default Doctors;
