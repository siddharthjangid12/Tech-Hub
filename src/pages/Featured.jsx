import React from 'react'
import "./featured.css"
import { NavLink } from 'react-router-dom'

const Featured = () => {
  return (
    <header className="featured-section">
        <div className="featured-section--">
            <div className="featured--image--">
                <img src="./images/h-2.jpg" alt="" className='feature-image' />
            </div>

            <div className="featured-data-">
              <h3>Technology for Innovators</h3>
               <p>Technology education is the study of technology, in which students learn about the processes and knowledge related to technology.</p> 
               <NavLink className="featured-btn" to="/login">Enroll Now</NavLink>
            </div>
        </div>
    </header>
  )
}

export default Featured