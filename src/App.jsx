
import React from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Master from "./assets/components/Master"
import Home from "./assets/components/Home"
import Appointment from "./assets/components/Appointment"

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
