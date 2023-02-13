import { useEffect } from "react";

const SportFitness = () => {
    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth", // Optional if you want to skip the scrolling animation
        });
    }, []) 

    return (
            <div className="geriatric_fitness our-services-part">
                <h2>Sport Fitness</h2>
                <div className="underline"></div>
                <img src={require('../../../images/our-services/sport_fitness.jpg')} alt=""/>
                <p>
                Sport fitness is a critical component for athletes and individuals who are looking to improve their athletic performance. Whether you are a professional athlete, a weekend warrior, or simply looking to stay in shape, sport fitness plays a key role in helping you achieve your goals.
                <br /><br />
                A well-rounded sport fitness program should focus on several key components, including strength training, cardiovascular endurance, flexibility, and nutrition. Strength training helps build muscle and improve overall power, while cardiovascular endurance enables you to perform at a high level for longer periods of time. Flexibility training can help reduce the risk of injury, while proper nutrition provides the fuel and nutrients necessary for optimal performance.
                <br /><br />
                In addition to physical preparation, sport fitness also involves mental preparation. Mental toughness, focus, and confidence are essential components of sport fitness, and they can be developed through visualization, goal setting, and other mental training techniques.
                <br /><br />
                Whether you are training for a specific sport or simply looking to improve your athletic performance, sport fitness can help you reach your goals and perform at your best. By working with a qualified coach or trainer, you can develop a customized sport fitness program that meets your unique needs and helps you achieve your athletic potential.at come with age.
                </p>
            </div>
    )
}

export default SportFitness;