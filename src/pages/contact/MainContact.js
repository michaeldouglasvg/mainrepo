import React, { useEffect } from 'react'
import GetInTouch from './components/GetInTouch'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const MainContact = () => {
  useEffect(() => {
    AOS.init();
})
  return (
    <section className='ContactPage'>
    <div className="projects-head">
      <h1 data-aos="zoom-out-up">Contacts (Let's Talk)</h1>
      <div className="summary">
          <div className="cardSamamry"  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
              <h2>Full Stack</h2>
          </div>
          <div className="cardSamamry"  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
              <h2>A.I/M.L</h2>
          </div>
          <div className="cardSamamry"  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
              <h2>Apps</h2>
          </div>
          <div className="cardSamamry"  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
              <h2>D.L/D.S</h2>
          </div>
      </div>
    </div>
    <div className="ContactDisplay">
      <GetInTouch />
    </div>
  </section>
  )
}

export default MainContact
