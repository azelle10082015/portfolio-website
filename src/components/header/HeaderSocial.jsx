import React from 'react'
import {SiIndeed} from 'react-icons/si'
import {FaLinkedin} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {FiCodepen} from 'react-icons/fi'


function HeaderSocial() {
  return (
    <div className='header-social'>
        <a href='https://www.linkedin.com' target='_blank' rel="noreferrer"><FaLinkedin/></a>
        <a href='https://www.linkedin.com/feed/' target='_blank' rel="noreferrer"><SiIndeed/></a>
        <a href='https://github.com/azelle10082015' target='_blank' rel="noreferrer"><BsGithub/></a>
        <a href='https://codepen.io/Azelle' target='_blank' rel="noreferrer"><FiCodepen/></a>
    </div>
  )
}

export default HeaderSocial