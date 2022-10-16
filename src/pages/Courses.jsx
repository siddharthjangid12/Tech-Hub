import React from 'react'
import "./courses.css"
import {NavLink} from "react-router-dom"

const Courses = () => {
  return (
    <header className="courses">
      <div className="courses-list">
        <div className="courses-name-1">
          <img src="./images/development.jpg" alt="" className='courses-image' />
          <h3>Web Development Course</h3>
          <span>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           </span>
           <h4>632 Reviews</h4>
           <NavLink className="courses-btn-1" to ="/login">Enroll Now</NavLink>
        </div>

        <div className="courses-name-2">
          <img src="./images/app -d.jpg" alt="" className='courses-image' />
          <h3>App Development Course</h3>
          <span>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           </span>
           <h4>421 Reviews</h4>
           <NavLink className="courses-btn-2" to ="/login">Enroll Now</NavLink>
        </div>

        <div className="courses-name-1">
          <img src="./images/c.jpg" alt="" className='courses-image' />
          <h3>'C' Development Course</h3>
          <span>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           </span>
           <h4>532 Reviews</h4>
           <NavLink className="courses-btn-1" to ="/login">Enroll Now</NavLink>
        </div>

        <div className="courses-name-2">
          <img src="./images/c++.jpg" alt="" className='courses-image' />
          <h3>C++ Development Course</h3>
          <span>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           </span>
           <h4>332 Reviews</h4>
           <NavLink className="courses-btn-2" to ="/login">Enroll Now</NavLink>
        </div>

        <div className="courses-name-1">
          <img src="./images/design.jpg" alt="" className='courses-image' />
          <h3>Web Design Course</h3>
          <span>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           </span>
           <h4>591 Reviews</h4>
           <NavLink className="courses-btn-1" to ="/login">Enroll Now</NavLink>
        </div>

        <div className="courses-name-2">
          <img src="./images/hacking.jpg" alt="" className='courses-image' />
          <h3>Ethical Hacking Course</h3>
          <span>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           </span>
           <h4>732 Reviews</h4>
           <NavLink className="courses-btn-2" to ="/login">Enroll Now</NavLink>
        </div>

        <div className="courses-name-1">
          <img src="./images/java.jpg" alt="" className='courses-image' />
          <h3>Java Programming Course</h3>
          <span>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           </span>
           <h4>678 Reviews</h4>
           <NavLink className="courses-btn-1" to ="/login">Enroll Now</NavLink>
        </div>

        <div className="courses-name-2">
          <img src="./images/pyton.jpg" alt="" className='courses-image' />
          <h3>Python Programming Course</h3>
          <span>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           </span>
           <h4>732 Reviews</h4>
           <NavLink className="courses-btn-2" to ="/login">Enroll Now</NavLink>
        </div>

        <div className="courses-name-1">
          <img src="./images/security.jpg" alt="" className='courses-image' />
          <h3>Cyber-Security Course</h3>
          <span>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           </span>
           <h4>876 Reviews</h4>
           <NavLink className="courses-btn-1" to ="/login">Enroll Now</NavLink>
        </div>

        <div className="courses-name-2">
          <img src="./images/seo.jpg" alt="" className='courses-image' />
          <h3>S.E.O. Course</h3>
          <span>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           </span>
           <h4>843 Reviews</h4>
           <NavLink className="courses-btn-2" to ="/login">Enroll Now</NavLink>
        </div>

        <div className="courses-name-1">
          <img src="./images/course-p-1.jpg" alt="" className='courses-image' />
          <h3>Javascript Programming Course</h3>
          <span>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           </span>
           <h4>832 Reviews</h4>
           <NavLink className="courses-btn-1" to ="/login">Enroll Now</NavLink>
        </div>

        <div className="courses-name-2">
          <img src="./images/course-p-5.jpg" alt="" className='courses-image' />
          <h3>Full Stack Developer Course</h3>
          <span>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           </span>
           <h4>731 Reviews</h4>
           <NavLink className="courses-btn-2" to ="/login">Enroll Now</NavLink>
        </div>
      </div>
    </header>
  )
}

export default Courses