import React from 'react';
import "./portfolio.css";
import  data from "./data";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({id,image,github,title}) => {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title}/>
              </div>
              <div className="portfolio__item-cta">
              <h3>{title}</h3>
              <a href={github} className="btn btn-primary " target="_blank">Github</a>
              </div>
            </article>
          )
        })}
      </div>
      
      
      </section>
  )
}

export default Portfolio;