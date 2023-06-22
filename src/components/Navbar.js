import "./Navbar.scss"
import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [hambuerger, setHamburger] = useState(true)
    const [nav, setNav] =useState(false)

    const clickHamburger = () =>{
        setHamburger(!hambuerger)
        setNav(!nav)
    }
    


    return <div className="nav-container">
        <nav>
            {/* Navigační menu  které se posílá do layout */}
            <div className="logo"><h1>Naše Pizza</h1></div>
            <ul className={`${nav ? "show" : "hide"}`}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/ONas">O nás</NavLink></li>
                <li><NavLink to="/Pobocky">Pobočky</NavLink></li>
                <li><NavLink to="/Galerie">Galerie</NavLink></li>
                <li><NavLink to="/kontakt">Kontakt</NavLink></li>

            </ul>
            <div className="hamburger" onClick={() => clickHamburger()}>

                <i>{hambuerger ? <GiHamburgerMenu/> : <RxCross2/>}</i>
                
               
            </div>
        </nav>
    </div>
}

export default Navbar
