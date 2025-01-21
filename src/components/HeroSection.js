import React, { useEffect, useState } from 'react';
import '../assets/styles/App.css';
const phrases = [
    'Explore Innovation',
    'Learn with Passion',
    'Grow Together',
    'Shape the Future'
];
const HeroSection = () => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    useEffect(() => {
        const currentPhrase = phrases[currentPhraseIndex];
        if (currentCharIndex < currentPhrase.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + currentPhrase[currentCharIndex]);
                setCurrentCharIndex((prev) => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
        else {
            const timeout = setTimeout(() => {
                setDisplayedText('');
                setCurrentCharIndex(0);
                setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
            }, 2000);
            return () => clearTimeout(timeout);
        }
    }, [currentCharIndex, currentPhraseIndex]);
    return (React.createElement("div", { className: "hero-section" },
        React.createElement("h1", null, displayedText),
        React.createElement("p", null, "Join us in our journey to make a difference."),
        React.createElement("button", null, "Get Started")));
};
export default HeroSection;
