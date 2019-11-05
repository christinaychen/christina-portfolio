import React from 'react'
import '../../App.css'
import Modal from './Modal';
import SlideShow from 'react-slidez';
import Slide1 from '../../assets/bookableslides/Slide1.jpeg';
import Slide2 from '../../assets/bookableslides/Slide2.jpeg';
import Slide3 from '../../assets/bookableslides/Slide3.jpeg';
import Slide4 from '../../assets/bookableslides/Slide4.jpeg';
import Slide5 from '../../assets/bookableslides/Slide5.jpeg';
import Slide6 from '../../assets/bookableslides/Slide6.jpeg';
import Slide7 from '../../assets/bookableslides/Slide7.jpeg';
import Slide8 from '../../assets/bookableslides/Slide8.jpeg';
import Slide9 from '../../assets/bookableslides/Slide9.jpeg';
import Slide10 from '../../assets/bookableslides/Slide10.jpeg';
import Slide11 from '../../assets/bookableslides/Slide11.jpeg';

const BookableModal = ({ handleClose, show }) => {

    return (
        <Modal handleClose = {handleClose} show={show}>
            <p onClick={handleClose} className="section-subtitle">Bookable</p>
            <div className="slideshow">
                <SlideShow
                    showArrows
                    autoplay={false}
                    enableKeyboard
                    defaultIndex={0}
                    effect={'fade'}
                    height={'100%'}
                    width={'100%'}>
                    <img src={Slide1}/>
                    <img src={Slide2}/>
                    <img src={Slide3}/>
                    <img src={Slide4}/>
                    <img src={Slide5}/>
                    <img src={Slide6}/>
                    <img src={Slide7}/>
                    <img src={Slide8}/>
                    <img src={Slide9}/>
                    <img src={Slide10}/>
                    <img src={Slide11}/>
                </SlideShow>
            </div>
        </Modal>
    );
}

export default BookableModal;
