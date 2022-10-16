import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
   <header className="contact-section">
    <img src="./images/c-1.jpg" alt=""className='contact-banner' />

    <div className="contact-section--">
      <div className="contact-image">
       <img src="./images/c-2.jpg" alt="" className='contact-image' />
      </div>

      <div className="contact-data">
        <h2>Our Address</h2>
        <p>21,B-Appartment,Near of Indian National Park,Jaipur,Rajasthan</p>
        <h6>Telephone No.-09876-54321</h6>
        <span>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
        </span>
      </div>
    </div>
   </header>
  )
}

export default Contact