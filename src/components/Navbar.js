import "./Navbar.scss"
import React from 'react'
import { NavLink } from "react-router-dom"


const Navbar = () => {
    return <div className="nav-container">
        <nav>
            {/* Navigační menu  které se posílá do layout */}
            <div className="logo">Naše Pizza</div>
            <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/ONas">O nás</NavLink>
                <NavLink to="/Pobocky">Pobočky</NavLink>
                <NavLink to="/Galerie">Galerie</NavLink>
                <NavLink to="/kontakt">Kontakt</NavLink>
            </ul>
            <div className="hamburger">
                <img src="" alt="" />
            </div>
        </nav>
    </div>
}

export default Navbar
