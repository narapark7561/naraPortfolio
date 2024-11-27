import React from 'react'
import './Hero.css'
import nara_profile from '../../assets/nara_cropped.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={nara_profile} alt="nara's profile image"/>
      <h1><span>I'm Nara Park,</span> Full stack developer based in Canada.</h1>
      <p>
        I am a passionate Full stack developer with hands-on experience.<br />
        I focus on creating efficient, user-friendly solutions to bridge technology and people.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
      </div>
  )
}

export default Hero