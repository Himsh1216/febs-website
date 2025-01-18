// src/pages/Home.jsx
import React from 'react';
import HeroSection from '../components/HeroSection.js';
import AboutSection from '../components/AboutSection.js';
import EventsSection from '../components/EventsSection.js';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <EventsSection />
    </div>
  );
};

export default Home;