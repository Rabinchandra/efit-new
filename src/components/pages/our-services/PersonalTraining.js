import { useEffect } from "react";

const PersonalTraining = () => {
    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth", // Optional if you want to skip the scrolling animation
        });
    }, []) 

    return (
            <div className="geriatric_fitness our-services-part">
                <h2>Personal Training</h2>
                <div className="underline"></div>
                <img src={require('../../../images/our-services/geriatric_fitness.jpg')} alt=""/>
                <p>
                    
                    <strong>General fitness</strong><br />
                    Our internationally certified fitness professionals will help you in guiding a right direction towards your lifestyle and fitness goals with right postural analysis n movement screening assessments along with all other health parameters( Eg: BCA, diet counselling) 
                    
                    <br /><br />
                    <strong>Personal Training</strong><br />
                    Personal training is an art at e-fit.org.in where all our health professionals will get along together to help u to reach your health and fitness goals ,where they help you in four health parameters. 
                    a. Atmospherical health 
                    b. Mental health 
                    C. Biological health 
                    d. Physical health

                </p>
            </div>
    )
}

export default PersonalTraining;