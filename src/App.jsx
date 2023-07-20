import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header'
import ScoutingReport from './ScoutingReport'
import TeamPage from './TeamPage'

export default function App() {
  return (
    <div className="APP">

    <Router>
       <Header />
       <Routes>
       <Route  path="/" element={<Home />} />
       <Route  path="/scoutingreport" element={<ScoutingReport />} />
       <Route  path="/TeamPage/:id" element={<TeamPage />} />

       
       </Routes>
    </Router>
    
    
    </div>
  )
}


