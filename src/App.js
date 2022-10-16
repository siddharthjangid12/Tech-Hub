import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Courses from "./pages/Courses"
import Team from "./pages/Team"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Login from './pages/Login'


const App = () => {
  return (
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/courses' element={<Courses />} />
    <Route path='/team' element={<Team />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/login' element={<Login />} />
   </Routes>
   <Footer />
   </BrowserRouter>
  )
}

export default App