import React from 'react'
import './Footer.css'
import nara from '../../assets/nara_final_logo.png'
import user_icon from '../../assets/user_icon.svg'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={nara} alt=""/>
          <p>
          I am a passionate Full Stack Developer with hands-on experience, dedicated to creating efficient, user-friendly solutions that bridge technology and people.</p>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2023. Nara Park. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer