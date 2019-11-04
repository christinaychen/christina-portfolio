import React from 'react'
import '../../App.css'
import Modal from './Modal';

const VoogasaladModal = ({ handleClose, show }) => {

    return (
            <Modal handleClose = {handleClose} show={show}>
                <p onClick={handleClose} className="section-subtitle">Vooga Salad</p>
                <video className="photo" autoPlay controls loop={false} muted src={require('../../assets/voogasaladvideo.mov')} type="video/mp4">
                </video>
                <p className="text">
                    I worked with 8 other team members to create this Tower Defense game in which a user is able to design the game, including
                    the game board, the weapons (power, ammo, etc), enemies (number of waves, speed, power), and more. The user is then able
                    to play the game, which is configured in the way it was set by the user. These games are all saved in a database through XML,
                    so that multiple users can play a single game that was configured by a singular user. In addition, the user can configure
                    as many levels as he/she wants, with different on the same arsenal. Weapons can also have the ability to be unlocked between levels
                    or after achieving a certain score.

                    <br/><br/>

                    There were challenges, including the
                    necessity of having lots of images on the screen at a time, especially since we were using JavaFX. However, for example, this
                    problem was solved by keeping reference of the ImageView in the backend so the object doesn't have to be passed back and forth
                    with every time step.


                </p>
            </Modal>


    );
}

export default VoogasaladModal;
