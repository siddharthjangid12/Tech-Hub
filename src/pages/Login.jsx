import React from 'react'
import "./login.css"
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
     <header className="login-section">
      <img src="./images/a-1.jpg" alt="" className='login-image' />
      <h3>Fill Your details</h3>
       <form action="">
        <input type="email" name="" id="" placeholder='Enter Your E-mail' className='login-input' />
        <input type="password" name="" id="" placeholder='Enter Your Password' className='login-input' />
       </form>
       <NavLink className="login-btn" to="/">Submit Now</NavLink>
     </header>
  )
}

export default Login