import React from 'react';
import "./footer.css";
import {FaFacebookF} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";
import {BsTwitter} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Fraser</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href="https://www.facebook.com/profile.php?id=100008706643561" target="_blank"><FaFacebookF/></a>
        <a href="https://www.instagram.com/louwelukan/" target="_blank"><FiInstagram/></a>
        <a href="https://twitter.com/FraserAlfred10" target="_blank"><BsTwitter/></a>
        <a href="https://www.linkedin.com/in/fraser-alfred-923464202/" target="_blank"><BsLinkedin/></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy;Fraser Alfred.All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;