import React from 'react'
import personal_training from '../../images/our-services/personal_training.jpg'
import injury_rehab from '../../images/our-services/injury_rehab.png';
import sport_fitness from '../../images/our-services/sport_fitness.jpg';
// import yoga_meditation from '../../images/our-services/yoga_meditation.jpg';
import kiddo_fitness from '../../images/our-services/kiddo_fitness.jpg';
import geriatric_fitness from '../../images/our-services/geriatric_fitness.jpg';

import { AnimationOnScroll } from 'react-animation-on-scroll';
import {  Link } from 'react-router-dom';

function OurServices() {
  return (
    <div className="our-services" id="our-services">
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
            <h1>Our Services</h1>
            <div className="underline"></div>
        </AnimationOnScroll>

        <div className="container">

            <Link to='/personal_training'>
                <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} style={{animationDelay: '0s'}}>
                    <div className="box box-1">
                        <img src={personal_training} alt="" />
                        <h2>Personal Training</h2>
                        <small>Not every finger is the same size. Not every fitness goal is the same.</small>
                        <p>
                            E-fit makes fitness easy with a specialized workout plan just for you! Based on your medical records, age, and physical activities, we train you to achieve a healthy body and a carefree mind
                        </p>
                    </div>
                </AnimationOnScroll>
            </Link>

            <Link to='/injury_rehab'>
                <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} style={{animationDelay: '.3s'}}>
                <div className="box box-2">
                    <img src={injury_rehab} alt="" />
                    <h2>Injury Rehab</h2>
                    <small>Healing is not a process; it is a way of life.</small>
                    <p>
                        E-fit works closely with doctors, physiotherapists, and health professionals to assist you recover from any ailment and develop a healthy lifestyle.
                    </p>
                </div>
                </AnimationOnScroll>
            </Link>
            
            <Link to='/sport_fitness'>
                <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} style={{animationDelay: '.6s'}}>
                    <div className="box box-3">
                        <img src={sport_fitness} alt="" />
                        <h2>Sports Fitness</h2>
                        <small>We commit to your fitness. You commit to your trophy!</small>
                        <p>
                            E-fit offers sports-specific fitness plans for athletes and players. We ensure, unfit body doesn’t stop you from living your dreams.
                        </p>
                    </div>
                </AnimationOnScroll>
            </Link>

            {/* <Link to='/yoga_meditation'>
                <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} style={{animationDelay: '0s'}}>
                    <div className="box box-4">
                        <img src={yoga_meditation} alt="" />
                        <h2>Yoga & Meditation</h2>
                        <small>Experience the perfect blend of the body, mind and soul..</small>
                        <p>
                        Master the powerful body postures and breathing techniques to make your body and organs healthy and fit.
                        </p>
                    </div>
                </AnimationOnScroll>
            </Link> */}

            <Link to='/kiddos_fitness'>
                <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} style={{animationDelay: '.3s'}}>
                    <div className="box box-5">
                        <img src={kiddo_fitness} alt="" />
                        <h2>Kiddo Fitness</h2>
                        <small>It takes courage to evolve into who you really are.</small>
                        <p>
                            E-fit presents special fitness plans for kids and teenagers, to make them champions of physical fitness for life.
                        </p>
                    </div>
                </AnimationOnScroll>
            </Link>
            
            <Link to='/geriatric_fitness'>
                <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} style={{animationDelay: '.6s'}}>
                    <div className="box box-6">
                        <img src={geriatric_fitness} alt="" />
                        <h2>Geriatric Fitness</h2>
                        <small>Don’t Retire. Relive.</small>
                        <p>
                            Retirement is the perfect time to do the things you've always wanted to do.Tell us your dreams, and we will train your body to fulfill it!
                        </p>
                    </div>
                </AnimationOnScroll>
            </Link>
            
        </div>
    </div>
  )
}

export default OurServices;