import React from 'react';
import { dialogFinal1 } from '../dialog/dialog';
import final1 from '../images/bk-final-1.png';




function Final1(props) {

    const { onHide } = props;

    return(
        <div className="final-1">
            <img src={final1} className="img-final-1" alt="final-1" />
            <p class="dialog dialog-10"> {dialogFinal1[0]} </p>
            <p class="dialog dialog-11"> {dialogFinal1[1]} </p>
            <p class="dialog dialog-12"> {dialogFinal1[2]} </p>
            <p class="dialog dialog-13"> {dialogFinal1[3]} </p>
            <p class="dialog dialog-14"> {dialogFinal1[4]} </p>
            <p class="dialog reintentar" onClick={onHide} > Reintentar </p>
        </div>
    )
}


export default Final1;