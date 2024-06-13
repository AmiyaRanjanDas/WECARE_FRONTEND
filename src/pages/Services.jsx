import React from 'react';
import { services } from "../assets/data/services";

import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

function Services() {
  return (
    <section>
      <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-[30px]">
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
  )
}

export default Services