import React, { Component } from 'react'
import '../../App.css'


export default class InfoItem extends Component {

    render() {
        const clickableClassName = this.props.onClick==null ? "vertical-flex item" : "vertical-flex item clickable";

        return (
            <div onClick={this.props.onClick} className={clickableClassName}>
                <p className="section-subtitle">{this.props.title}</p>
                <img className="media" src={require(`../../assets/${this.props.src}`)} alt="infopic"/>
                <p className="item-text">{this.props.description}</p>
            </div>
            );


    }

}