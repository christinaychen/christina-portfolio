import React, { Component } from "react";
import './Navbar.css';
import { Link, animateScroll as scroll } from "react-scroll";
import icon from "../../assets/icon.JPG";

export default class Navbar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <div>
            <nav className="nav-bar">
                <div className="nav-title" onClick={this.scrollToTop}>
                    <img src={icon} className="icon"/>
                    <p>Christina Chen</p>
                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <Link
                        activeClass="active"
                        to="section2"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        About Me
                    </Link></li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="section3"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            Projects</Link></li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="section4"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>Involvement</Link></li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="section5"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>Hobbies</Link></li>
                </ul>
            </nav>
            </div>
        )
    }
}