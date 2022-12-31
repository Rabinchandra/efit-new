import './css/style.css';
import Hero from './components/Hero';
import Journey from './components/Journey';
import WhatWeDo from './components/WhatWeDo';
import CarouselSlider from './components/CarouselSlider';
import WhoWeAre from './components/WhoWeAre';
import Footer from './components/Footer';
import "animate.css/animate.min.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <Journey />
      <WhatWeDo />
      <WhoWeAre />
      <CarouselSlider />
      <Footer />
    </div>
  );
}

export default App;
