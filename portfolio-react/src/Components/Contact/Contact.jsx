import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/custom_theme_removed.png'


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
                <div className="contact-detail"></div>
                <div className="contact-detail"></div>
                <div className="contact-detail"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default Contact