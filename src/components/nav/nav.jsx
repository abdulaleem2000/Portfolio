import React from 'react'
import './nav.css'
import {AiOutlineHome,AiOutlineUser,AiOutlineContacts} from 'react-icons/ai'
import {BiBook} from "react-icons/bi"
import {RiCustomerServiceLine} from "react-icons/ri"
import { useState } from 'react'
const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href="" className={activeNav === '#' ? 'active' : ' '}><AiOutlineHome></AiOutlineHome></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ' '}><AiOutlineUser></AiOutlineUser></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ' '}><BiBook></BiBook></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ' '}  ><AiOutlineContacts></AiOutlineContacts></a>
    </nav>
  )
}

export default Nav