import React, { Component } from 'react'
import '../../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Columns from 'react-columns';
import InfoItem from "../InfoItem/InfoItem";


export default class Involvement extends Component {

    render() {
        AOS.init();

        return (
            <div
                // data-aos="zoom-in-up"
                //  data-aos-duration="1000"
                //  data-aos-easing="ease-in-out"
                //  data-aos-offset="500"
                //  data-aos-mirror="true"
                //  data-aos-once="false"
                //  data-aos-anchor-placement="top-bottom"
                 className="involvement"
                >

                {/*<div data-aos="zoom-in-up"*/}
                     {/*data-aos-duration="1000"*/}
                     {/*data-aos-mirror="true"*/}
                     {/*data-aos-once="false"*/}
                     {/*data-aos-anchor-placement="bottom-top"*/}
                     {/*className="involvement">*/}

                    <p className="section-title"> Involvement</p>
                    <div className="section-items">
                        <Columns columns = "2">
                            <InfoItem title="Duke Technology Scholars" src="DTech.jpg" description="As a DTech Scholar, I am part of a community of women who support each other as we are entering the tech workforce."/>
                            <InfoItem title="Momentum Dance Company" src="momentum.jpg" description="Dancer in Momentum, performing on campus and in our end of year showcase."/>
                            <InfoItem title="HackDuke" src="hackduke-logo.svg" description="The HackDuke Planning Committee plans Ideate, our design conference
                            in the spring and Code for Good, the premier social good hackathon in the nation, in the fall."/>
                            <InfoItem title="Duke University Union DevOps Team" src="duuicon.png"/>
                        </Columns>
                    </div>
                </div>



        );
    }

}