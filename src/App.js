import './css/style.css';
import "animate.css/animate.min.css";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Home from './components/Home';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import PersonalTraining from './components/pages/our-services/PersonalTraining'
import GeriatricFitness from './components/pages/our-services/Geriatric_fitness';
import KiddosFitness from './components/pages/our-services/KiddosFitness';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/personal_training" element={<PersonalTraining />} />
          <Route path="/geriatric_fitness" element={ <GeriatricFitness />} />
          <Route path="/kiddos_fitness" element={ <KiddosFitness /> }/>
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}


export default App;
