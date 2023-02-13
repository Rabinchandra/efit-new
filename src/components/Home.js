import Hero from './home_components/Hero';
import Journey from './home_components/Journey';
import OurServices from './home_components/OurServices';
import CarouselSlider from './home_components/CarouselSlider';
import WhoWeAre from './home_components/WhoWeAre';
import WhatWeDo from './home_components/WhatWeDo';

const Home = () => {
    return (
        <div>
            <Hero />
            <Journey />
            <OurServices />
            <WhatWeDo />
            <WhoWeAre />
            <CarouselSlider />
        </div>
    )
}

export default Home;