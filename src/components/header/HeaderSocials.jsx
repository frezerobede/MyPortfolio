import React from 'react'
import {AiFillLinkedin} from "react-icons/ai";
import {BsGithub} from "react-icons/bs";
import {FiDribbble} from "react-icons/fi";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="http://linkedin.com"><AiFillLinkedin/></a>
        <a href="https://github.com"><BsGithub/></a>
        <a href="https://dribble.com"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials;