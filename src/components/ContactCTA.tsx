import React from 'react';
import { Link } from 'react-router-dom';
import './ContactCTA.css';

const ContactCTA: React.FC = () => {
  return (
    <section className="contact-cta section">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2>Ready to Power Your Next Project?</h2>
            <p>
              Let's discuss how our electromechanical expertise can bring your vision to life. 
              Contact us today for a free consultation and project assessment.
            </p>
          </div>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary cta-btn">
              Get Free Consultation
            </Link>
            <div className="cta-info">
              <div className="info-item">
                <span className="info-icon">📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="info-item">
                <span className="info-icon">✉️</span>
                <span>info@powertech.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;