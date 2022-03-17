import React from 'react'
import Edouard_Biwoule from '../../Assets/Edouard_Biwoule.pdf'

function Hire() {
  return (
    <div className='cta'>
        <a href={Edouard_Biwoule} download className='btn'>Download Resume</a>
        <a href='#contact' className='btn btn-primary'>Hire ME</a>
    </div>
  )
}

export default Hire