import React from 'react'
import "./header.css"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <header className="header">
      <h2>Tech <span>Hub</span></h2>

      <Navbar />
    </header>
  )
}

export default Header