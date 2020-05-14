import React, { Component } from 'react'
import '../../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Columns from 'react-columns';
import InfoItem from "../InfoItem/InfoItem";
import VideoInfoItem from "../InfoItem/VideoInfoItem";
import Social from "../Social/Social";

export default class AboutMe extends Component {

    render() {
        AOS.init();

        return (
/*                <div data-aos="zoom-in-up"
                     data-aos-duration="1000"
                     data-aos-easing="ease-in-out"
                     data-aos-mirror="true"
                     data-aos-once="false"
                     data-aos-anchor-placement="top-bottom"*/
                     <div className="about-me">
                    <p className="section-title"> About Me</p>
                    <div className="section-items">
                        <div className="quotes-text">
                        <blockquote><p className="text">I'm currently studying at Duke University (c/o 2021) majoring in Computer Science and Statistics and minoring in Economics.
                        I'm studying abroad this semester in Spain, studying at Duke in Madrid and Carlos Tercero University. I'm an avid traveler, seafood lover and crossword player.</p></blockquote>
                        </div>
                        <p className="center section-subtitle">Cape Town, South Africa (2018)</p>
                        <Columns columns = "3">
                            <InfoItem title="Skydiving" replay={true} src="skydiving.JPG" description=""/>
                            <VideoInfoItem title="Shark Cage Diving" src="sharkcage.MP4" description=""/>
                            <InfoItem title="Hiking Table Mountain" src="tablemountain.JPG"/>
                            <InfoItem title="Hiking Lions Head" src="lionshead.JPG"/>
                            <InfoItem title="Safari" src="safari.JPG"/>
                        </Columns>
                        <Social/>
                    </div>
                </div>


        );
    }

}