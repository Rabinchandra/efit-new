import React from 'react'
import videoMp4 from '../../images/hero_1.mp4';

function Hero() {
  return (
    <div className="hero" id="hero">
        {/* <div className="overlay"></div> */}
        <video autoPlay loop muted className='back-video' src={videoMp4}/>
        {/* <div className="hero-text">
            <h1> <span>Easy Fit</span> For Life</h1>
            <p>
              Fitness is not a routine. It is a choice.  Fitness is pro-life.
              <br />Fitness is made easy for you at E-Fit.
            </p>
            <a href="#" className='btn'>Get Started</a>
        </div>
        <div className="faded"></div> */}
    </div>
  )
}

export default Hero