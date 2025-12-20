import React from 'react';
import { Link } from 'react-router-dom';
import './ContactCTA.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactCTA: React.FC = () => {
  return (
    <section className="contact-cta section">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2>Ready to Power Your Next Project?</h2>
            <p>
              Let's discuss how our electromechanical expertise can bring your vision to life. 
              Contact us today for a consultation and project assessment.
            </p>
          </div>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary cta-btn">
              Get Consultation
            </Link>
            <div className="cta-info">
              <div className="info-item">
                <span className="info-icon"><FontAwesomeIcon icon={faPhone}/></span>
                <span><a href="tel:+265 991 548 657">+265 991 548 657</a></span>
              </div>
              <div className="info-item">
                <span className="info-icon"><FontAwesomeIcon icon={faEnvelope}/></span>
                <span><a href="mailto:info@samengineering.com">info@samengineering.com</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;