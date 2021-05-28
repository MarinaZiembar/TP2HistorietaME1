import React from 'react';
import ScrollReveal from 'scrollreveal';
import { dialogFinal1 } from '../dialog/dialog';
import final1 from '../images/bk-final-1.png';


function Final1(props) {

    const { show, onHide } = props;

    ScrollReveal().reveal('.dialog-1', { 
        delay: 400, 
        duration: 600,
        origin: 'left'
    });

    ScrollReveal().reveal('.dialog-2', { 
        delay: 400, 
        duration: 600,
        origin: 'left'
    });
    ScrollReveal().reveal('.dialog-3', { 
        delay: 1000, 
        duration: 1000,
        origin: 'left' 
    });
    ScrollReveal().reveal('.dialog-4', { 
        delay: 1000, 
        duration: 1000, 
        origin: 'left' 
    });
    ScrollReveal().reveal('.dialog-5', { 
        delay: 1000, 
        duration: 1000, 
        origin: 'left' 
    });

    return(
        <>
           {
                show && 
                <div className="final-1">
                    <img src={final1} className="img-final-1" alt="final-1" />
                    <p class="dialog dialog-1"> {dialogFinal1[0]} </p>
                    <p class="dialog dialog-2"> {dialogFinal1[1]} </p>
                    <p class="dialog dialog-3"> {dialogFinal1[2]} </p>
                    <p class="dialog dialog-4"> {dialogFinal1[3]} </p>
                    <p class="dialog dialog-5"> {dialogFinal1[4]} </p>
                    <p class="dialog reintentar" onClick={onHide} > Reintentar </p>
                </div>
           }
        </>
    )
}


export default Final1;