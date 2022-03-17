import React from 'react'
import {SiIndeed} from 'react-icons/si'
import {FaLinkedin} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {FiCodepen} from 'react-icons/fi'


function HeaderSocial() {
  return (
    <div className='header-social'>
        <a href='https://www.linkedin.com' target='_blank'><FaLinkedin/></a>
        <a href='https://my.indeed.com' target='_blank'><SiIndeed/></a>
        <a href='https://github.com' target='_blank'><BsGithub/></a>
        <a href='https://codepen.com' target='_blank'><FiCodepen/></a>
    </div>
  )
}

export default HeaderSocial