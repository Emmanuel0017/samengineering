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

  /* Close on outside click */
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
      if (event.key === 'Escape') closeAll();
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
            <img src="assets/logo/samuel injini logo.png" alt="S.A.M Engineering" />
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

              {/* SERVICES */}
              <div className="nav-item">
                <div className="dropdown-toggle-wrapper">

                  <NavLink to="/services" className="nav-link" onClick={closeAll}>
                    Services
                  </NavLink>

                  <button
                    className="dropdown-toggle"
                    onClick={() => toggleDropdown('services')}
                    type="button"
                  >
                    <span className={`arrow ${openDropdown === 'services' ? 'rotate' : ''}`}></span>
                  </button>

                </div>

                <div className={`dropdown-menu ${openDropdown === 'services' ? 'mobile-show' : ''}`}>
                  <NavLink to="/services" onClick={closeAll}>Transmission Powerline Construction</NavLink>
                  <NavLink to="/services" onClick={closeAll}>Distribution Powerline Construction</NavLink>
                  <NavLink to="/services" onClick={closeAll}>Building Electrical Services</NavLink>
                  <NavLink to="/services" onClick={closeAll}>Air Conditioning Installation</NavLink>
                  <NavLink to="/services" onClick={closeAll}>Renewable Energy Installation</NavLink>
                </div>
              </div>

              {/* PROJECTS */}
              <div className="nav-item">
                <div className="dropdown-toggle-wrapper">

                  <NavLink to="/projects" className="nav-link" onClick={closeAll}>
                    Projects
                  </NavLink>

                  <button
                    className="dropdown-toggle"
                    onClick={() => toggleDropdown('projects')}
                    type="button"
                  >
                    <span className={`arrow ${openDropdown === 'projects' ? 'rotate' : ''}`}></span>
                  </button>

                </div>

                <div className={`dropdown-menu ${openDropdown === 'projects' ? 'mobile-show' : ''}`}>
                  <NavLink to="/projects" onClick={closeAll}>Powerline Construction</NavLink>
                  <NavLink to="/projects" onClick={closeAll}>Commercial HVAC Installation</NavLink>
                </div>
              </div>

              {/* BLOG */}
              <div className="nav-item">
                <div className="dropdown-toggle-wrapper">

                  <NavLink to="/blog" className="nav-link" onClick={closeAll}>
                    Blog
                  </NavLink>

                  <button
                    className="dropdown-toggle"
                    onClick={() => toggleDropdown('blog')}
                    type="button"
                  >
                    <span className={`arrow ${openDropdown === 'blog' ? 'rotate' : ''}`}></span>
                  </button>

                </div>

                <div className={`dropdown-menu ${openDropdown === 'blog' ? 'mobile-show' : ''}`}>
                  <NavLink to="/blog" onClick={closeAll}>Industrial Systems Integration</NavLink>
                  <NavLink to="/blog" onClick={closeAll}>Energy Distribution Upgrade</NavLink>
                </div>
              </div>

              <NavLink to="/contact" className="nav-link" onClick={closeAll}>
                Contact
              </NavLink>

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

      {isMenuOpen && <div className="menu-overlay" onClick={closeAll}></div>}
    </header>
  );
};

export default Header;