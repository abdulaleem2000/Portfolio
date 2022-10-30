import React from 'react'
import './about.css'
import Me from '../../assets/image.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5> Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className='about__me'>
          <div className="about__me-image">
            <img src={Me} alt="" />  
          </div>

        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Fresh Graduate</small>

            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed</small>

            </article>

           
          </div>
          <div className='about__content'>
          <p>
              Proactive Computer Science major from Fast University. 
              Aiming to leverage proven communication, leadership, management,
              and problem-solving skills with good knowledge of Android
              development(java), flutter, react. Frequently praised as focused by my 
              peers.
          </p>
          </div>
         
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About