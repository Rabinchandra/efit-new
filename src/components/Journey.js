import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Journey() {
  return (
    <div className="journey" id="journey">
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
          <h1>Our Journey</h1>
          <div className="underline"></div>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
          <p>
          Our customized fitness plan for every individual will definitely change your perspective about fitness itself. Let’s celebrate fitness!
          </p>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
          <a href="#" className="btn">Know More</a>
        </AnimationOnScroll>
    </div>
  )
}

export default Journey