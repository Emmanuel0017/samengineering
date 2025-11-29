import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">⚡</span>
              PowerTech
            </div>
            <p className="footer-description">
              Leading electromechanical contracting company providing innovative solutions 
              for industrial and commercial projects since 2005.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">Facebook</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/services" className="footer-link">Services</Link>
              <Link to="/projects" className="footer-link">Projects</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </div>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <div className="footer-links">
              <a href="#" className="footer-link">Electrical Systems</a>
              <a href="#" className="footer-link">Mechanical Installation</a>
              <a href="#" className="footer-link">HVAC Solutions</a>
              <a href="#" className="footer-link">Maintenance</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                123 Industrial Way, Tech City, TC 12345
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                +1 (555) 123-4567
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                info@powertech.com
              </div>
            </div>
          </div>

          <div className="footer-section newsletter">
            <h4>Newsletter</h4>
            <p>Subscribe to get updates on our latest projects and services.</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input"
                required
              />
              <button type="submit" className="btn btn-primary newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 PowerTech Electromechanical. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;