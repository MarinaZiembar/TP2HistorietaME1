import React from 'react';
import final2 from '../images/bk-final-2.png';


function Final2(props) {

    const { show, onHide } = props

    return(
        <>
           {
               show && 
               <div className="final-2">
                   <img src={final2} className="img-final-2" alt="final-2" />
               </div>    
           }
        </>
    )
}


export default Final2;