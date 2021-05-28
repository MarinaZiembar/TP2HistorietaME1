import React from 'react';
import ScrollReveal from 'scrollreveal';
import { dialogFinal2 } from '../dialog/dialog';
import final2 from '../images/bk-final-2.png';



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
ScrollReveal().reveal('.dialog-6', { 
    delay: 1000, 
    duration: 1000, 
    origin: 'left' 
});
ScrollReveal().reveal('.dialog-7', { 
    delay: 1000, 
    duration: 1000, 
    origin: 'left' 
});


function Final2(props) {

    const { show, onHide } = props;


    return(
        <>
           {
               show && 
               <div className="final-2">
                   <img src={final2} className="img-final-2" alt="final-2" />
                   <p class="dialog dialog-1"> {dialogFinal2[0]} </p>
                   <p class="dialog dialog-2"> {dialogFinal2[1]} </p>
                   <p class="dialog dialog-3"> {dialogFinal2[2]} </p>
                   <p class="dialog dialog-4"> {dialogFinal2[3]} </p>
                   <p class="dialog dialog-5"> {dialogFinal2[4]} </p>
                   <p class="dialog dialog-6"> {dialogFinal2[5]} </p>
                   <p class="dialog dialog-7"> {dialogFinal2[6]} </p>
                   <p class="dialog reintentar" onClick={onHide} >REINTENTAR</p>
               </div>    
           }
        </>
    )
}


export default Final2;