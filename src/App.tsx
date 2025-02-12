import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Horoscope from './pages/Horoscope';
import Readings from './pages/Readings';
import Compatibility from './pages/Compatibility';
import LifePredictor from './pages/LifePredictor';
import Consultation from './pages/Consultation';
import Contact from './pages/Contact';
import Premium from './pages/Premium';
import Numerology from './pages/Numerology';
import Vedic from './pages/Vedic';
import Palmistry from './pages/Palmistry';
import Muhurtha from './pages/Muhurtha';
import Chat from './pages/Chat';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="horoscope" element={<Horoscope />} />
          <Route path="readings" element={<Readings />} />
          <Route path="compatibility" element={<Compatibility />} />
          <Route path="predictor" element={<LifePredictor />} />
          <Route path="consultation" element={<Consultation />} />
          <Route path="contact" element={<Contact />} />
          <Route path="premium" element={<Premium />} />
          <Route path="numerology" element={<Numerology />} />
          <Route path="vedic" element={<Vedic />} />
          <Route path="palmistry" element={<Palmistry />} />
          <Route path="muhurtha" element={<Muhurtha />} />
          <Route path="chat" element={<Chat />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;