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

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signin />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
      <Route path='/courses' element={<Courses />}></Route>
      <Route path='/events' element={<Events />}></Route>
      <Route path='/courseRecommendation' element={<CourseRecommendation />}></Route>
      <Route path='/certificate' element={<Certificate />}></Route>
      
    </Routes>
  </BrowserRouter>
  )
}

export default App
