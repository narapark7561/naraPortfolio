import React from 'react'
import './Hero.css'
import nara_profile from '../../assets/nara_cropped.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={nara_profile} alt="nara's profile image"/>
      <h1>I'm Nara Park, Full stack developer based in Canada.</h1>
      <p>
        I am a passionate Full stack developer with hands-on experience in building full-stack applications and working on real-world projects.<br />
        I focus on creating efficient, user-friendly solutions to bridge technology and people.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
      </div>
  )
}

export default Hero