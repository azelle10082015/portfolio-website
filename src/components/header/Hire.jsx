import React from 'react'
import Resume111 from '../../Assets/Resume111.pdf'

function Hire() {
  return (
    <div className='cta'>
        <a href={Resume111} className='btn' download>Download Resume</a>
        <a href='#contact' className='btn btn-primary'>Hire ME</a>
    </div>
  )
}

export default Hire