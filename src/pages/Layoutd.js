import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from "react-router-dom"


import React from 'react'

const Layoutd = () => {
  return <>
    <Navbar/>
    {/* Outlet to co se bude měnit */}
    <Outlet/>
    <Footer/>
  </>
}

export default Layoutd
