import React, { useEffect, useState } from 'react';
import useGetProfile from '../../hooks/UseFetchData.jsx';
import { BASE_URL } from '../../config.js';
import HashLoader from 'react-spinners/HashLoader.js';
import starIcon from '../../assets/images/Star.png';
import { FormatDate } from "../../pages/Doctors/FormatDate.jsx";

import Tabs from './Tabs.jsx';
import Profile from './Profile.jsx';
import Appointments from './Appointments.jsx';

function Dashboard() { 
  const [tab, setTab] = useState('overview');
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  const { data: fetchedData, loading: fetchedLoading, error: fetchedError } = useGetProfile(`${BASE_URL}/doctors/profile/me`);
  
  const refreshData=(dataFromProfile)=>{
    setData(dataFromProfile)
  }
  useEffect(() => {
    setData(fetchedData);
    setLoading(fetchedLoading);
    setError(fetchedError);
  }, []);

  useEffect(() => {
    setData(fetchedData);
    setLoading(fetchedLoading);
    setError(fetchedError);
  }, [fetchedData, fetchedLoading, fetchedError]);

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {   //before data get loaded
          loading && !error &&
          <div className='flex items-center justify-center w-full h-full'>
            <HashLoader color='#0067FF' />
          </div>
        }
        {   //if any error
          error && !loading &&
          <div className='flex items-center justify-center w-full h-full'>
            <h3 className='text-headingColor text-[20px] leading-[30px] font-semibold'>
              {error}
            </h3>
            <HashLoader color='#0067FF' />
          </div>
        }
        {   //if everything is fine
          !loading && !error && (
            <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
              <Tabs tab={tab} setTab={setTab} />
              <div className="lg:col-span-2">
                {
                  data?.isApproved == 'pending' &&
                  <div className='flex p-4 m-4 text-yellow-800 bg-yellow-50 rounded-lg'>
                    <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"></path>
                    </svg>
                    <span className='sr-only'>Info</span>
                    <div className="ml-3 text-sm font-medium">
                      To get approval please complete your profile. We'll review manually and approve within 3 days
                    </div>
                  </div>
                }
                {/* show data according to the tabs */}
                <div className="mt-8">
                  {tab === 'overview' &&
                    <div>
                      <div className="flex items-center gap-4 mb-10">
                        <figure className='max-w-[200px] max-h-[200px]'><img src={data?.photo} alt="" className='w-full ' /></figure>
                        <div>
                          <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-4 lg:py-2 lg:px-6 rounded text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold'>
                            {data?.specialization}
                          </span>
                          <h3 className='text-[22px] leading-9 font-bold text-headingColor mt-3'>
                            Dr. {data?.name}
                          </h3>
                          <div className="flex items-center gap-[6px]">
                            <span className='flex items-center gap-[6px] text-headingColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold'>
                              <img src={starIcon} alt="" />{fetchedData?.averageRating}
                            </span>
                            <span className='text-textColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold'>
                              ({fetchedData?.totalRating})
                            </span>
                          </div>
                          <p className='text_para font-[15px] lg:max-w-[390px] leading-6'>{data?.bio}</p>
                        </div>
                      </div>
                      {/* ==================Doctor About section================== */}
                      <div>
                        {/* All Personal Details */}
                        <div>
                          <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                            About of
                            <span className="text-irisBlueColor font-bold text-[24px] leading-9 ml-2">
                              {data?.name}
                            </span>
                          </h3>
                          <p className="text__para">
                            {data?.about}
                          </p>
                        </div>
                        {/* All Education Details */}
                        <div className="mt-12">
                          <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                            Education
                          </h3>
                          <ul className="pt-4 md:p-5">
                            {/* Educations */}
                            {data.qualifications?.map((item, index) =>
                              <li key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                                <div>
                                  <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                                    {FormatDate(item.startingDate)} -{" "}
                                    {FormatDate(item.endingDate)}
                                  </span>
                                  <p className="text-[16px] leading-6 font-medium text-textColor">
                                    {item?.degree}
                                  </p>
                                </div>
                                <p className="text-[14px] leading-5 font-medium text-textColor">
                                  {item?.university}
                                </p>
                              </li>
                            )}
                          </ul>
                        </div>
                        {/* All Experience Details */}
                        <div className="mt-4">
                          <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                            Experience
                          </h3>
                          <ul className="grid sm:grid-cols-2 gap-[38px] pt-4 md:p-5">
                            {data?.experiences?.map((item, index) =>
                              <li key={index} className="p-4 rounded bg-[#fffad2]">
                                <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                                  {FormatDate(item?.startingDate)} -{" "}
                                  {FormatDate(item?.endingDate)}
                                </span>
                                <p className="text-[16px] leading-6 font-medium text-textColor">
                                  {item?.position}
                                </p>
                                <p className="text-[14px] leading-5 font-medium text-textColor">
                                  {item?.hospital} </p>
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>

                    </div>
                  }
                  {tab === 'appointment' && <Appointments appointments={data.appointments}/>}
                  {tab === 'settings' &&
                    <Profile doctorData={data} refreshData={refreshData}/>
                  }
                </div>
              </div>
            </div>
          )
        }
      </div>
    </section>
  )
}

export default Dashboard