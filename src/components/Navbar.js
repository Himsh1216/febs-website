// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => (React.createElement("nav", { className: "bg-gray-800 p-4 text-white" },
    React.createElement("div", { className: "flex justify-between" },
        React.createElement(Link, { to: "/" }, "FEBS"),
        React.createElement("div", null,
            React.createElement(Link, { to: "/team", className: "px-4" }, "Team"),
            React.createElement(Link, { to: "/resources", className: "px-4" }, "Resources")))));
export default Navbar;
