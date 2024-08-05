import React, { useState } from 'react'
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import DisableRightClick from '../../context/events/BlockEvents';
import { FaExpand } from 'react-icons/fa';

const ProfileInformation = ({ colapsAndExpandExp, expandExp }) => {
  const [activateScreen, setActivateScreen] = useState("Experience");

  return (
    <DisableRightClick>
        <div className='flexbox HomeMoreDisplay'>
            <div className="ContentSection">
                <div className="topsection">
                    <div className='buttonexp'>
                        <button className="btns" onClick={() => setActivateScreen("Experience")}>
                            <span>Experience</span>
                        </button>
                        <button className="btns" onClick={() => setActivateScreen("Resume")}>
                            <span>Resume/CV</span>
                        </button>
                        <button className="btns" onClick={() => setActivateScreen("Certificates")}>
                            <span>Certificates</span>
                        </button>
                    </div>
                    <FaExpand size={18} color="orange" onClick={colapsAndExpandExp}/>
                    
                </div>

                <div className="midcontent">
                    {activateScreen === "Resume" && <div className="resumecontent">
                        <p>Check your internet connection and try again...</p>
                    </div>}
                {activateScreen === "Experience" && <div className="experiencecontent">
                        <Experience />
                    </div>}
                    {activateScreen === "Certificates" && <div className="certifications">
                        <Certifications />
                    </div>}
                </div>
                <div className="footersection">
                    <p>&copy;2024mdtech.com</p>
                    <p>Mail: gtechmb27.infinity@gmail.com</p>
                </div>
            </div>
        </div>
    </DisableRightClick>
  )
}

export default ProfileInformation
