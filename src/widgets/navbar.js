import React, { useState } from 'react';
import tmLogo from '../assets/tm-logo.png';
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
            <a href='/'>
              Aurora Toastmasters Club
            </a>
          </div>

          <div className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
            <a href='/aboutUs'>About Us</a>
            <a href='/clubMeetingFormat'>Typical Club Meeting</a>
            <a href='/pathways'>Pathways Modules</a>
            <a href='/clubAchievements'>Achievements</a>
            <a href='#'>Photo Gallery</a>
            <a href='/resources'>Resources</a>
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
