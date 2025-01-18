import React, { useEffect, useState } from 'react';
import '../assets/styles/App.css';

const phrases: string[] = [
  'Explore Innovation',
  'Learn with Passion',
  'Grow Together',
  'Shape the Future'
];

const HeroSection: React.FC = () => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState<number>(0);
  const [currentCharIndex, setCurrentCharIndex] = useState<number>(0);

  useEffect(() => {
    const currentPhrase: string = phrases[currentPhraseIndex];
    if (currentCharIndex < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentPhrase[currentCharIndex]);
        setCurrentCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText('');
        setCurrentCharIndex(0);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentCharIndex, currentPhraseIndex]);

  return (
    <div className="hero-section">
      <h1>{displayedText}</h1>
      <p>Join us in our journey to make a difference.</p>
      <button>Get Started</button>
    </div>
  );
};

export default HeroSection;