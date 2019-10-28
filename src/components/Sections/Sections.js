import Section from "../Section/Section";
import React from "react";
import HomeImage from "../../assets/home-background.jpg";

export default function Sections() {
    return (
        <div>

            <Section
                title="Christina Chen"
                subtitle=""
                id="section1"
                backgroundImage={HomeImage}
            />
            <Section
                title="About Me"
                subtitle="Hi"
                id="section2"
                backgroundColor="#e27d60"

            />
            <Section
                title="Projects"
                subtitle="Hi"
                id="section3"
                backgroundColor="#e8a87c"

            />
            <Section
                title="Involvement"
                subtitle="Hi"
                id="section4"
                backgroundColor="#c38d9e"

            />
            <Section
                title="Hobbies"
                subtitle="Hi"
                id="section5"
                backgroundColor="#41b3a3"

            />
        </div>
    );
}