import React from 'react'
import './header.css'
import Cta from './cta'
import Image from '../../assets/profile.png'
import SocialHeader from './SocialHeader'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Abdul Aleem</h1>
        <h5 className="text-light">Software Developer</h5>
        <Cta></Cta>
        <SocialHeader></SocialHeader> 
        <div className="me">
          <img src={Image} alt="Profile Photo" />
        </div>
        
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header