import React from 'react'
import "./about.css"
import { NavLink } from "react-router-dom"

const About = () => {
  return (
   <header className="about-section">
      <img src="./images/a-3.jpg" alt="" className='about-banner'/>


      <h4>Our Best Courses</h4>
    <div className="about-section--">
      <div className="about-data-section">
        <article className='about-data-1-'>
          <img src="./images/web.png" alt="" className='about-icon'/>
           <h5>Web Development Course</h5>
           <span>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           </span>
           <div>
           <NavLink className ="about-btn" to="/login">Join Now</NavLink>
           </div>
        </article>

        <article className='about-data-2-'>
        <img src="./images/app.png" alt="" className='about-icon'/>
           <h5>App Development Course</h5>
           <span>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           </span>
           <div>
           <NavLink className ="about-btn" to="/login">Join Now</NavLink>
           </div>
        </article>

        <article className='about-data-3-'>
        <img src="./images/ux.png" alt="" className='about-icon'/>
           <h5>Web Designing Course</h5>
           <span>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           </span>
           <div>
           <NavLink className ="about-btn" to="/login">Join Now</NavLink>
           </div>
        </article>
      </div>
    </div>
   </header>
  )
}

export default About