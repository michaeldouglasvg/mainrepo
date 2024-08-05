import React, { useEffect } from 'react'
import WhatInMind from './components/WhatInMind'
import Treding from './components/Treding'
import Media from './components/Media'
import Experience from './components/Experience'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import News from './components/News'

const MainBlog = () => {
  useEffect(() => {
    AOS.init();
  })
  return (
    <section className='Services'>
      <div className="projects-head">
        <h1 data-aos="zoom-out-up">Blog (Heighlights)</h1>
      </div>
      <div className="blogsandexperience">
       <News />
       <WhatInMind />
       <Treding />
       <Media />
       <Experience />
      </div>
    </section>
  )
}

export default MainBlog
