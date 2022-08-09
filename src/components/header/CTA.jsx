import React from 'react';
import CV from "../../assetts/cv.pdf";
const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} Download className="btn" target="_blank"> Download CV</a>
        <a href="#contact" className="btn btn-primary">Let's talk</a>
    </div>
  )
}

export default CTA;