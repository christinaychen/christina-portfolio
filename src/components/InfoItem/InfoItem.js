import React, { Component } from 'react'
import '../../App.css'


export default class InfoItem extends Component {

    render() {
        return (
            <div onClick={this.props.onClick} className="vertical-flex item">
            <p className="section-subtitle">{this.props.title}</p>
            <img className="photo" src={require(`../../assets/${this.props.src}`)}/>
            <p className="item-text">{this.props.description}</p>
            </div>
            );


    }

}