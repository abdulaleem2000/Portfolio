import React from 'react'
import './footer.css'
import {FaFacebookF,FaTwitter,FaInstagram} from 'react-icons/fa'

const footer = () => {
  return (
    <footer>
      <div className='footer__logo'>Abdul Aleem</div>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/abdulaleem.zafar"><FaFacebookF></FaFacebookF></a>
        <a href="https://twitter.com/AbdulAl18373792"><FaTwitter></FaTwitter></a>
        <a href="https://www.instagram.com/abdulaleem7332/"><FaInstagram></FaInstagram></a>
      </div>
      
      <div className="footer__copyright">
        <small>&copy; Abdul Aleem. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer