import React, { useState } from 'react'
import './Navbar.css'
import nara from '../../assets/nara_final_logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <img src={nara} alt="nara's logo" />
      <ul className="nav-menu">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          <AnchorLink className='anchor-link' href='#home'>
            <p>Home</p>
          </AnchorLink>
        </li>
        <li
          onClick={() => setMenu("about")}
          className={menu === "about" ? "active" : ""}
        >
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p>About Me</p>
          </AnchorLink>
        </li>
        <li
          onClick={() => setMenu("projects")}
          className={menu === "projects" ? "active" : ""}
        >
          <AnchorLink className='anchor-link' offset={50} href='#work'>
            <p>Projects</p>
          </AnchorLink>
        </li>
        <li
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p>Contact</p>
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">Connect with Me</div>
    </div>
  )
};  

export default Navbar