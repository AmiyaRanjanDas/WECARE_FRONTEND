import React from 'react';
import {Routes,Route} from 'react-router-dom';

import Home from '../pages/Home';
import Doctors from '../pages/Doctors/Doctors';
import DoctorDetails from '../pages/Doctors/DoctorDetails';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import Services from '../pages/Services';
import MyAccount from '../Dashboard/user_account/MyAccount';
import Dashboard from '../Dashboard/doctor_account/Dashboard';

import ProtectedRoute from './ProtectedRoute';
import LearnMore from '../pages/LearnMore';
import BookDoctor from '../pages/Doctors/BookDoctor';
import CheckoutSuccess from '../pages/Doctors/CheckoutSuccess';

function Router() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/learnmore' element={<LearnMore/>}/>
        <Route path='/searchdoctors' element={<Doctors/>}/>
        <Route path='/doctors/:id' element={<DoctorDetails/>}/>
        <Route path='/checkout-success' element={<CheckoutSuccess/>}/>
        <Route path='/doctors/book/:id' element={<ProtectedRoute allowedRoles={['patient']}><BookDoctor/></ProtectedRoute>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/users/profile/me' element={<ProtectedRoute allowedRoles={['patient']}><MyAccount/></ProtectedRoute>}/>
        <Route path='/doctors/profile/me' element={<ProtectedRoute allowedRoles={['doctor']}><Dashboard/></ProtectedRoute>}/>
    </Routes> 
    </>
  )
}

export default Router