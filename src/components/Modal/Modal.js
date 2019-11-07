import React from 'react'
import '../../App.css'

const Modal = ({ handleClose, show, children }) => {

    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
            <div className="modal-children">
                {children}
            </div>
            <button onClick={handleClose} className="close-button text" >Close</button>
        </div>
    );

}

export default Modal;
