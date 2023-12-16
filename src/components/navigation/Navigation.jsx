// src/components/Navigation.jsx
import React, { useState } from 'react';
import './navigation.css'; // Import the CSS file
import logo from '../../assets/logo.png'
const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      // Close mobile menu after clicking on a section (if open)
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navigation ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <div className="logo"><img className='logo' src={logo} alt='Logo'/></div>
      <div className="menu">
        <ul className={`nav-list ${isMobileMenuOpen ? 'open' : ''}`}>
          <li>
            <button onClick={() => scrollToSection('author')}>About the author</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('order')}>Order your copy</button>
          </li>
          {/* Add more buttons for other sections */}
        </ul>
        <div className="mobile-menu-button" onClick={toggleMobileMenu}>
          &#9776; {/* Hamburger menu icon */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
