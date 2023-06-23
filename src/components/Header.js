import "./Header.scss"
import React from 'react'
import Navbar from './Navbar'
import R2 from "../images/pizza6.jpg"


const Header = () => {
  return <header>
            <Navbar/>
            <div className="header-left"></div>
            <div className="header right"></div>
            
  </header>
}

export default Header
