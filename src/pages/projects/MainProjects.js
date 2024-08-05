import React, { useEffect } from 'react'
import LiveProjects from './components/LiveProjects'
import { images } from '../../constants/AssetsFile'
import { ProjectData } from '../../constants/DataFlow'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const MainProjects = () => {
  const app = ProjectData.filter(project => project.category === "App");
  const ml = ProjectData.filter(project => project.category === "ML");
  const website = ProjectData.filter(project => project.category === "Website");
  const ds = ProjectData.filter(project => project.category === "DS");

  useEffect(() => {
    AOS.init();
  })

  return (
    <section className='Projects'>
      <div className="projects-head">
        <h1 data-aos="zoom-out-up">Projects({ProjectData&&ProjectData.length})</h1>
        <div className="summary">
            <div className="cardSamamry" data-aos="flip-up">
                <p className='count'>({app && app.length})</p>
                <h2>Apps</h2>
            </div>
            <div className="cardSamamry" data-aos="flip-up">
                <p className='count'>({website && website.length})</p>
                <h2>Web</h2>
            </div>
            <div className="cardSamamry" data-aos="flip-up">
                <p className='count'>({ds && ds.length})</p>
                <h2>DS</h2>
            </div>
            <div className="cardSamamry" data-aos="flip-up">
                <p className='count'>({ml && ml.length})</p>
                <h2>ML</h2>
            </div>
        </div>
      </div>
      <div className="content-section">
        <div className="displayavatar">
            <img src={images.cloudeservices} alt=""/>
        </div>
        <div class="displayprojects"><LiveProjects /></div>
      </div>
    </section>
  )
}

export default MainProjects
