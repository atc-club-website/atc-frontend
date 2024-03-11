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
            <a href='#'>Projectile</a>
            <a href='#'>Simple Harmonic</a>
            <a href='#'>Wave</a>
            <a href='#'>Thermal Expansion</a>
            <a href='#'>Free Fall</a>
          </div>

          <div className="navbar-toggle" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default Navbar;
