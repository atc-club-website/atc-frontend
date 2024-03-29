import React, { useState, useEffect } from 'react';
import tmLogo from '../assets/tm-logo.png';
import supabase from '../supabase/supabase_init';
import '../css/navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const logoutFromSupabase = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  const checkLoginStatus = async () => {
    const { data, error } = await supabase.auth.getSession()
    console.log(data.session != null);
    if (data.session != null) {
      return true;
    }
    return false;
  }

  useEffect(() => {
    const checkStatus = async () => {
      const status = await checkLoginStatus();
      setIsLoggedIn(status);
    };

    checkStatus();
  }, []);

  const openLogoutModal = (event) => {
    event.preventDefault();
    setIsLogoutModalOpen(true);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <a href='/'>
              <tr>
                <td style={{
                  verticalAlign: 'baseline'
                }}>
                  <img src={tmLogo} style={{
                    width: '80px',
                    marginRight: '25px',
                    marginTop: '5px'
                  }} />
                </td>
                <td style={{
                  verticalAlign: 'middle'
                }}>
                  Aurora Toastmasters Club
                </td>
              </tr>
            </a>
          </div>

          <div className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
            <a href='/aboutUs'>About Us</a>
            <a href='/clubMeetingFormat'>Typical Club Meeting</a>
            <a href='/pathways'>Pathways</a>
            <a href='/clubAchievements'>Achievements</a>
            <a href='/gallery'>Gallery</a>
            <a href='/resources'>Resources</a>
            {
              isLoggedIn ?
                <a href='/' onClick={openLogoutModal}>Logout</a> :
                <a href='/login'>Login</a>
            }
            {isLogoutModalOpen && (
              <dialog open className="logout-modal">
                <h2>Confirm Logout</h2>
                <p style={{
                  fontFamily: 'myriad-pro-r'
                }}>Are you sure you want to log out?</p>
                <button className='logout-no-btn' onClick={() => setIsLogoutModalOpen(false)}>No, stay logged in</button>
                <button className='logout-yes-btn' onClick={logoutFromSupabase}>Yes, log out</button>
              </dialog>
            )}
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