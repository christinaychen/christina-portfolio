import React from 'react'
import '../../App.css'
import Modal from './Modal';

const TriviaModal = ({ handleClose, show }) => {

    return (
        <Modal handleClose = {handleClose} show={show}>
            <p onClick={handleClose} className="section-subtitle">Trivia @ Krafthouse App</p>
            <p className="text">
                Led the creation of an app using Ionic and Firebase to facilitate grading and submission logistics for DUU’s weekly Trivia
                @ Krafthouse event. This included an admin side of the app in which the Trivia@Krafthouse team was able to enter questions and
                acceptable answers prior to the start of a game. They could start the game when needed to start accepting submissions.
                An option to grade a certain round was also included. On the player side, teams could sign up through the app, which would
                propagate into the database. For the grading algorithm, we looked for complete matches case-insensitive. If a team's answer
                did not match an accepted answer, the admin side was given a page of incorrect answers so that they could manually Accept
                or Reject an answer. This, then, takes into account typos or hard-to-guess phrases.
                <br/>
                I worked with three other team members in the Duke University Union DevOps team on this project. I helped with any
                facilitating needed to get accustomed to the Ionic framework, working with another member to integrate with Firebase, which
                I had never worked with before and learned about through this project.
            </p>
        </Modal>
    );
}

export default TriviaModal;
