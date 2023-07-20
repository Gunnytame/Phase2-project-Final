import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    
    <header>
    <NavLink to ="/">Home</NavLink>
    <NavLink to ="/scoutingreport">ScoutingReport</NavLink>
    </header>

  
    )
}

export default Header