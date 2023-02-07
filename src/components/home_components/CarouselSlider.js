import React from 'react'
import {Carousel} from '3d-react-carousal';
import galleryOnePic from '../../images/slider/1.jpg';
import galleryTwoPic from '../../images/slider/2.jpg';
import galleryThreePic from '../../images/slider/3.jpg';


function CarouselSlider() {
    let slides = [
        <img  src={galleryOnePic} alt="1" />,       
        <img  src={galleryTwoPic} alt="1" />,
        <img  src={galleryThreePic} alt="1" />,
    ];

    return (
        <div className="carousel-slider" id="carousel-slider">
            <Carousel slides={slides} autoplay={true} interval={4000}/>
        </div>
    )
}

export default CarouselSlider