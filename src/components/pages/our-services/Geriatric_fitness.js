import { useEffect } from "react";

const GeriatricFitness = () => {
    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth", // Optional if you want to skip the scrolling animation
        });
    }, []) 

    return (
            <div className="geriatric_fitness our-services-part">
                <h2>Geriatric Fitness</h2>
                <div className="underline"></div>
                <img src={require('../../../images/our-services/geriatric_fitness.jpg')} alt=""/>
                <p>
                    The value of both physical fitness and mental fitness in older populations has been recognized as having a several major positive outcomes. Maintaining geriatric fitness helps to both preserve functionality and prevent disease and injury, as well as reduce frailty and increase quality of life.
                    By maintaining International Curriculum Guidelines for Preparing Activity Instructors of Older Adults.
                    <br />
                    Our biology changes as we get older, causing seniors to have different reasons for staying in shape than younger generations. Though physical fitness provides benefits at any age, the health perks physically fit seniors enjoy are more notable. Physicians and researchers say seniors should remain as active as possible, without overexerting one’s self. In older adults, exercise helps you live a longer, healthier, and more joyous life.
                    Regular exercise can help older adults stay independent and prevent many health problems that come with age.

                </p>
            </div>
    )
}

export default GeriatricFitness;