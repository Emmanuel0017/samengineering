import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">S.A.M Engineering</span>
              
            </div>
            <p className="footer-description">
              Leading electromechanical contracting company providing innovative solutions 
              for industrial and commercial projects.
            </p>
            <div className="social-links">
              <a href="/" className="social-link"><FontAwesomeIcon icon={faLinkedin} size='2x'/></a>
              <a href="/" className="social-link"><FontAwesomeIcon icon={faXTwitter} size='2x'/></a>
              <a href="/" className="social-link"><FontAwesomeIcon icon={faFacebook} size='2x'/></a>
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
              <a href="/" className="footer-link">Electrical Systems</a>
              <a href="/" className="footer-link">Mechanical Installation</a>
              <a href="/" className="footer-link">HVAC Solutions</a>
              <a href="/" className="footer-link">Maintenance</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="f-contact-info">
              <div className="f-contact-item">
                <span className="f-contact-icon"><FontAwesomeIcon icon={faLocationPin}/></span>
                naperi, p/bag 303, Blantyre
              </div>
              <div className="f-contact-item">
                <span className="f-contact-icon"><FontAwesomeIcon icon={faPhone}/></span>
                +265 991 548 657
              </div>
              <div className="f-contact-item">
                <span className="f-contact-icon"><FontAwesomeIcon icon={faEnvelope}/></span>
                info@samengineering.com
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
          <p>&copy; 2025 S.A.M Engineering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;