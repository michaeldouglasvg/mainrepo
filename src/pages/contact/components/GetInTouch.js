import React, { useEffect } from 'react'
import { FaEnvelope, FaGlobe, FaMapMarker, FaPhone } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const GetInTouch = () => {
    useEffect(() => {
        AOS.init();
    })
  return (
    <section>
      <div className="top-message" data-aos="zoom-out-up">
        <h1>Direct Links</h1>
        <p>Explore my portfolio and connect with ease. Find my location for in-person meetups, visit my website for more details, email me directly, or give me a call. I look forward to hearing from you!</p>
     </div>
     <div className="socialmedia-container">
        <div className="links" data-aos="zoom-out">
            <div className="iconimagetag">
             <FaEnvelope className='contacticon'/>
            </div>
            <div className="infomation">
                <p>Email Me</p>
                <p>gtechmb27.infinity@gmail.com</p>
            </div>
            <div className="type">
                <p>Open</p>
            </div>
        </div>
        <div className="links" data-aos="zoom-out">
            <div className="iconimagetag">
             <FaPhone className='contacticon'/>
            </div>
            <div className="infomation">
                <p>Call</p>
                <p>+2547121 76534</p>
            </div>
            <div className="type">
                <p>Open</p>
            </div>
        </div>
        <div className="links" data-aos="zoom-out">
            <div className="iconimagetag">
             <FaMapMarker className='contacticon'/>
            </div>
            <div className="infomation">
                <p>Location</p>
                <p>Nairobi, Kenya.</p>
            </div>
            <div className="type">
              <p>Open</p>
            </div>
        </div>
        <div className="links" data-aos="zoom-out">
            <div className="iconimagetag">
             <FaGlobe className='contacticon'/>
            </div>
            <div className="infomation">
                <p>Website</p>
                <p>https://gtechinfinity.com</p>
            </div>
            <div className="type">
                <p>Open</p>
            </div>
        </div>
     </div>

    <div className="top-message" data-aos="zoom-out-up">
        <h1>Send Message</h1>
    </div>
    <div className="socialmedia-container">
        <form action="">
            <div class="formgroup">
                <span>Full Name</span>
                <input type="text" name="" id="" placeholder='Michel Douglas'/>
            </div>
            <div class="formgroup">
                <span>Email Address</span>
                <input type="email" name="" id="" placeholder='gtechmb27.infinity@gmail.com'/>
            </div>
            <div class="formgroup">
                <span>Subject</span>
                <input type="text" name="" id="" placeholder='Want to colabotate with you...'/>
            </div>
            <div class="formgroup">
                <span>Message</span>
                <textarea type="text" name="" id="" placeholder='Want to colabotate with you...Must Be Less than 250words'/>
            </div>
            <div class="formgroup">
                <input type="submit" value="Send the Message"/>
            </div>
        </form>
    </div>
    </section>
  )
}

export default GetInTouch
