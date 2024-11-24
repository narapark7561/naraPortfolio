import React from 'react'
import './Navbar.css'
import nara from '../../assets/Nara.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={nara} alt="nara's logo"/>
        <ul className='nav-menu'>
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
        <div className='nav-connect'>Connect with Me</div>
    </div>
  )
}

export default Navbar