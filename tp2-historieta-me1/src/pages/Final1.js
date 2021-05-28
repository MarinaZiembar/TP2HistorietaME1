import React, {useState, useEffect} from 'react';
import final1 from '../images/bk-final-1.png';


function Final1(props) {

    const { show, onHide } = props

    return(
        <>
           {
                show && 
                <div className="final-1">
                    <img src={final1} className="img-final-1" alt="final-1" />
                </div>
           }
        </>
    )
}


export default Final1;