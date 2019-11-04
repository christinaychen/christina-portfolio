import React, { Component } from 'react'
import '../../App.css'


export default class VideoInfoItem extends Component {

    render() {
    return (
        <div onClick={this.props.onClick} className="vertical-flex item">
            <p className="section-subtitle">{this.props.title}</p>
            <video className="photo" autoPlay loop={this.props.replay} muted src={require(`../../assets/${this.props.src}`)} type="video/mp4">
                </video>
            <p className="item-text">{this.props.description}</p>
        </div>
    );


}

}