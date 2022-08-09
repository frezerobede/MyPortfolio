import React from 'react';
import "./about.css";
import {FaAward} from "react-icons/fa";
import {BsPersonFill} from "react-icons/bs";
import {RiProjector2Line} from "react-icons/ri";
import ME from "../../assetts/me.png";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        
        
        <div className='about__me'>
    
         
         <div className='about__me-image'>
           <img src={ME} alt="About Me"></img>
         </div>
        </div>
        <div className='about__content'>

            <div className='about__cards'>
              <article className='about__card'>
                  <FaAward className='about__icon'/>
                  <h5>Experience</h5>
                  <small>1+ year working</small>
              </article>
              <article className='about__card'>
                  <BsPersonFill className='about__icon'/>
                  <h5>Clients</h5>
                  <small>10+</small>
              </article>
              <article className='about__card'>
                  <RiProjector2Line className='about__icon'/>
                  <h5>Projects</h5>
                  <small>20+</small>
              </article>
            </div>


            <p>I'm a self taught Fullstack Developer who is hungry to learn and improve every single day . </p>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
          
          </div>
      </div>
    </section>
  )
}

export default About;