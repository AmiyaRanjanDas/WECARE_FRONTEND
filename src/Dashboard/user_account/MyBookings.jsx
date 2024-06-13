import React from 'react';
import {BASE_URL} from '../../config.js';
import useFetchData from '../../hooks/UseFetchData.jsx';
import HashLoader from 'react-spinners/HashLoader.js';
import BookingCard from './BookingCard.jsx';

function MyBookings() {
  const {
    data:appointments,
    loading,
    error
  }=useFetchData(`${BASE_URL}/users/appointments/my-appoinments`);

  return (
    <div>
        {   //before data get loaded
            loading && !error &&
            <div className='flex items-center justify-center w-full h-full'>
                <HashLoader color='#0067FF'/>
            </div>
        }
        {   //if any error
            error && !loading &&
            <div className='flex items-center justify-center w-full h-full'>
                <h3 className='text-headingColor text-[20px] leading-[30px] font-semibold'>
                    {error}
                </h3>
                <HashLoader color='#0067FF'/>
            </div>
        }
        {
          !loading && !error && (
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
              {appointments.map(item=>(
                <BookingCard data={item} key={item._id}/>
              ))}
              {!loading && !error && appointments.length===0 &&(
                <h2 className='mt-5 text-center leading-7 text-[20px] font-semibold text-primaryColor'>
                  You did not book any doctor yet
                </h2>
              )}
            </div>
          )
        }
    </div>
  )
}

export default MyBookings