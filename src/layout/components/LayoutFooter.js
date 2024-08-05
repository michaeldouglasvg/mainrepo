import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

const LayoutFooter = () => {
  return (
    <>
      <div className="footer">
        <div className="copyright">
          <p>&copy;2024gtech.com @mdtech24</p>
        </div>
        <div className="content">
          <ul>
            <li>Policy</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="sociallinks">
          <FaX size={16} className='footericons'/>
          <FaWhatsapp size={16} className='footericons'/>
          <FaGithub size={16} className='footericons'/>
          <FaLinkedin size={16} className='footericons'/>
          <FaFacebook size={16} className='footericons'/>
        </div>
      </div>
    </>
  )
}

export default LayoutFooter
