import React from 'react'
import { FaCog, FaMoon } from 'react-icons/fa'

const LayoutHeader = () => {
  return (
    <>
        <div className="header">
            <div className="cutomize">
                <div className="logo">
                    <h1>MD</h1>
                </div>
                <div className="settings">
                    <FaMoon size={15} color='white' className='headerIcon'/>
                    <FaCog size={15} color='white' className='headerIcon'/>
                </div>
            </div>
      </div>
    </>
  )
}

export default LayoutHeader
