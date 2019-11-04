import React, { Component } from 'react'
import '../../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import InfoItemGroup from "../InfoItem/InfoItemGroup";
import InfoItem from "../InfoItem/InfoItem";
import BookableModal from "../Modal/BookableModal";
import VideoInfoItem from "../InfoItem/VideoInfoItem";
import TriviaModal from "../Modal/TriviaModal";
import VoogasaladModal from "../Modal/VoogasaladModal";


export default class Projects extends Component {

    state = {
        showItems: true,
        showTrivia: false,
        showBookable: false,
        showVooga: false
    }

    showBookable() {
        this.setState({showBookable: true});
        this.setState({showItems:false});

    }

    hideBookable() {
        this.setState({showBookable: false});
        this.setState({showItems:true});
    }

    showTrivia() {
        this.setState({showTrivia: true});
        this.setState({showItems:false});

    }

    hideTrivia() {
        this.setState({showTrivia: false});
        this.setState({showItems:true});
    }

    showVooga() {
        this.setState({showVooga: true});
        this.setState({showItems:false});

    }

    hideVooga() {
        this.setState({showVooga: false});
        this.setState({showItems:true});
    }



    render() {
        AOS.init();

        return (
                <div data-aos="zoom-in-up"
                     data-aos-duration="1000"
                     data-aos-easing="ease-in-out"
                     data-aos-offset="500"
                     data-aos-mirror="true"
                     data-aos-once="false"
                     data-aos-anchor-placement="top-bottom"
                     className="projects">
                    <p className="section-title"> Projects</p>
                    <InfoItemGroup numCols="2" show={this.state.showItems}>
                        <InfoItem onClick={this.showVooga.bind(this)} title="Vooga Salad" src="voogasaladicon.png" description=""/>
                        <VideoInfoItem onClick={this.showBookable.bind(this)} title="Bookable" src="bookable-video.mov" replay={false} description=""/>
                        <InfoItem onClick={this.showTrivia.bind(this)} title="Trivia @ Nite" src="trivia.png"/>
                        <InfoItem title="This Portfolio Website" src="portfolio-screenshot.png"/>
                    </InfoItemGroup>

                    <BookableModal show={this.state.showBookable} handleClose={this.hideBookable.bind(this)}/>
                    <TriviaModal show={this.state.showTrivia} handleClose={this.hideTrivia.bind(this)}/>
                    <VoogasaladModal show={this.state.showVooga} handleClose={this.hideVooga.bind(this)}/>


                </div>


        );
    }

}