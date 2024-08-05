import React, { useState } from 'react'
import { FaArrowLeft, FaChevronRight, FaEllipsisV, FaSearch } from 'react-icons/fa'

const MiddleSubLinks = ({sampleLinks, setSampleLinks }) => {
  const [search, setSearch] = useState(false);

  return (
    <div className='QuickLinkSection' style={{maxWidth: sampleLinks ? "300px": "0px",
     borderRight: sampleLinks && "", minWidth: sampleLinks?"290px":"0px"}}>
      {sampleLinks && <>
        <div className="topsection">
        <div className="search" style={{width: search && "240px"}}>
            {search ?
               <> 
                  <FaArrowLeft size={16} onClick={()=>setSearch(false)}/>
                  <input type="search" name="search" id="search" placeholder='Search...eg:- Experience' />
               </>
            :
               <FaSearch size={16} onClick={()=>setSearch(true)}/>
            }
        </div>
        <div className="customize">
            <FaEllipsisV size={14} />
        </div>
      </div>
      <div className="listings">
        
      </div>
      </>}
      <div className="buttonTabs" onClick={()=> setSampleLinks(!sampleLinks)}>
        <FaChevronRight size={16} style={{
          transform: sampleLinks && "rotate(180deg)"
        }}/> 
      </div>
    </div>
  )
}

export default MiddleSubLinks
