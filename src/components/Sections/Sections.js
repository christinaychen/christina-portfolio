import Section from "../Section/Section";
import React from "react";
import Home from "../Home/Home";
import Involvement from "../Involvement/Involvement";
import Projects from "../Projects/Projects";
import Hobbies from "../Hobbies/Hobbies";
import AboutMe from "../AboutMe/AboutMe";

export default function Sections() {
    return (
        <div>

            {/*<Section*/}
                {/*title="Christina Chen"*/}
                {/*subtitle=""*/}
                {/*id="section1"*/}
                {/*backgroundImage={HomeImage}*/}
            {/*/>*/}
            <div id="section1">
                <Home />
            </div>

            {/*<div id="section2">*/}
                {/*<AboutMe/>*/}
            {/*</div>*/}

            {/*<Section*/}
                {/*title="About Me"*/}
                {/*subtitle="Hi"*/}
                {/*id="section2"*/}
                {/*backgroundColor="#e27d60"*/}

            {/*/>*/}
            <div id="section3">
                <Projects/>
            </div>            {/*<Section*/}
                {/*title="Projects"*/}
                {/*subtitle="Hi"*/}
                {/*id="section3"*/}
                {/*backgroundColor="#e8a87c"*/}

            {/*/>*/}
            <div id="section4">
                <Involvement/>
            </div>            {/*<Section*/}
                {/*title="Involvement"*/}
                {/*subtitle="Hi"*/}
                {/*id="section4"*/}
                {/*backgroundColor="#c38d9e"*/}

            {/*/>*/}
            <div id="section5">
                <Hobbies/>
            </div>            {/*<Section*/}
                {/*title="Hobbies"*/}
                {/*subtitle="Hi"*/}
                {/*id="section5"*/}
                {/*backgroundColor="#41b3a3"*/}

            {/*/>*/}
        </div>
    );
}