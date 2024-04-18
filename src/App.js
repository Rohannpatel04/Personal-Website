import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar.js'; 
import Footer from './Components/Footer.js'; 
import WelcomeMessage from './Components/WelcomeMessage.js';
import Landscape from './Components/Landscape.js';
import Portrait from './Components/Portrait.js';
import ContactMe from './Components/ContactMe.js';
import Car from './Components/Car.js'; 
import Shop from './Components/Shop.js'; 
import PhotoGenerator from './Components/PhotoGenerator.js'; 

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
          <Routes>
            <Route path="/WelcomeMessage" element={<WelcomeMessage />} />
            <Route path="/Landscape" element={<Landscape />} />
            <Route path="/Car" element={<Car />} />
            <Route path="/Portrait" element={<Portrait />} />
            <Route path="/ContactMe" element={<ContactMe />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/PhotoGenerator" element={<PhotoGenerator />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
