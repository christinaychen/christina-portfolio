import React, { Component } from 'react'
import '../../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Involvement.css'

export default class Involvement extends Component {

    render() {
        AOS.init();

        return (
            <div className="involvements-color background" data-aos="fade-up"
                 data-aos-offset="100"
                 data-aos-duration="500"
                 data-aos-easing="ease-in-out"
                 data-aos-mirror="true"
                 data-aos-once="false"
                 data-aos-anchor-placement="top-center">
                <div class="section-title" data-aos="zoom-in-up"
                     data-aos-duration="1000"
                     data-aos-easing="ease-in-out"
                     data-aos-mirror="true"
                     data-aos-once="false"
                     data-aos-anchor-placement="top-center">
                    Involvement
                </div>

            </div>

        );
    }

}