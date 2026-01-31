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
            <h2 className="hero-title"> 
              SMART ACCURATE AND MODERN ELECTROMECHANICAL ENGINEERING
            </h2>
            <p className="hero-description">
              WE BELIEVE ENGINEERING SHOULD EMPOWER PEOPLE, STRENGTHEN INDUSTRIES, AND POWER MALAWI'S FUTURE.
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