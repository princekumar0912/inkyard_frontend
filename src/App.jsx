// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import React from "react"
// import Nav from "./assets/components/Nav"
// import Gallery from "./assets/components/Gallery"
// import AboutMe from "./assets/components/AboutMe"
// import GetInTouch from "./assets/components/GetInTouch"
// import Footer from "./assets/components/Footer"
// import HappyClients from "./assets/components/HappyClients"
// import WhyInkyard from "./assets/components/WhyInkyard"
// import HeroSection from "./assets/components/HeroSection"
// import Services from "./assets/components/Services"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Master from "./assets/components/Master"
import Home from "./assets/components/Home"
import Appointment from "./assets/components/Appointment"
import AboutMe from "./assets/components/AboutMe"
// import ShopProducts from "./assets/components/ShopProducts"
function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="" element={<Master />}>
            <Route path="/" element={<Home />} />
            <Route path='/booking' element={<Appointment />} />
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
