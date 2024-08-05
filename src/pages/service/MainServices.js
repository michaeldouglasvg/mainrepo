import React, { useState, useEffect } from 'react'
import { FaEnvelope, FaFacebook, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { Services } from '../../constants/DataFlow';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useSweetAlert } from '../../context/alerts/Sweetalert';

const MainServices = () => {
  const [showShare, setShareButtons] = useState(false);
  const { normalALert } = useSweetAlert();

  const messageUser = () => normalALert(
    "info", "Requesting Services", "Site under maintainance but you will be able to request once it is updated. Thank you!!!", true
  )

  useEffect(() => {
    AOS.init();
  })

  return (
    <section className='Services'>
      {/* <div className="heading"><h1 data-aos="zoom-out-up">My Services</h1></div> */}
      <div className="content-section">
      {Services && 
        Services.map((service, index) => {
          return <div className="singlecard" key={index}>
          <div className="image">
            <img src={service.logo} alt=""/>
          </div>
          <div className="content-bottom">
            <div className="heading">
              <h1>{service.type}</h1>
            </div>
            <div className="text">
              <p>{service.content}</p>
            </div>
            <div className='MainBottomSectionsCard'>
              <div className="button">
                <button onClick={() => setShareButtons(service.type)} style={{background: showShare !== service.type?"":"orangered"}}>
                {showShare !== service.type ? "Request Service":"Not Interested"}</button>
              </div>
              {showShare === service.type && <div className="sharebuttons">
                <div className="icon"><FaFacebook className='shareicons' onClick={messageUser}/></div>
                <div className="icon"> <FaWhatsapp className='shareicons' onClick={messageUser}/></div>
                <div className="icon"><FaTelegram className='shareicons' onClick={messageUser}/></div>
                <div className="icon"><FaEnvelope className='shareicons' onClick={messageUser}/></div>
              </div>}
            </div>
          </div>
        </div>
        })}
      </div>
    </section>
  )
}

export default MainServices
