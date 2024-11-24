import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_about from '../../assets/nara_lake.jpg'
import icon_javascript from '../../assets/icon_javascript.png';
import icon_typescript from '../../assets/icon_typescript.png';
import icon_react from '../../assets/icon_react.png';
import icon_next from '../../assets/icon_next.png';
import icon_node from '../../assets/icon_node.png';


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
                <div className="about-skills">
                <div className="about-skill">
              <img src={icon_javascript} alt="JavaScript Icon" className="skill-icon" />
              <p>JavaScript</p>
              <hr style={{ width: '100%' }} />
            </div>
            <div className="about-skill">
              <img src={icon_typescript} alt="TypeScript Icon" className="skill-icon" />
              <p>TypeScript</p>
              <hr style={{ width: '100%' }} />
            </div>
            <div className="about-skill">
              <img src={icon_react} alt="React Icon" className="skill-icon" />
              <p>React</p>
              <hr style={{ width: '100%' }} />
            </div>
            <div className="about-skill">
              <img src={icon_next} alt="Next.js Icon" className="skill-icon" />
              <p>Next.js</p>
              <hr style={{ width: '100%' }} />
            </div>
            <div className="about-skill">
              <img src={icon_node} alt="Node.js Icon" className="skill-icon" />
              <p>Node.js</p>
              <hr style={{ width: '100%' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>1.5+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>5+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>4+</h1>
            <p>SKILLED CORE TECHNOLOGIES</p>
        </div>
      </div>
    </div>
  )
}

export default About


{/* <div className="about-skills">
<div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}} /></div>
<div className="about-skill"><p>TypeScript</p><hr style={{width:"80%"}} /></div>
<div className="about-skill"><p>React</p><hr style={{width:"70%"}} /></div>
<div className="about-skill"><p>Next.js</p><hr style={{width:"60%"}} /></div>
<div className="about-skill"><p>Node.js</p><hr style={{width:"50%"}} /></div>
</div>
</div>
</div>
</div> */}