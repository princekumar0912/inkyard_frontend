import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
function Master() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default Master