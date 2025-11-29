import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              SMART ACCURATE AND MODERN <span className="highlight">ELECTROMECHANICAL</span>  ENGINEERING
            </h1>
            <p className="hero-description">
              Leading electromechanical contracting solutions for industrial, commercial, 
              and residential projects. Innovative, reliable, and efficient systems 
              tailored to your needs.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary hero-cta">
                Get Free Consultation
              </Link>
              <Link to="/projects" className="btn btn-secondary">
                View Our Work
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">100+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Expert Engineers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;