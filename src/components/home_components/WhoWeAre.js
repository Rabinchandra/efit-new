import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';

function WhoWeAre() {
  return (
    <div className="who-we-are" id="who-we-are">
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
          <h1>Who Are We?</h1>
          <div className="underline"></div>
        </AnimationOnScroll>

          <div className="box">
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
              <h3>Family Fitness</h3>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
              <blockquote>Replace family insurance with family fitness!</blockquote>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
              <p>
              Our family trainers will make sure everyone in your home is healthy and fit. Based on every person’s age and physical activities, we suggest customized fitness plans for every home.
              </p>
            </AnimationOnScroll>
          </div>

        
          <div className="box">
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
              <h3>Maternity Fitness</h3>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
              <blockquote>Those who nurture others deserve to be nurtured more!</blockquote>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
              <p>
                Experience the amazing journey into motherhood with our special fitness plan for pregnant women and young mothers. E-fit makes lives for mothers easy.
              </p>
            </AnimationOnScroll>
          </div>
  

          <div className="box">
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
              <h3>Virtual Training</h3>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
              <blockquote>There are no barriers to fitness. Fitness removes barriers.</blockquote>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
              <p>
                Don’t let your busy schedule or routines affect your fitness. Distance is no longer an issue for coming to the gym. Our virtual training makes workouts possible wherever you are!
              </p>
            </AnimationOnScroll>
          </div>


          <div className="box">
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
              <h3>Opportunities</h3>  
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
              <blockquote>True leaders don’t create followers. They create more leaders.</blockquote>
            </AnimationOnScroll>
            
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
              <p>
                E-fit is on an ambitious journey to create a world, which is happy, healthy and fit. We empower you to empower others! Come join the revolution.
              </p>
            </AnimationOnScroll>
          </div>
        
    </div>
  )
}

export default WhoWeAre