import React from 'react';
import "./contact.css";
import {AiOutlineMail} from "react-icons/ai";
import {RiMessengerLine} from "react-icons/ri";
import {FaWhatsapp} from "react-icons/fa";
import  { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pyutz7h', 'template_o5wb6bo', form.current, '9BDYny4iW4-9wsep3')
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
          <AiOutlineMail className="contact__option-icon"/>
          <h4>Email</h4>
          <h5>louwelukan066@gmail.com</h5>
          <a href="mailto:louwelukan066@gmail.com" target="_blank">Send a message</a>
        </article>
        <article className="contact__option">
          <RiMessengerLine className="contact__option-icon"/>
          <h4>Messenger</h4>
          <h5>Fraser Alfred</h5>
          <a href="https://m.me/profile.php?id=100008706643561" target="_blank">Send a message</a>
        </article>
        <article className="contact__option">
          <FaWhatsapp className="contact__option-icon"/>
          <h4>WhatsApp</h4>
          <h5>Fraser Alfred</h5>
          <a href="https://api.whatsapp.com/send?phone+212626639819" target="_blank">Send a message</a>
        </article>
        </div>
        {/* End of contact options */}
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder=" Your Email" required/>
          <textarea name="message" row="7" placeholder="Your Message" required/>
          <button className="btn btn-primary" type="submit">Send a message</button>
        </form>
        
      </div>
    </section>
  )
}

export default Contact;
