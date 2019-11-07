import React, { Component } from 'react'
import '../../App.css'


export default class VideoInfoItem extends Component {

    render() {
        const clickableClassName = this.props.onClick==null ? "vertical-flex item" : "vertical-flex item clickable";

        return (
        <div onClick={this.props.onClick} className={clickableClassName}>
            <p className="section-subtitle">{this.props.title}</p>
            <video className="media" autoPlay loop={this.props.replay} muted src={require(`../../assets/${this.props.src}`)} type="video/mp4">
                </video>
            <p className="item-text">{this.props.description}</p>
        </div>
    );


}

}