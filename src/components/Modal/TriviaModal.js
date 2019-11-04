import React from 'react'
import '../../App.css'
import { Slide } from 'react-slideshow-image';
import Modal from './Modal';

const TriviaModal = ({ handleClose, show }) => {

    return (
        <Modal handleClose = {handleClose} show={show}>
            <p onClick={handleClose} className="section-subtitle">Trivia @ Krafthouse App</p>
            <p className="text">
                Led the creation of an app using Ionic and Firebase to facilitate grading and submission logistics for DUU’s weekly Trivia
                @ Krafthouse event
            </p>
        </Modal>
    );
}

export default TriviaModal;
