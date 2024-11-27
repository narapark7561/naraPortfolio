import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/custom_theme_removed.png'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'


const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const data = await res.json();
  
      if (data.success) {
        alert("Form submitted successfully!");
        event.target.reset(); // Reset Form
      } else {
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    }
  };

    return (
      <div id='contact' className="contact">
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
          <form onSubmit={onSubmit} className="contact-right">
            <label>Your Name</label>
            <input type="text" placeholder='Enter your name' name='name'></input>
            <label>Your Email</label>
            <input type="email" placeholder='Enter your email' name='email'></input>
            <label>Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button type="submit" className="contact-submit">Send</button>
          </form>
        </div>
      </div>
    );
  };
  

export default Contact;