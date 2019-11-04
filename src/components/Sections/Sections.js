import React from "react";
import Home from "./Home";
import Involvement from "./Involvement";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import { AnimatedBg, Transition } from 'scroll-background';
import Resume from "./Resume";

export default function Sections() {
    return (
        <AnimatedBg>
            <Home/>
            <Transition height="250px" from="#000000" to="#000000" />
            <div className="empty"> </div>
            <Transition position="0" height="150px" from="#000000" to="#4974B0" />
            <div id="section2">
                <AboutMe/>
            </div>
            <Transition height="250px" from="#4974B0" to="#8DB7DC" />
            <div id="section3">

            <Projects/>
            </div>
            <Transition height="300px" from="#8DB7DC" to="#EBC77F" />
            <div id="section4">
            <Involvement/>
            </div>
            <Transition height="300px" from="#EBC77F" to="#e27d60" />
            <div id="section5">
                <Resume/>
            </div>
        </AnimatedBg>


    );
}