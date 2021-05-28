import React from 'react';
import ScrollReveal from 'scrollreveal';
import { dialogScene1 } from '../dialog/dialog';
import scene1 from '../images/bk-scene-1.png';
import dagger from '../images/dagger.png';
import pen from '../images/pen.png';



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
    origin: 'left', 
});
ScrollReveal().reveal('.dialog-8', { 
    delay: 1000, 
    duration: 1000, 
    origin: 'left', 
});
ScrollReveal().reveal('.dialog-9', { 
    delay: 1000, 
    duration: 1000,
});



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
                    <p class="dialog dialog-2"> {dialogScene1[0]} </p>
                    <p class="dialog dialog-3"> {dialogScene1[1]} </p>
                    <p class="dialog dialog-4"> {dialogScene1[2]} </p>
                    <p class="dialog dialog-5"> {dialogScene1[3]} </p>
                    <p class="dialog dialog-6"> {dialogScene1[4]} </p>
                    <p class="dialog dialog-7"> {dialogScene1[5]} </p>
                    <p class="dialog dialog-8"> {dialogScene1[6]} </p>
                    <p class="dialog dialog-9"> {dialogScene1[7]} </p>
                </div>
           }
        </>
    )
}


export default Scene1;