import React, { useEffect, useState } from 'react'
import { FaCloudflare, FaSearch } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
// import { useFetch } from '../../../context/apis/FetchResources';

const Treding = () => {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const token = '';
  // console.log({data})
  
  // const {customFetch} = useFetch();
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     setError(null);

  //     try {
  //       const response1 = await customFetch('https://newsapi');
  //       setData(response1);

  //       const response2 = await customFetch('', {}, token);
  //       setData(response2);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [token]);


  useEffect(() => {
    AOS.init();
  })
  return (
    <div className='grid' data-aos="zoom-in">
     <div className="heading-blog">
        <h3>Trending</h3>
        <div className="search">
            <FaSearch className='searchicon'/>
            <input type="search" name="search" placeholder='Eg: Company, technologies...' id="" onChange={() => setData()}/>
        </div>
     </div>
     <div className="endpoint-services">
     {data && data.length === 0 ?<div className="alert-section">
      <div className="alert-content">
        <FaCloudflare className='errorIcon'/>
        <p>Content Unavailable for now, site under maintainance!!!</p>
      </div>
     </div>: <p>Not Found!!!</p>}
     </div>
    </div>
  )
}

export default Treding
