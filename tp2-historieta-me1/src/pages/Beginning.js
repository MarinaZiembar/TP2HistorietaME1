import React from 'react';
import door from '../images/door.png';





function Beginning(props) {

    const { onHide } = props;

    return(
        <div className="beginning ">
            <p className="dialog-1">Hace tiempo ya que las cosas no son como antes...</p>
            <img src={door} onClick={onHide} alt="door" />
        </div>
    )
}


export default Beginning;