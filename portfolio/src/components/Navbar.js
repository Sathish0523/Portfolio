import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-links">
          <button 
            className="navbar-link" 
            onClick={() => scrollToSection('home')}
          >
            Home
          </button>
          <button 
            className="navbar-link" 
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
          <button 
            className="navbar-link" 
            onClick={() => scrollToSection('experience')}
          >
            Professional
          </button>
          <button 
            className="navbar-link" 
            onClick={() => scrollToSection('skills')}
          >
            Skills
          </button>
          <button 
            className="navbar-link" 
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
