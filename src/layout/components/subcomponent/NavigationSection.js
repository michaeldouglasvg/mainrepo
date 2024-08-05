import React from 'react'
import { FaBlog, FaCode, FaCodeBranch, FaEnvelope, FaHome, FaInfoCircle, FaMoon, FaSun } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { useTheme } from '../../../context/theme/ThemeSection';

const NavigationSection = () => {
  const { toggleDarkMode, darkMode } = useTheme();
  return (
    <div className='SidebarLinks'>
      <div className="top">
        <Link to="/" className="singleNavigation">
            <FaHome size={16} />
            <p>Home</p>
        </Link>
        <Link to="/about" className="singleNavigation">
            <FaInfoCircle size={16} />
            <p>Skills</p>
        </Link>
        <Link to="/services" className="singleNavigation">
            <FaCodeBranch size={16} />
            <p>Services</p>
        </Link>
        <Link to="/projects" className="singleNavigation">
            <FaCode size={16} />
            <p>Projects</p>
        </Link>
        <Link to="/contacts" className="singleNavigation">
            <FaEnvelope size={16} />
            <p>Contacts</p>
        </Link>
        <Link to="/blogs" className="singleNavigation">
            <FaBlog size={16} />
            <p>Blogs</p>
        </Link>
      </div>
      <div className="bottom" onClick={toggleDarkMode}>
        <Link to="#" className="singleNavigation" style={{background: "none", outline: "1px solid #2c2c2c"}}>
          {!darkMode?<FaMoon size={16} />:<FaSun size={16} />}
            
            <p>{!darkMode?"Dark":"Light"}</p>
        </Link>
      </div>
    </div>
  )
}

export default NavigationSection
