import React, { useEffect, useState } from 'react'
import { images } from "../../../constants/AssetsFile"
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useSweetAlert } from '../../../context/alerts/Sweetalert';

const Content = () => {
  const {toastAlert} = useSweetAlert();
  const [openProfile, setOpenProfile] = useState(false);

  const openExperienceTab = () =>  setOpenProfile(!openProfile);

  const hireMeFireButton = () => {
    toastAlert("top-end", "success", "Am available to work use contact form or reach out to me through email.")
  }

  useEffect(() => {
    AOS.init();
    const options = {
      strings: ['Web Development.', 'UI/UX Designer.', 'Data Science.', 'App Develoment.', 'Machine Learning.'],
      typeSpeed: 50,
      loop: true,
      cursorChar: "|",
      cursorBlinking: true,
      startDelay: 1000,
      backDelay: 1000,
    };
    const typedElement = document.querySelector('.element');
    const typed = new Typed(typedElement, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <section className='HomeStyles'>
        <article className="flexbox HomeDescription">
          <div className="heading" data-aos="zoom-out-up"><h1>Hi,</h1> <h2>I'm Michael Douglas,</h2></div>
          <div className="skill-sets" data-aos="zoom-out-up"><p>Passionate:</p> &nbsp; <span className='element'></span></div>
          <div className="description" data-aos="zoom-out-up"><p>Passionate about crafting innovative solutions through web and app development, I delve into the realms of Machine Learning and Data Science to drive meaningful insights and create impactful experiences. With a fervent dedication to technology, I strive to push boundaries and make a difference.</p></div>
          <div className="buttons">
              <button onClick={hireMeFireButton}>Hire&nbsp;me</button>
              <button onClick={openExperienceTab} style={{background: openProfile && "orange"}}>
                {
                  openProfile ? "Close Experience" : "Experience and More"
                }
              </button>
          </div>
        </article>
        <article className="flexbox HomeImageContainer">
          <div className="image"><img src={images.contact} alt="" data-aos="zoom-out-up"/></div>
        </article>
        
      </section>
    </>
  )
}
export default Content
