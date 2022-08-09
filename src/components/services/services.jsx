import React from 'react'
import "./services.css";
import {BiCheck} from "react-icons/bi";
const Service = () => {
  return (
    <section id="services">
    <h5>What I Offer</h5>
    <h2>Services</h2>
    <div className="container service__container">
    <article className="service">
        <div className="service__head">
          <h3>UI/UX Design</h3>
        </div>
        <ul className="service__list">
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Research</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Brainstorming</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Implementation</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Reporting</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Topography</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Colours </p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Icons</p>
          </li>

          
        </ul>
        
      </article>
      {/* END OF UI/UX */}
      <article className="service">
        <div className=" service__head">
          <h3>Web Development</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Websites</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Web Apps</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Frontend Development</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Frontend Development</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Integration</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Help desk</p>
          </li>
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Continuous support and evolution</p>
          </li>
          
        </ul>
        
      </article>
      {/* END OF WEB DEV */}
      
      {/* END OF CONTENT CREATION */}
    </div>
    </section>
  )
}

export default Service;
