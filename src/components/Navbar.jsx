import React from 'react'
import "./navbar.css"
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <NavLink className="navbar-icon" to ="/">Home</NavLink>
        </li>
        <li>
          <NavLink className="navbar-icon" to ="/courses">Courses</NavLink>
        </li>
        <li>
          <NavLink className="navbar-icon" to ="/team">Team</NavLink>
        </li>
        <li>
          <NavLink className="navbar-icon" to ="/about">About</NavLink>
        </li>
        <li>
          <NavLink className="navbar-icon" to ="/contact">Contact</NavLink>
        </li>
         
         <div>
        <NavLink className="home-reg-btn" to="/login">Register Now</NavLink>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar