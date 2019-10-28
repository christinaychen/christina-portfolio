import React from "react";
import classes from "./Section.css";
import ScrollAnimation from "../Sections/Sections";

export default function Section({ title, subtitle, id, content, backgroundImage, backgroundColor }) {
    //USE CSS MODULES-ALTER CSS FILE
    let style;
    if(backgroundImage!=null) {
        style = {
            backgroundImage: `url(${backgroundImage})`,
            height: '100vh',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            opacity: 0.7,
        }
    }
    else if (backgroundColor!=null) {
        style = {
            backgroundColor: backgroundColor,
            height: '100vh',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }
    }

    return (

        <div style={style}>

            <div id={id}>
                {content}
            </div>

</div>
    );
}