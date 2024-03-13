import React, { useState } from 'react';
import '../css/navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <a href='#'>Aurora Toastmasters Club</a>
          </div>

          <div className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
            <a href='#'>Latest News</a>
            <a href='#'>About Us</a>
            <a href='#'>Pathways Modules</a>
            <a href='#'>Acheivements</a>
            <a href='#'>Photo Gallery</a>
          </div>

          <div className="navbar-toggle" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
