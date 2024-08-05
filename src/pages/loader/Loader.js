import React, {useEffect, useState} from 'react'
import { CirclesWithBar } from 'react-loader-spinner'

const Loader = () => {
    const [initialize, setInitialize] = useState(true);
    const [showready, setShowReady] = useState(false);

    useEffect(() => {
        const textTimer = setTimeout(() => {
           setInitialize(false)
        }, 3000);

        const goTimer = setTimeout(() => {
            setShowReady(true)
        }, 5000);

        return () => {
            clearTimeout(textTimer);
            clearTimeout(goTimer);
        };
    }, []);

  return (
    <div className='InitialScreen' id='maindisplay'>
        <div className="Topsection">
            <p>Location: Nairobi, Kenya</p>
        </div>
        <div className="Midsection">
           <CirclesWithBar
                height="100"
                width="100"
                color="#e4980c"
                outerCircleColor="#07e5f5"
                innerCircleColor="#e4980c"
                barColor="#f507ed"
                ariaLabel="circles-with-bar-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
            {initialize ? <p style={{color: initialize&&"#e4980c"}}>Initalizing...</p> :
            !showready ? <p style={{color: !showready&&"#07e5f5"}}>Getting things ready...</p> : <p style={{color: showready&&"#f507ed"}}>All set succeful!!!</p>}
        </div>
        <div className="Bottomoutline">
            <p style={{color: initialize?"#e4980c":showready?"#07e5f5":"f507ed"}}>Internet: Strong</p>
        </div>
    </div>
  )
}

export default Loader
