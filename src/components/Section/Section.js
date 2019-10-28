import React from "react";
import classes from "./Section.css";

export default function Section({ title, subtitle, id, backgroundImage, backgroundColor }) {
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
        <div style={style} className="section">
            <div className="section-content" id={id}>
                {/*<h1>{title}</h1>*/}
                {/*<p>{subtitle}</p>*/}
            </div>
        </div>
    );
}