import { useEffect } from "react";

const KiddosFitness = () => {
    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth", // Optional if you want to skip the scrolling animation
        });
    }, []) 

    return (
            <div className="geriatric_fitness our-services-part">
                <h2>Kiddos Fitness</h2>
                <div className="underline"></div>
                <img src={require('../../../images/our-services/kiddo_fitness.jpg')} alt=""/>
                <p>
                    <p>
                        Kiddo fitness
                        For kids, being introduced to healthy behaviors early is a gift. They are so ready to learn and retain new information and create good habits when they are young. Doing so will help build their physical confidence, too
                        The more involved your family is in physical activity, the healthier they will be.
                        Kids this age need physical activity to build strength, coordination, and confidence — and to lay the groundwork for a healthy lifestyle. They're also gaining more control over how active they are.
                    </p>
                
                    <p>
                        <strong>Fitness for kids</strong><br/>
                        It’s never too early to encourage a love of physical activity in kids by exposing them to fun fitness activities and sports. Doctors say that participating in different activities develops motor skills and muscles and reduces the risk of developing overuse injuries.
                    </p>
                    <p>
                        Guidelines from the Department of Health and Human Services recommend that children and adolescents age 6 and older get at least an hour a day of moderate or vigorous aerobic activity. Children should do vigorous activities, such as running or biking, at least three days a week. They should also participate in muscle-strengthening activities, such as body weight exercises, at least three days a week. Children should also do bone-strengthening activities, such as jumping rope or running, at least three days a week.
                    </p>

                </p>
            </div>
    )
}

export default KiddosFitness;