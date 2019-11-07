import React, { Component } from 'react'
import '../../App.css'
import SocialIcon from './SocialIcon'


export default class Social extends Component {

    render() {

        return (
            <div className="social vertical-flex">
                <p className="section-subtitle center">Contact Me!</p>
                <div className="center social-background horizontal-flex">
                <SocialIcon image="LI-In-Bug.png" link="https://www.linkedin.com/in/christina-chen4/" alt="linkedin"/>
                <SocialIcon image="github.png" link="https://github.com/christinaychen" alt="github"/>
                <SocialIcon image="duke.png" link="mailto: christina.y.chen@duke.edu" alt="email"/>
                </div>
            </div>


        );
    }

}