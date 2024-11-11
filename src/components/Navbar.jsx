import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white px-6 py-4 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-10 w30 mr-2" />
        {/* <span className="text-xl font-bold text-darkgray">MyApp</span> */}
      </div>
      {/* Navigation Links */}
      <ul className="flex space-x-6">
        <li>
          <Link
            to="/"
            className="text-darkgray hover:text-primary transition duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-darkgray hover:text-primary transition duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className="text-darkgray hover:text-primary transition duration-300"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-darkgray hover:text-primary transition duration-300"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
