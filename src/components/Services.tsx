import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      icon: '⚡',
      title: 'Electrical Systems',
      description: 'Complete electrical installation, maintenance, and upgrade services for industrial and commercial facilities.'
    },
    {
      id: 2,
      icon: '🔧',
      title: 'Mechanical Installation',
      description: 'Professional mechanical systems installation including piping, machinery, and equipment setup.'
    },
    {
      id: 3,
      icon: '❄️',
      title: 'HVAC Solutions',
      description: 'Heating, ventilation, and air conditioning systems design, installation, and maintenance.'
    },
    {
      id: 4,
      icon: '🛠️',
      title: 'Maintenance Services',
      description: 'Preventive and corrective maintenance programs to ensure optimal system performance.'
    },
    {
      id: 5,
      icon: '🔌',
      title: 'Power Distribution',
      description: 'Design and installation of efficient power distribution systems for various applications.'
    },
    {
      id: 6,
      icon: '🏭',
      title: 'Industrial Automation',
      description: 'Automation solutions to improve efficiency and productivity in industrial processes.'
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
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <Link to="/services" className="service-link">
                Learn More →
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