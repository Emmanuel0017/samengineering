import React from 'react';
import { Link } from 'react-router-dom';
import './AboutSnippet.css';

const AboutSnippet: React.FC = () => {
  return (
    <section className="about-snippet section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Trusted Electromechanical Experts </h2>
            <p>
              With our experience, S.A.M Engineering has established itself as a 
              leading provider of comprehensive electromechanical solutions. Our team 
              of certified engineers and technicians delivers innovative, reliable, and 
              efficient systems tailored to meet the unique needs of each client.
            </p>
            <p>
              We pride ourselves on our commitment to quality, safety, and customer 
              satisfaction. From initial design to final implementation, we ensure 
              every project meets the highest industry standards.
            </p>
            
            <Link to="/about" className="btn btn-primary">
              Learn More About Us
            </Link>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              {/* <img src="assets/9 (7).jpg" alt="industrial excellence" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnippet;