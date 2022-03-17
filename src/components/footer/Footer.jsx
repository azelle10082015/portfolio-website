import React from 'react'
import './footer.css'
import {AiOutlineLinkedin} from "react-icons/ai"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineFacebook} from 'react-icons/ai'

function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>Edouard</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#portfolio">Portfolio</a></li>        
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com" target='_blank'><AiOutlineFacebook/></a>
        <a href="https://twitter.com" target='_blank'><AiOutlineTwitter/></a>
        <a href="https://instagram.com" target='_blank'><AiOutlineInstagram/></a>
        <a href="https://linkedin.com" target='_blank'><AiOutlineLinkedin/></a>
      </div>
      <div className="footer__copyright">
        <small>Irving,USA&copy;2022. All rights reserved:by Azelle</small>
      </div>
      
    </footer>
  )
}

export default Footer