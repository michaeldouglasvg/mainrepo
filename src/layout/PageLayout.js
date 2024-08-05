import React, { useState } from 'react'
import LayoutFooter from './components/LayoutFooter'
import DisplayUnits from './components/subcomponent/DisplayUnits'
import MiddleSubLinks from './components/subcomponent/MiddleSubLinks'
import NavigationSection from './components/subcomponent/NavigationSection'

const PageLayout = () => {
  const [sampleLinks, setSampleLinks] = useState(false);

  return (
    <div className='Layout-Container' id="maindisplay">
      <div className="body-content">
        <NavigationSection sampleLinks={sampleLinks} setSampleLinks={setSampleLinks}/>
        <MiddleSubLinks sampleLinks={sampleLinks} setSampleLinks={setSampleLinks}/>
        <DisplayUnits />
      </div>
      <LayoutFooter />
    </div>
  )
}

export default PageLayout
