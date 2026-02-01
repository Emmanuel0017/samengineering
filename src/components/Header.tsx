import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    // Close menu when clicking escape key
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src="assets/logo/samuel injini logo.png" alt="S.A.M" />
          </Link>
          
          <div className="nav-wrapper" ref={menuRef}>
            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
              <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
              <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
              <Link to="/services" className="nav-link" onClick={closeMenu}>Services</Link>
              <Link to="/projects" className="nav-link" onClick={closeMenu}>Projects</Link>
              <Link to="/blog" className="nav-link" onClick={closeMenu}>Blog</Link>
              <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
            </nav>
          </div>

          <div className="header-actions">
            <Link to="/contact" className="btn btn-primary header-cta">
              Get Quote
            </Link>
            <button 
              ref={buttonRef}
              className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Overlay for closing menu when clicking outside */}
      {isMenuOpen && (
        <div 
          className="menu-overlay" 
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header;