import React, { Component } from 'react'
import '../../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import resume from '../../assets/Christina_ChenJR.pdf';

export default class Resume extends Component {

    render() {
        AOS.init();

        return (
            <div data-aos="zoom-in-up"
                 data-aos-duration="1000"
                 data-aos-once="false"
                 data-aos-anchor-placement="bottom-top"
                 className="about-me">
                <p className="section-title">Resume</p>
                <div className="section-items">
                    <object data={resume} type="application/pdf" height="800px" width="100%"></object>
                </div>
            </div>


        );
    }

}