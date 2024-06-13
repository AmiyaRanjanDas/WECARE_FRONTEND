import React,{useContext,useState,useEffect} from 'react';
import {authContext} from '../../context/AuthContext.jsx';
import HashLoader from 'react-spinners/HashLoader.js';

import MyBookings from './MyBookings.jsx';
import Profile from './Profile.jsx';

import useGetProfile from '../../hooks/UseFetchData.jsx';
import { BASE_URL } from '../../config.js';

function MyAccount() {
    const { dispatch } = useContext(authContext);
    const [tab, setTab] = useState('bookings');
    const [name, setName] = useState(null); 
    const [email, setEmail] = useState(null); 
    const [bloodType, setBloodType] = useState(null); 
    const [photo, setPhoto] = useState(null); 

    const { data: fetchedData, loading, error } = useGetProfile(`${BASE_URL}/users/profile/me`);

    useEffect(() => {
        if (fetchedData) {
            setName(fetchedData.name);
            setEmail(fetchedData.email);
            setBloodType(fetchedData.bloodType);
            setPhoto(fetchedData.photo);
        }
    }, []); 
    
    useEffect(() => {
        if (fetchedData) {
            setName(fetchedData.name);
            setEmail(fetchedData.email);
            setBloodType(fetchedData.bloodType);
            setPhoto(fetchedData.photo);
        }
    }, [fetchedData]); 

    const handleSubmit = (data) => {
        setName(data.name);
        setEmail(data.email);
        setBloodType(data.bloodType);
    };
    
    const handleLogout=()=>{
        dispatch({type:'LOGOUT'});
    }

  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto'>
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
        {   //if everything is fine
            !loading && !error && 
            <div className="grid md:grid-cols-3 gap-10">
                <div className="pb-[50px] px-[30px] rounded-md">
                    <div className="flex items-center justify-center">
                        <div className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
                            <img src={photo} alt="" className='w-full h-full rounded-full'/>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <h3 className='text-[14px] leading-[30px] text-headingColor font-bold'>
                            {name}
                        </h3>
                        <p className="text-textColor text-[15px] leading-6 font-medium">
                            {fetchedData.email || "hii" || userData.email}
                        </p>
                        <p className="text-textColor text-[15px] leading-6 font-medium">
                            Blood Type:
                            <span className='ml-2 text-headingColor text-[22px] leading-0'>
                            {bloodType}
                            </span>
                        </p>
                    </div>
                    <div className="mt-[50px] md:mt-[100px]">
                        <button onClick={handleLogout} className='w-full text-white bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md'>Logout</button>
                        <button className='w-full text-white bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md'>Delete Account</button>
                    </div>

                </div>

                <div className="md:col-span-2 md:px-[30px]">
                    <div>
                        <button onClick={()=>setTab('bookings')} className={`${tab==='bookings' && 'bg-primaryColor text-white font-normal'} p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}>My Booking</button>
                        <button onClick={()=>setTab('settings')} className={`${tab==='settings' && 'bg-primaryColor text-white font-normal'} py-2 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}>Profile Settings</button>
                    </div>
                    {
                        tab==='bookings' && <MyBookings/>
                    }
                    {
                        tab==='settings' && <Profile user={fetchedData} handleSubmit={handleSubmit}/>
                    }
                </div>
            </div>
        }
      </div>
    </section>
  )
}

export default MyAccount