import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const MainFooter = () => {
  return (
    <div className='Footermain' style={{background: "#3586ff"}}>
      <div className="images" style={{background: "#3586ff"}}>
        <div className="wave" id="wave-1"></div>
        <div className="wave" id="wave-2"></div>
        <div className="wave" id="wave-3"></div>
        <div className="wave" id="wave-4"></div>
      </div>
      <div className="footer-content" style={{background: "#3586ff"}}>
        <div className="icons-section" style={{background: "#3586ff"}}>
            <FaFacebook className='Footericons'/>
            <FaTwitter className='Footericons'/>
            <FaGithub className='Footericons'/>
            <FaInstagram className='Footericons'/>
            <FaWhatsapp className='Footericons'/>
            <FaTelegram className='Footericons'/>
        </div>
        <div className="links" style={{background: "#3586ff"}}>
            <p>Home</p>
            <p>Services</p>
            <p>Projects</p>
            <p>Contacts</p>
            <p>Blocks</p>
        </div>
        <div className="copyright" style={{background: "#3586ff"}}>
            <p>Copyright&copy;2023Gtechmb.com || All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default MainFooter
