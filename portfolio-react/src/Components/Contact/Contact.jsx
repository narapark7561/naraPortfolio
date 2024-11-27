import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/custom_theme_removed.png'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'




const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
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
          <form className="contact-right">
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
  

export default Contact