import React, {useState, useEffect} from 'react';
import scene1 from '../images/bk-scene-1.png';
import dagger from '../images/dagger.png';
import pen from '../images/pen.png';



function Scene1(props) {

    const { show, onFinal1, onFinal2 } = props

    return(
        <>
           {
                show && 
                <div className="scene-1">
                    <img src={scene1} className="bk-scene-1" alt="scene-1" />
                    <img src={dagger} className="dagger" onClick={onFinal1} alt="dagger" />
                    <img src={pen} className="pen" onClick={onFinal2} alt="pen" />
                </div>
           }
        </>
    )
}


export default Scene1;