import React from 'react'
import {BsLinkedin,BsTwitter,BsGithub} from 'react-icons/bs'
const SocialHeader = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/abdul-aleem-2a8a7617a/" target="_blank"><BsLinkedin></BsLinkedin></a>
        <a href="https://github.com/abdulaleem2000" target="_blank"><BsGithub></BsGithub></a>
        <a href="https://twitter.com/AbdulAl18373792" target="_blank"><BsTwitter></BsTwitter></a>

    </div>
  )
}

export default SocialHeader