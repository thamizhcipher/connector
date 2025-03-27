import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from './Signin'
import Login from './Login'
import Dashboard from './Dashboard';
import Home from './Home';
import Courses from './Courses';
import Events from './Events';
import Certificate from './Certificate';
import CourseRecommendation from './CourseRecommendation'
import AdminCourses from './AdminCourses';
import AdminEvents from './AdminEvents';
import AdminQPUpload from './AdminQP';
import StudentQP from './QP';
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/courses' element={<Courses />}></Route>
      <Route path='/events' element={<Events />}></Route>
      <Route path='/courseRecommendation' element={<CourseRecommendation />}></Route>
      <Route path='/certificate' element={<Certificate />}></Route>
      <Route path='/admin-dashboard' element={<Dashboard />}></Route>
      <Route path='/admin-course' element={<AdminCourses />}></Route>
      <Route path='/admin-event' element={<AdminEvents />}></Route>
      <Route path='/admin-register' element={<Signin />}></Route>
      <Route path='/admin-qp' element={<AdminQPUpload />}></Route>
      <Route path='/qprepo' element={<StudentQP />}></Route>
      
    </Routes>
  </BrowserRouter>
  )
}

export default App
