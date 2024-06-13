import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import aboutImg from "../assets/images/about.png";
import aboutCardImg from "../assets/images/about-card.png";
import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import faqImg from "../assets/images/faq-img.png";
import patientAvatar from "../assets/images/patient-avatar.png";

import { services } from "../assets/data/services";
import { doctors } from "../assets/data/doctors";
import { faqs } from "../assets/data/faqs";

import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { HiStar } from "react-icons/hi";

import AccordianFAQ from "./AccordianFAQ";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import DoctorList from "./DoctorList";

function Home() {
  return (
    <>
      {/* ========hero section======= */}
      <section className="hero__section pt-[60px] 2xl:h-[800px">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[20px] items-center justify-between">
            {/* =======hero content======== */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[55px] text-headingColor font-[800] md:text-[42px] md:leading-[-70px]">
                  We help patients live a healthy, longer life.
                </h1>
                <p className="text__para">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Magnam enim illum voluptatibus iusto unde labore
                </p>
                <button className="btn">
                <Link to='/searchdoctors'>Request an Appointment</Link>
                </button>
              </div>

              {/* =======hero counter======== */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Years of Experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Clinic Location</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Patient Satisfaction</p>
                </div>
              </div>
            </div>

            {/* =======hero content======== */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg02} className="w-full mb-[30px]" alt="" />
                <img src={heroImg03} className="w-full" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========hero section end======= */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the Best medical Services
            </h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health System offers unmatched,
              expert health-care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Doctor
                </h2>
              </div>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                World-class care for eveyone. Our health System offers
                unmatched, expert health care
              </p>
              <Link
                to="/searchdoctors"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
              >
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find Location
                </h2>
              </div>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                World-class care for eveyone. Our health System offers
                unmatched, expert health care
              </p>
              <Link
                to="/contact"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
              >
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book Appointment
                </h2>
              </div>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                World-class care for eveyone. Our health System offers
                unmatched, expert health care
              </p>
              <Link
                to="/searchdoctors"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
              >
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========About section======= */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-[100px] xl:gap-0 flex-col lg:flex-row">
            {/* =========about img======== */}
            <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 m-auto">
              <img src={aboutImg} alt="" />
              <div className="absolute z-20 bottom-[-15%] w-[200px] md:w-[300px] right-[-7%] md:right-[-7%] lg:right-[22%]">
                <img src={aboutCardImg} alt="" />
              </div>
            </div>

            {/* =========about Content======== */}
            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
              <h2 className="heading">Proud to be one of the nations Best</h2>
              <p className="text__para text-[16px] leading-[28px] mt-[12px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique dignissimos corporis quia. Aspernatur placeat nostrum
                perspiciatis nulla nam veniam. Consequuntur officia, saepe
                adipisci maiores accusamus, nobis itaque, ullam vel eius
                excepturi corporis expedita iste veniam!
              </p>
              <p className="text__para text-[16px] leading-[28px] mt-[18px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique dignissimos corporis quia. Aspernatur placeat nostrum
                perspiciatis nulla nam veniam. Consequuntur officia, saepe
                adipisci maiores accusamus, nobis itaque, ullam vel eius
                excepturi corporis expedita iste veniam!
              </p>
              <Link to="/learnmore">
                <button className="btn mt-[22px]">Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========Service section======= */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our medical Services</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our Health System offers unmatched,
              expert health care
            </p>
          </div>

          {/* ========Service List======= */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            {services.map((item, index) => {
              return (
                <div className="py-[20px] px-3 lg:px-5" key={index}>
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700]">
                    {item.name}
                  </h2>
                  <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
                    {item.desc}
                  </p>
                  <div className="flex items-center justify-between mt-[30px]">
                    <Link
                      to="/searchdoctors"
                      className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                    >
                      <BsArrowRight className="group-hover:text-white w-6 h-5" />
                    </Link>
                    <span
                      className="w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600]"
                      style={{
                        background: `${item.bgColor}`,
                        color: `${item.textColor}`,
                        borderRadius: "6px 0 0 6px",
                      }}
                    >
                      {index + 1}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========Features section======= */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* ========Features Content======= */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get Virtual treatment
                <br />
                anytime
              </h2>
              <ul className="pl-4">
                <li className="text__para">
                  1.Schedule the appointment directly
                </li>
                <li className="text__para">
                  2.Search for physician here, and contact their office.
                </li>
                <li className="text__para">
                  3.View our physician who are accepting new patients, use the
                  online scheduling tool to select an appointment time
                </li>
              </ul>
              <Link to="/learnmore">
                <button className="btn">Learn more</button>
              </Link>
            </div>
            {/* ========Features Image======= */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[40px] lg:mt-0 p-4">
              <img src={featureImg} alt="" />
              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[40px] md:left-3 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb[-26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[400]">
                      10:00AM
                    </p>
                  </div>
                  <span className="w-6 h-6 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>
                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] my-2 rounded-full">
                  Consultation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========Doctors section======= */}
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
          <DoctorList/>
        </div>
      </section>

      {/* ========FAQ section======= */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-[45%] hidden md:block">
              <img src={faqImg} alt="" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Most asked questions by our beloved patients
              </h2>

              {/* ========faq List======= */}
              <ul className="mt-[38px]">
                {/* ========connect to AccordianFAQ.jsx======= */}
                {faqs.map((item, index) => {
                  return <AccordianFAQ item={item} key={index} />;
                })}
              </ul>
            </div>
          </div>
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

export default Home;
