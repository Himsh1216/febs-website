/* ======= src/App.tsx ======= */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import Team from './pages/Team.js';
// import Events from './pages/Resources.js';
import Resources from './pages/Resources.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;