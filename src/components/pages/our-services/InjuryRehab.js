import { useEffect } from "react";

const InjuryRehab = () => {
    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth", // Optional if you want to skip the scrolling animation
        });
    }, []) 

    return (
            <div className="geriatric_fitness our-services-part">
                <h2>Injury Rehab</h2>
                <div className="underline"></div>
                <img src={require('../../../images/our-services/injury_rehab.png')} alt=""/>
                <p>
                The importance of injury rehabilitation cannot be overstated. Whether you have suffered a sports injury, a fall, or any other type of trauma, proper rehabilitation is essential to ensure a full recovery and prevent future problems. By following a well-designed rehabilitation program, you can regain strength, flexibility, and range of motion, reducing the risk of re-injury and allowing you to return to your favorite activities.
                <br /><br />
                Injury rehabilitation not only addresses physical limitations caused by an injury, but it also addresses any mental and emotional challenges that may arise during the healing process. It provides an opportunity for individuals to regain a sense of control over their bodies, which can lead to improved mental health and self-esteem.
                <br /><br />
                In addition to treating specific injuries, rehabilitation also plays a crucial role in preventing future injuries. By focusing on strength training, flexibility, and proper technique, rehabilitation can help to correct imbalances and improve overall movement patterns, reducing the risk of future injury.
                <br /><br />
                Whether you are an athlete, an older adult, or someone who wants to stay active, injury rehabilitation is an essential component of maintaining physical health and well-being. By working with a qualified rehabilitation professional, you can develop a tailored program that addresses your unique needs and goals, helping you recover from injury and live an active and fulfilling life.
                </p>
            </div>
    )
}

export default InjuryRehab;