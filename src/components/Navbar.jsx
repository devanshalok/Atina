// src/components/Navbar.jsx
import React, { useState } from 'react';
import AuthModal from './AuthModal';

function Navbar() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const openAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <nav className="flex items-center justify-between bg-white px-6 py-4 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-12 w-30 mr-2" />
        {/* <span className="text-xl font-bold text-darkgray">MyApp</span> */}
      </div>

      {/* Navigation Links and Sign In Button */}
      <div className="flex items-center space-x-6">
        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="text-darkgray hover:text-primary transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-darkgray hover:text-primary transition duration-300">
              About
            </a>
          </li>
          <li>
            <a href="/services" className="text-darkgray hover:text-primary transition duration-300">
              Services
            </a>
          </li>
          <li>
            <a href="/contact" className="text-darkgray hover:text-primary transition duration-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Sign In Button */}
        <button
          onClick={openAuthModal}
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300"
        >
          Sign In
        </button>
      </div>

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
    </nav>
  );
}

export default Navbar;
