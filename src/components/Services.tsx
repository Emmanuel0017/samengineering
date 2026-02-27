import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface Service {
  id: number;
  image: string;
  title: string;
  description?: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      image: 'assets/PowerLines/Powerlines (3).png',
      title: 'Power Line Construction & Maintenance',
      description:
        'Construction and maintenance of transmission and distribution power lines to ensure reliable electricity supply.'
    },
    {
      id: 2,
      image: 'assets/Electrical/Electrical.jpg',
      title: 'Building Electrical Services',
      description:
        'Complete electrical installations and upgrades for residential, commercial, and industrial buildings.'
    },
    {
      id: 3,
      image: 'assets/HVAC/HVAC (4).png',
      title: 'Air Conditioning Solutions',
      description:
        'Installation and maintenance of air conditioning systems for efficient indoor environments.'
    },
    {
      id: 4,
      image: 'assets/Other/Other (19).jpg',
      title: 'Industrial & Plant Services',
      description:
        'Installation, maintenance, and optimization of industrial equipment and production plants.'
    }
  ];

  return (
    <section className="h-services">
      <div className="h-container">
        <div className="h-section-title">
          <h2>Our Services</h2>
          <p>Comprehensive electromechanical solutions for industrial and commercial needs</p>
        </div>

        <div className="h-services-list">
          {services.map(service => (
            <div key={service.id} className="h-service-item">
              <div className="h-service-image">
                <img src={service.image} alt={service.title} />
              </div>

              <div className="h-service-content">
                <h3 className="h-service-title">{service.title}</h3>
                <p className="h-service-description">{service.description}</p>

                <Link to="/services" className="service-link">
                  Learn More <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="h-services-cta">
          <Link to="/services" className="btn btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;