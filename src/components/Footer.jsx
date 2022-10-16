import React from 'react'
import "./footer.css"
import {NavLink} from "react-router-dom"
import Lastfooter from './Lastfooter'

const Footer = () => {
  return (
    <header className="footer">
      <div className="footer-list">
        <ul className="footer-list--">
        <li>
          <NavLink className="footer-icon" to ="/">Home</NavLink>
        </li>
        <li>
          <NavLink className="footer-icon" to ="/courses">Courses</NavLink>
        </li>
        <li>
          <NavLink className="footer-icon" to ="/team">Team</NavLink>
        </li>
        <li>
          <NavLink className="footer-icon" to ="/about">About</NavLink>
        </li>
        <li>
          <NavLink className="footer-icon" to ="/contact">Contact</NavLink>
        </li>
        </ul>


        <ul className="footer-list--">
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
          <li>24/7 Support</li>
          <li>Report a Problem</li>
          <li>F.A.Q.</li>
        </ul>

        <form action="">
          <h4>Subscribe for company latest updates</h4>
          <input type="email" name="" id="" placeholder='Enter Your Email' className='footer-input'/>

          <NavLink className="footer-btn" to ="/">Subscribe</NavLink>
        </form>
      </div>
      <Lastfooter />
    </header>
  )
}

export default Footer