// src/components/AboutSection.tsx
import React from 'react';
import '../assets/styles/App.css';

type AboutSectionProps = {};

const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section className="about-section">
      <h2>About FEBS</h2>
      <p>FEBS is dedicated to fostering innovation and learning.</p>
    </section>
  );
};

export default AboutSection;