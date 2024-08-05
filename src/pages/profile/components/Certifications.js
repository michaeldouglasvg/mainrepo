import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { FaDownload, FaHeart, FaShareAlt } from 'react-icons/fa';
import { Certifcates } from '../../../constants/DataFlow';

const Certifications = () => {
  const [certicateBtns, setCertificateBtn] = useState("");
  const [download, setDownload] = useState(false);

  console.log(certicateBtns);

  const activateName = (type) => {
    if(certicateBtns === "download") {
      setDownload(false); //under development
    }
    setCertificateBtn(type);
  }

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="certicateMain">
      <div className="leftdisplay">
      {
        Certifcates && Certifcates.map((item, idx) => {
          return <div className="singlecer" key={idx}>
          <div className="image">
            <img src={item.certImage} alt="" width={200} data-aos="zoom-out-up"/>
          </div>
          <div className="provider">
            <p className='certdata'>From: {item.certFrom}</p>
            <p className='certdata'>Issued: {item.certDate}</p>
            <p className='certname'>{item.certName}</p>
          </div>
          <div className="footer">
            <div className="like"><FaHeart className='footericon' 
              onClick={() => activateName("like")}
            /></div>
            <div className="like"><FaShareAlt className='footericon' 
              onClick={() => activateName("share")}
            /></div>
            <div className="like">
            <FaDownload className='footericon' 
              onClick={() => activateName("download")}
            />
            {download && <div className="downloadOptions">
              <p>Download&nbsp;Current</p>
              <p>Download&nbsp;Multiple</p>
            </div>}
            </div>
          </div>
        </div>
        })
      }
      </div>
    </div>
  )
}

export default Certifications
