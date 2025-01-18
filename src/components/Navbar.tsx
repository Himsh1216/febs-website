// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-800 p-4 text-white">
    <div className="flex justify-between">
      <Link to="/">FEBS</Link>
      <div>
        <Link to="/about" className="px-4">About</Link>
        <Link to="/events" className="px-4">Events</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;