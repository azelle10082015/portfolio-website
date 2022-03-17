import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {BsFillJournalBookmarkFill} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {TiMessages} from 'react-icons/ti'
import {useState} from 'react'

function Nav() {
  const [activeNav, setActiveNav]=useState('#')
  return (
    <nav>
      <a href='#' onClick={()=>setActiveNav('#')} className={activeNav==='#'?'active':""} ><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?'active':""} ><FcAbout/></a>
      <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience'?'active':""} ><BsFillJournalBookmarkFill/></a>
      <a href='#service' onClick={()=>setActiveNav('#service')} className={activeNav==='#service'?'active':""} ><RiServiceLine/></a>
      <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'?'active':""} ><TiMessages/></a>
      <a href=''></a>
      
      
    </nav>
  )
}

export default Nav