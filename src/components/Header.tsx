import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const toggleDropdown = (name: string) => {
    setOpenDropdown(prev => (prev === name ? null : name));
  };

  const closeAll = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  /* ===========================
     Close on outside click
  ============================ */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        closeAll();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeAll();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">

          {/* Logo */}
          <Link to="/" className="logo" onClick={closeAll}>
            <img src="assets/logo/samuel injini logo.png" alt="S.A.M" />
          </Link>

          {/* Navigation */}
          <div className="nav-wrapper" ref={menuRef}>
            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>

              <NavLink to="/" className="nav-link" onClick={closeAll}>
                Home
              </NavLink>

              <NavLink to="/about" className="nav-link" onClick={closeAll}>
                About
              </NavLink>

              {/* Services Dropdown */}
              <div className="nav-item">
                <button
                  className="nav-link dropdown-toggle"
                  onClick={() => toggleDropdown('services')}
                  type="button"
                >
                  <a href="/services">Services</a>
                  <span className={`arrow ${openDropdown === 'services' ? 'rotate' : ''}`}></span>
                </button>

                <div className={`dropdown-menu ${openDropdown === 'services' ? 'mobile-show' : ''}`}>
                  <NavLink to="/services" onClick={closeAll}>
                    Transmission Powerline Construction & Maintenance
                  </NavLink>
                  <NavLink to="/services" onClick={closeAll}>
                    Distribution Powerline Construction & Maintenance
                  </NavLink>
                  <NavLink to="/services" onClick={closeAll}>
                    Building Electrical Services
                  </NavLink>
                  <NavLink to="/services" onClick={closeAll}>
                    Air Conditioning Installation & Maintenance
                  </NavLink>
                  <NavLink to="/services" onClick={closeAll}>
                    Renewable Energy Installation & Maintenance
                  </NavLink>
                  <NavLink to="/services" onClick={closeAll}>
                    Industrial Electro-Mechanical Installations & Maintenance
                  </NavLink>
                  <NavLink to="/services" onClick={closeAll}>
                    House Automation Solutions
                  </NavLink>
                  <NavLink to="/services" onClick={closeAll}>
                    Production Plant Installation, Maintenance & Optimization
                  </NavLink>
                  <NavLink to="/services" onClick={closeAll}>
                    Energy Audit Services
                  </NavLink>
                  <NavLink to="/services" onClick={closeAll}>
                    Street Lighting Installation & Maintenance
                  </NavLink>
                </div>
              </div>

              {/* Projects Dropdown */}
              <div className="nav-item">
                <button
                  className="nav-link dropdown-toggle"
                  onClick={() => toggleDropdown('projects')}
                  type="button"
                >
                  <a href="/projects">Projects</a>
                  <span className={`arrow ${openDropdown === 'projects' ? 'rotate' : ''}`}></span>
                </button>

                <div className={`dropdown-menu ${openDropdown === 'projects' ? 'mobile-show' : ''}`}>
                  <NavLink to="/projects" onClick={closeAll}>
                    Powerline Construction Project
                  </NavLink>
                  <NavLink to="/projects" onClick={closeAll}>
                    Commercial HVAC Installation
                  </NavLink>
                  <NavLink to="/projects" onClick={closeAll}>
                    Network Tower Inspection and Maintenance
                  </NavLink>
                </div>
              </div>

              {/* Blog Dropdown */}
              <div className="nav-item">
                <button
                  className="nav-link dropdown-toggle"
                  onClick={() => toggleDropdown('blog')}
                  type="button"
                >
                  <a href="/blog">Blog</a>
                  <span className={`arrow ${openDropdown === 'blog' ? 'rotate' : ''}`}></span>
                </button>

                <div className={`dropdown-menu ${openDropdown === 'blog' ? 'mobile-show' : ''}`}>
                  <NavLink to="/blog" onClick={closeAll}>
                    Industrial Plant Construction: Electromechanical Systems Integration
                  </NavLink>
                  <NavLink to="/blog" onClick={closeAll}>
                    Powerline Construction Project: Enhancing Energy Distribution in Nkhotakota
                  </NavLink>
                  <NavLink to="/blog" onClick={closeAll}>
                    Commercial HVAC Installation: Smart Climate Control for CEAR Offices
                  </NavLink>
                </div>
              </div>

              <NavLink to='/contact' className="nav-link" onClick={closeAll}>Contacts</NavLink>

            </nav>
          </div>

          {/* Header Actions */}
          <div className="header-actions">

            <a href="tel:+265994002138" className="btn-phone">
              <FontAwesomeIcon icon={faPhone}/>
              +265 994 002 138
            </a>

            <Link to="/contact" className="btn-quote">
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

      {isMenuOpen && (
        <div className="menu-overlay" onClick={closeAll}></div>
      )}
    </header>
  );
};

export default Header;