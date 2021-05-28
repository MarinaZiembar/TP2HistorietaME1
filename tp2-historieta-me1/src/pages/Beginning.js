import React from 'react';
import door from '../images/door.png';
import ScrollReveal from 'scrollreveal';


ScrollReveal().reveal('.dialog-1', { 
    delay: 600, 
    duration: 500 
});


function Beginning(props) {

    const { show, onHide } = props;

    return(
        <>
           {
               show && 
               <div className="beginning ">
                   <p className="dialog-1">Hace tiempo ya que las cosas no son como antes...</p>
                   <img src={door} onClick={onHide} alt="door" />
               </div>
           }
        </>
    )
}


export default Beginning;