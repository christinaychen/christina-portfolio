import React, { Component } from 'react'
import HomeImage from "../../assets/home-background.jpg";


export default class Home extends Component {

    render() {
        const style = {
            backgroundImage: `url(${HomeImage})`,
            height: '100vh',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }
        return (
            <div style={style} data-aos="fade-up"
                 data-aos-duration="2000"
                 data-aos-easing="ease-in-out"
                 data-aos-mirror="true"
                 data-aos-once="false"
                 data-aos-anchor-placement="top-center">

                <div data-aos="fade-right"
                     data-aos-offset="200"
                     data-aos-duration="2000"
                     data-aos-easing="ease-in-out"
                     data-aos-mirror="true"
                     data-aos-once="false"
                     data-aos-anchor-placement="top-center">
                    <h1>Hi, I'm Christina.</h1>
                <h2>
                    I'm a Junior ('21) at Duke University majoring in Computer Science and Statistics and minoring in Economics.
                </h2>
                </div>
            </div>
        );
    }

}