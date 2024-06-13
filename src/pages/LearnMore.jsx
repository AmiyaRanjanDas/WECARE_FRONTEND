import React from "react";
import faqImg from "../assets/images/faq-img.png";
import { faqs } from "../assets/data/faqs";
import lmbg from "../assets/images/lmbg.jpg";
import lm1 from "../assets/images/lm1.png";
import lm2 from "../assets/images/lm2.png";
import AccordianFAQ from "./AccordianFAQ";

function LearnMore() {
  return (
    <div>
      <div>
        <div className="container flex flex-col items-center px-4 py-10 pb-24 mx-auto text-center lg:pb-48 md:py-24 md:px-10 lg:px-32 dark:text-gray-50">
          <h1 className="text-5xl font-bold leading-none ">
            Learn More About Our Services and Clear your doubts
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            We help patients live a healthy, longer life.
            <br />
            <span className="leading-6">Why Choose Us?</span>
          </p>
        </div>
      </div>
      <img
        src={lmbg}
        alt=""
        className="w-4/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40"
      />

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

      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-6 lg:pt-10 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={lm1}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Professional Staff
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Our staff is composed of highly trained and experienced
            professionals dedicated to your care.
          </p>
        </div>
      </div>
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-6 lg:pt-10 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            General Consultation
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Get comprehensive health check-ups and personalized medical advice.
          </p>
        </div>
        <div className="flex items-center justify-center p-6 mt-0 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={lm2}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </div>
  );
}

export default LearnMore;
