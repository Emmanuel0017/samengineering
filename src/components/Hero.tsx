import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">

            {/* 2. Main headline (H1) matching the site */}
            <h1 className="hero-title">
              SMART ACCURATE MODERN ELECHROMECHANICAL ENGINEERING
            </h1>

            {/* 3. Descriptive paragraph */}
            <p className="hero-description">
              WE BELIEVE ENGINEERING SHOULD EMPOWER PEOPLE, STRENGTHEN INDUSTRIES, AND POWER MALAWI'S FUTURE.
            </p>
            <p className="hero-tagline">
              Your Trusted Electromechanical Engineering Experts in Malawi. Delivering High-Quality Industrial and Residential Solutions for Over 10 Years.
            </p>

            {/* 4. Call to Action and Phone - Styled like the reference */}
            <div className="hero-actions">
              <a href="tel:+61387898786" className="btn btn-primary hero-cta">
                CALL US NOW: +265 994 002 138
              </a>
              <Link to="/contact" className="btn btn-secondary">
                GET A QUOTE
              </Link>
            </div>

            {/* 5. Stats can remain, but align with the "16 Years" mention */}
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
                <span className="stat-number">24/7</span>
                <span className="stat-label">Emergency Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;