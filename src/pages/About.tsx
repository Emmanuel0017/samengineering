import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb,
  faShieldAlt,
  faStar,
  faHandshake,
  faUserTie,
  faUserTie as faUserTieFemale,
  faBullseye,
  faEye
} from '@fortawesome/free-solid-svg-icons';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>About S.A.M Engineering</h1>
            <p>Leading electromechanical solutions</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-story">
              <h2>Our Story</h2>
              <p>
                Founded in 2020, S.A.M Engineering began as a small electrical and HVAC contracting 
                company with a vision to revolutionize industrial electromechanical 
                solutions. Over the years, we've grown into a comprehensive service 
                provider, serving clients across multiple industries.
              </p>
              <p>
                Our commitment to innovation, quality, and customer satisfaction has 
                been the driving force behind our success. We've completed many  
                projects, each one strengthening our reputation for excellence.
              </p>
            </div>
            <div className="about-mission">
              <h2>Mission & Vision</h2>
              <div className="mission-vision-grid">
                <div className="mission-card">
                  <h3>Our Mission</h3>
                  <FontAwesomeIcon icon={faBullseye} className="mission-icon" />
                  <p>
                    To deliver innovative, reliable, and efficient electromechanical 
                    solutions that empower our clients' success while maintaining the 
                    highest standards of safety and quality.
                  </p>
                </div>
                <div className="vision-card">
                  <h3>Our Vision</h3>
                  <FontAwesomeIcon icon={faEye} className="vision-icon" />
                  <p>
                    To be the leading electromechanical contracting company recognized 
                    for technological innovation, sustainable practices, and exceptional 
                    client service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <span className="value-icon">
                <FontAwesomeIcon icon={faLightbulb} />
              </span>
              <h3>Innovation</h3>
              <p>Embracing new technologies and methodologies to deliver cutting-edge solutions.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">
                <FontAwesomeIcon icon={faShieldAlt} />
              </span>
              <h3>Safety</h3>
              <p>Prioritizing the well-being of our team, clients, and community in all operations.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">
                <FontAwesomeIcon icon={faStar} />
              </span>
              <h3>Quality</h3>
              <p>Delivering exceptional workmanship that exceeds industry standards.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">
                <FontAwesomeIcon icon={faHandshake} />
              </span>
              <h3>Integrity</h3>
              <p>Building trust through transparent communication and ethical practices.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <h2 className="section-title">Leadership Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">
                <FontAwesomeIcon icon={faUserTie} />
              </div>
              <h3>DR. Stanley A. Mbewe</h3>
              <p className="member-role">CEO & Founder</p>
              <p>15+ years in electrical engineering and project management.</p>
            </div>
            <div className="team-member">
              <div className="member-photo">
                <FontAwesomeIcon icon={faUserTieFemale} />
              </div>
              <h3>Paul</h3>
              <p className="member-role">Chief Operations Officer</p>
              <p>Expert in electrical systems and operational efficiency.</p>
            </div>
            <div className="team-member">
              <div className="member-photo">
                <FontAwesomeIcon icon={faUserTie} />
              </div>
              <h3>Patrick Chimkwita</h3>
              <p className="member-role">Technical Director</p>
              <p>Specialized in HVAC systems and mechanical engineering.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section certifications-section">
        <div className="container">
          <h2 className="section-title">Certifications</h2>
          {/* <div className="certifications-grid">
            <div className="certification">
              <span className="cert-icon">
                <FontAwesomeIcon icon={faTrophy} />
              </span>
              <h3>ISO 9001:2015</h3>
              <p>Quality Management System Certified</p>
            </div>
            <div className="certification">
              <span className="cert-icon">
                <FontAwesomeIcon icon={faBolt} />
              </span>
              <h3>NECA Member</h3>
              <p>National Electrical Contractors Association</p>
            </div>
            <div className="certification">
              <span className="cert-icon">
                <FontAwesomeIcon icon={faToolbox} />
              </span>
              <h3>OSHA Certified</h3>
              <p>Occupational Safety and Health Administration</p>
            </div>
            <div className="certification">
              <span className="cert-icon">
                <FontAwesomeIcon icon={faLeaf} />
              </span>
              <h3>Green Building</h3>
              <p>LEED Accredited Professionals</p>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default About;