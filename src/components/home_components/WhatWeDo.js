import React from 'react'
import consultPhoto from '../../images/what-we-do/consult.jpg'
import analyzePhoto from '../../images/what-we-do/analyze.jpg';
import understandPhoto from '../../images/what-we-do/understand.jpg';
import planPhoto from '../../images/what-we-do/plan.jpg';
import assignPhoto from '../../images/what-we-do/assign.jpg';
import achievePhoto from '../../images/what-we-do/achieve.jpg';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function OurServices() {
  return (
    <div className="what-we-do" id="what-we-do">
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
            <h1>What We Do!</h1>
            <div className="underline"></div>
        </AnimationOnScroll>

        <div className="container">

            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} style={{animationDelay: '0s'}}>
                <div className="box box-1">
                    <img src={consultPhoto} alt="" />
                    <h2>Consult</h2>
                    <small>We consult with medical professionals - only if required.</small>
                </div>
            </AnimationOnScroll>
            
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} style={{animationDelay: '.3s'}}>
            <div className="box box-2">
                <img src={analyzePhoto} alt="" />
                <h2>Analyze</h2>
                <small>We analyze your current position and goals.</small>
            </div>
            </AnimationOnScroll>
            
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} style={{animationDelay: '.6s'}}>
                <div className="box box-3">
                    <img src={understandPhoto} alt="" />
                    <h2>Understand</h2>
                    <small>We Understand your Requirements and Goals.</small>
                </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} style={{animationDelay: '0s'}}>
            <div className="box box-4">
                <img src={planPhoto} alt="" />
                <h2>Plan</h2>
                <small>We plan the perfect workout to get maximum results for you.</small>
            </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} style={{animationDelay: '.3s'}}>
                <div className="box box-5">
                    <img src={assignPhoto} alt="" />
                    <h2>Assign</h2>
                    <small>We assign a knowledgeable and experienced trainer.</small>
                </div>
            </AnimationOnScroll>
            
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} style={{animationDelay: '.6s'}}>
                <div className="box box-6">
                    <img src={achievePhoto} alt="" />
                    <h2>Achieve</h2>
                    <small>Achieve your goals with a dedicated trainer always by your side.</small>
                </div>
            </AnimationOnScroll>
        </div>
    </div>
  )
}

export default OurServices;