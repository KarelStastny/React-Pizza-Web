import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from "react-router-dom"


import React from 'react'
import Header from '../components/Header'

const Layoutd = () => {
  return <>

    <Header/>
    {/* Outlet to co se bude měnit */}
    <Outlet>

    </Outlet>
    <Footer/>
 </> 
}

export default Layoutd
