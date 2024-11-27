import React, { useState } from 'react'
import './Navbar.css'
import nara from '../../assets/nara_final_logo.png'

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  return (
    <div className='navbar'>
      <img src={nara} alt="nara's logo" />
      <ul className='nav-menu'>
  <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
    <p>Home</p>
  </li>
  <li onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>
    <p>About Me</p>
  </li>
  <li onClick={() => setMenu("projects")} className={menu === "projects" ? "active" : ""}>
    <p>Projects</p>
  </li>
  <li onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>
    <p>Contact</p>
  </li>
</ul>

      <div className='nav-connect'>Connect with Me</div>
    </div>
  )
};  

export default Navbar