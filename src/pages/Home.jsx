import React from 'react'
import Featured from './Featured'
import "./home.css"
import { NavLink } from 'react-router-dom'
import About from "./About"
import Team from "./Team"
import Contact from "./Contact"


const Home = () => {
  return (
    <header className="home-section">
      <div className="home-section--">
        <div className="home-data">
          <h3>A great place to learn</h3>
          <p>the academic and vocational preparation of students for jobs involving applied science and modern technology.</p>
        
          <NavLink className="home-join-btn" to="/login">Enroll Now</NavLink>
  
        </div>

        <div className="home-image">
            <img src="./images/h-1.jpg" alt="" className='home-image' />
          </div>
      </div>

     <Featured />
     <About />
     <Team />
     <Contact />
    </header>
  )
}

export default Home