import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes component
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/footer';
import AboutSection from './Components/Aboutpage';
import ServicePage from './Components/Servicepage';
import ContactUs from './Components/contact';
import FlyAshBricksInfo from './Components/Flyashcon';
import InterlockingBricksInfo from './Components/interlockcon';
import SolidBricksInfo from './Components/Solidbrickcon';
import Aggregates from './Components/Aggregatescon';
import HollowbrickInfo from './Components/Hollowbrickcon';
import Image from './Components/image';


// <Navbar />
function App() {
  return (
    <Router>
      <div className="App">
      <Routes> {/* Replace Switch with Routes */}
      <Route exact path="/" element={<Home />} /> 
      <Route exact path="/About" element={<AboutSection />} /> 
      <Route path="/service" element={<ServicePage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/service/Living-Room" element={<FlyAshBricksInfo />} />
          <Route path="/service/Modular-Kitchen" element={<InterlockingBricksInfo />} />
          <Route path="/service/Pvc-Decor" element={<SolidBricksInfo/>} />
          <Route path="/service/Hall-Decoring" element={<HollowbrickInfo/>} />
          <Route path="/service/Wardrobes-Cupboards" element={<Aggregates />} />
          
         
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
