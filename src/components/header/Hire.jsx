import React from 'react'
import edouardResume from '../../Assets/edouardResume.pdf'

function Hire() {
  return (
    <div className='cta'>
        <a href={edouardResume} className='btn' download='resume' target='_blank' rel="noreferrer">Download Resume</a>
        <a href='#contact' className='btn btn-primary'>Hire Me</a>
    </div>
  )
}

export default Hire