import React from 'react';
import { dialogFinal2 } from '../dialog/dialog';
import final2 from '../images/bk-final-2.png';


 


function Final2(props) {

    const { onHide } = props;

    return( 
        <div className="final-2">
            <img src={final2} className="img-final-2" alt="final-2" />
            <p class="dialog dialog-15"> {dialogFinal2[0]} </p>
            <p class="dialog dialog-16"> {dialogFinal2[1]} </p>
            <p class="dialog dialog-17"> {dialogFinal2[2]} </p>
            <p class="dialog dialog-18"> {dialogFinal2[3]} </p>
            <p class="dialog dialog-19"> {dialogFinal2[4]} </p>
            <p class="dialog dialog-20"> {dialogFinal2[5]} </p>
            <p class="dialog dialog-21"> {dialogFinal2[6]} </p>
            <p class="dialog reintentar" onClick={onHide} >REINTENTAR</p>
        </div> 
    )
}


export default Final2;