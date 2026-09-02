import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Admissions from './pages/Admissions'
import Communication from './pages/Communication'
import Help from './pages/Help'
import Homework from './pages/Homework'
import DigitalContent from './pages/DigitalContent'

export default function App(){
  return (
    <div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/admissions">Admissions</Link>
        <Link to="/communication">Communication</Link>
        <Link to="/homework">Homework</Link>
        <Link to="/digital">Digital</Link>
        <Link to="/help">Help</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/admissions" element={<Admissions/>} />
        <Route path="/communication" element={<Communication/>} />
        <Route path="/help" element={<Help/>} />
        <Route path="/homework" element={<Homework/>} />
        <Route path="/digital" element={<DigitalContent/>} />
      </Routes>
    </div>
  )
}
