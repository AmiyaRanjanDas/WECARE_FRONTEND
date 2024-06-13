import React, { useState } from "react";
import starIcon from "../../assets/images/Star.png";

import { BASE_URL } from "../../config";
import UseFetchData from "../../hooks/UseFetchData";
import HashLoader from "react-spinners/HashLoader.js";

import { AiFillStar } from "react-icons/ai";
import { FormatDate } from "./FormatDate";
import SideBarr from "./SideBarr";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function DoctorDetails() {
  const [tab, setTab] = useState("about");

  //for feedback form======
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [load, setLoad] = useState(false);
  const [reviewText, setReviewText] = useState("");
  //======

  const { id } = useParams();
  const {data: docData, loading, error} = UseFetchData(`${BASE_URL}/doctors/${id}`);
  
  //for feedback form======
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);
    try {
      if (!rating || !reviewText) {
        setLoad(false);
        return toast.error("Rating & Review Fields are required");
      }
      const res = await fetch(`${BASE_URL}/doctors/${id}/reviews`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ rating, reviewText }),
      });
      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message);
      }
      setLoad(false);
      toast.success(result.message);
    } catch (err) {
      setLoad(false);
      toast.error(err.message);
    }
  };
  //======
  return (
    <>
      <section>
        <div className="max-w-[1170px] px-5 mx-auto">
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
              <div className="grid md:grid-cols-3 gap-[50px]">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-5">
                    <figure>
                      <img src={docData.photo} alt="" className="h-[150px]" />
                    </figure>
                    <div>
                      <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] leading-7 font-semibold rounded">
                        {docData.specialization}
                      </span>
                      <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                        {docData.name}
                      </h3>
                      <div className="flex items-center gap-[6px]">
                        <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                          <img src={starIcon} alt="" />
                          {docData.averageRating}
                        </span>
                        <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-textColor">
                          ( {docData.totalRating})
                        </span>
                      </div>
                      <p className="text__para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px]">
                        {docData.bio}
                      </p>
                    </div>
                  </div>

                  <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
                    <button
                      className={`${
                        tab === "about" &&
                        "border-b border-solid border-primaryColor"
                      } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                      onClick={() => setTab("about")}
                    >
                      About
                    </button>
                    <button
                      className={`${
                        tab === "feedback" &&
                        "border-b border-solid border-primaryColor"
                      } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                      onClick={() => setTab("feedback")}
                    >
                      Feedback
                    </button>
                  </div>

                  <div className="mt-[50px]">
                    {tab == "about" && (
                      <div>
                        {/* ==================Doctor About section================== */}
                        <div>
                          <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                            About of
                            <span className="text-irisBlueColor font-bold text-[24px] leading-9 ml-2">
                              {docData.name}
                            </span>
                          </h3>
                          <p className="text__para">{docData.about}</p>
                        </div>
                        {/* All Education Details */}
                        <div className="mt-12">
                          <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                            Education
                          </h3>
                          <ul className="pt-4 md:p-5">
                            {/* Educations */}
                            {docData.qualifications?.map((item, index) => {
                              return (
                                <li
                                  key="index"
                                  className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]"
                                >
                                  <div>
                                    <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                                      {FormatDate(item?.startingDate)} -{" "}
                                      {FormatDate(item?.endingDate)}
                                    </span>
                                    <p className="text-[16px] leading-6 font-medium text-textColor">
                                      {item?.degree}
                                    </p>
                                  </div>
                                  <p className="text-[14px] leading-5 font-medium text-textColor">
                                    {item?.university}
                                  </p>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        {/* All Experience Details */}
                        <div className="mt-12">
                          <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                            Experience
                          </h3>
                          <ul className="grid sm:grid-cols-2 gap-[38px] pt-4 md:p-5">
                            {docData.experiences?.map((item, index) => {
                              return (
                                <li
                                  key={index}
                                  className="p-4 rounded bg-[#fffad2]"
                                >
                                  <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                                    {FormatDate(item?.startingDate)} -{" "}
                                    {FormatDate(item?.endingDate)}
                                  </span>
                                  <p className="text-[16px] leading-6 font-medium text-textColor">
                                    {item?.position}
                                  </p>
                                  <p className="text-[14px] leading-5 font-medium text-textColor">
                                    {item?.hospital}
                                  </p>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    )}
                    {tab == "feedback" && (
                      <div>
                        {/* ==================Doctor Feedback section================== */}
                        <div className="mb-[50px]">
                          <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
                            All Reviews ({docData.totalRating})
                          </h4>
                          {docData?.reviews?.slice(0,10).map((item, index) => {
                            return (
                              <div
                                key={index}
                                className="flex justify-between gap-10 mb-[30px]"
                              >
                                <div className="flex gap-3">
                                  <figure className="w-10 h-10 rounded-full">
                                    <img
                                      className="w-full"
                                      src={item?.user?.photo}
                                      alt=""
                                    />
                                  </figure>
                                  <div>
                                    <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                                      {item?.user?.name}
                                    </h5>
                                    <p className="text-[14px] leading-6 text-textColor ">
                                      {FormatDate(item?.createdAt)}
                                    </p>
                                    <p className="text__para mt-3 font-medium text-[15px]">
                                      {item?.reviewText}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex gap-1">
                                  {[...Array(item?.rating).keys()].map(
                                    (_, index) => (
                                      <AiFillStar key={index} color="#0067FF" />
                                    )
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* if the feedback is not given */}
                        {docData.role == "doctor"
                          ? ""
                          : !showFeedbackForm && (
                              <div className="text-center">
                                <button
                                  className="btn"
                                  onClick={() => setShowFeedbackForm(true)}
                                >
                                  Give Feedback
                                </button>
                              </div>
                            )}
                        {/* if the feedback is given */}
                        {showFeedbackForm && (
                          <form action="">
                            {/* upper div */}
                            <div>
                              <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
                                How would you rate the overall experience
                              </h3>

                              <div>
                                {[...Array(5).keys()].map((_, index) => {
                                  index += 1;
                                  return (
                                    <button
                                      key={index}
                                      type="button"
                                      className={`${
                                        index <= ((rating && hover) || hover)
                                          ? "text-yellowColor"
                                          : "text-gray-400"
                                      } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                                      onClick={() => setRating(index)}
                                      onMouseEnter={() => setHover(index)}
                                      onMouseLeave={() => setHover(rating)}
                                      onDoubleClick={() => {
                                        setHover(0);
                                        setRating(0);
                                      }}
                                    >
                                      <span>
                                        <AiFillStar />
                                      </span>
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                            {/* suggestion div */}
                            <div className="mt-[30px]">
                              <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
                                Share your feedback or suggestion
                              </h3>
                              <textarea
                                rows="5"
                                className="border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md"
                                placeholder="Write your message"
                                onChange={(e) => setReviewText(e.target.value)}
                              ></textarea>
                            </div>
                            <button
                              className="btn"
                              type="submit"
                              onClick={handleSubmit}
                            >
                              {load ? (
                                <HashLoader size={25} color="#fff" />
                              ) : (
                                "Submit feedback"
                              )}
                            </button>
                          </form>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                {/* ==============side Panel=============== */}
                <div>
                  <SideBarr docData={docData}/>
                </div>
              </div>
            )
          }
        </div>
      </section>
    </>
  );
}

export default DoctorDetails;
