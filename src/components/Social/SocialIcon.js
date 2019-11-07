import React from 'react'
import '../../App.css'


const SocialIcon = ({ link, image, description }) => {



        return (
            <div className="social-icon">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img className="social-image" src={require(`../../assets/${image}`)} alt={description}/>
                </a>
            </div>


        );


}

export default SocialIcon;