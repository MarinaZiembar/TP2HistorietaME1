import React, {useState, useEffect} from 'react';
import firstScene from '../images/1.jpg';
import decisionScene from '../images/decision.png';
import firstFinal from '../images/final-uno.jpg';
import secondFinal1 from '../images/final-2.jpg';
import secondFinal2 from '../images/final-2-2.jpg';
import thirdFinal from '../images/final-tres.jpg';



function Main() {

    const [sign, setSign] = useState(false);
    const [decline, setDecline] = useState(false);
    const [fight, setFight] = useState(false);
    // const [modal, setModal] = useState(false);

    useEffect(() => {
        
        var mainContainer = document.querySelector('.main');
        var hideElements = document.querySelector('.to-hide');
        var options = document.querySelector('.options');
        var showFinal1 = document.querySelector('.first-final');
        var showFinal2Parte1 = document.querySelector('.second-final-1');
        var showFinal2Parte2 = document.querySelector('.second-final-2');
        var showFinal3 = document.querySelector('.third-final');

        if(sign){
            mainContainer.classList.add("block-y");
            mainContainer.classList.add("direction-final-3");
            hideElements.classList.add("d-none");
            options.classList.add("d-none");
            showFinal1.classList.remove("d-none");
            showFinal1.classList.add("d-block");
        }else if(decline){
            mainContainer.classList.add("block-y");
            mainContainer.classList.add("direction-final-1");
            hideElements.classList.add("d-none");
            options.classList.add("d-none");
            showFinal3.classList.remove("d-none");
            showFinal3.classList.add("d-block");
        }else if(fight){
            mainContainer.classList.add("block-x");
            options.classList.add("d-none");
            showFinal2Parte1.classList.remove("d-none");
            showFinal2Parte1.classList.add("d-block");
            showFinal2Parte2.classList.remove("d-none");
            showFinal2Parte2.classList.add("d-block");
        } 

    }, [sign, decline, fight])

    return(
        <div className="main">
            <div className="to-hide">
                <img src={firstScene} className="first-scene" alt="1"/>
            </div>
            <div>
                <div className="decision-scene">
                    <img src={decisionScene} className="decision-scene-pic" alt="2"/>
                    <div className="options">
                        <h3 onClick={() => setSign(true)}>-Firmar</h3>
                        <h3 onClick={() => setDecline(true)}>-Declinar</h3>
                        <h3 onClick={() => setFight(true)}>-Luchar</h3>
                    </div>
                </div>
            </div>
            <div className="final-1">
                <img src={firstFinal} className="first-final d-none" alt="1"/>
            </div>
            <div className="final-2">
                <img src={secondFinal1} className="second-final-1 d-none" alt="2"/>
                <img src={secondFinal2} className="second-final-2 d-none" alt="2"/>
            </div>
            <div className="final-3">
                <img src={thirdFinal} className="third-final d-none" alt="3"/>
            </div>
        </div>
    )
}


export default Main;