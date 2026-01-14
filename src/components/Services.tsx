import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBolt, 
  faTools, 
  faSnowflake, 
  faWrench, 
  faPlug, 
  faIndustry,
  faArrowRight,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';

interface Service {
  id: number;
  icon: IconDefinition;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
  {
    id: 1,
    icon: faBolt,
    title: 'Power Line Construction & Maintenance',
    description: 'Construction and maintenance of transmission and distribution power lines to ensure reliable electricity supply.'
  },
  {
    id: 2,
    icon: faPlug,
    title: 'Building Electrical Services',
    description: 'Complete electrical installations and upgrades for residential, commercial, and industrial buildings.'
  },
  {
    id: 3,
    icon: faSnowflake,
    title: 'Air Conditioning Solutions',
    description: 'Installation and maintenance of air conditioning systems for comfortable and efficient indoor environments.'
  },
  {
    id: 4,
    icon: faIndustry,
    title: 'Industrial & Plant Services',
    description: 'Installation, maintenance, and optimization of industrial equipment and production plants.'
  }
];

  return (
    <section className="services section">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>Comprehensive electromechanical solutions for all your needs</p>
        </div>
        
        <div className="services-grid">
          {services.slice(0, 4).map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon 
                  icon={service.icon} 
                  style={{ color: 'var(--dark-blue)' }} 
                />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <Link to="/services" className="service-link">
                Learn More <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="services-cta">
          <Link to="/services" className="btn btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;