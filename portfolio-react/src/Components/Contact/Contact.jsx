import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/custom_theme_removed.png'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'




const Contact = () => {
    return (
      <div className="contact">
        <div className="contact-title">
          <h1>Get in touch</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Let's connect</h1>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt=""/><p>narapark7561@gmail.com</p>
                </div>
                <div className="contact-detail">
                <img src={location_icon} alt=""/><p>Calgary, Canada</p>
                </div>
            </div>
          </div>
          <form className="contact-right">
            <label>Your Name</label>
            <input type="text" placeholder='Enter your name' name='name'></input>
            <label>Your Email</label>
            <input type="email" placeholder='Enter your email' name='email'></input>
            <label>Write your message here</label>
            <input type="email" placeholder='Enter your email' name='email'></input>
          </form>
        </div>
      </div>
    );
  };
  

export default Contact