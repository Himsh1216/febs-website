// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-800 p-4 text-white">
    <div className="flex justify-between">
      <Link to="/">FEBS</Link>
      <div>
        <Link to="/team" className="px-4">Team</Link>
        <Link to="/resources" className="px-4">Resources</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;