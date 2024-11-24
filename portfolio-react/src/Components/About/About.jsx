import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_about from '../../assets/nara_lake.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt=""/>
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_about} alt=""/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I’m Nara Park, a full-stack developer and life-long learner dedicated to building intuitive and efficient applications that enhance user experiences.</p>
                    <p>With hands-on experience in full-stack development, I strive to combine creativity and functionality while continuously improving my skills in the fast paced tech industry.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About