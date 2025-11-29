import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesPage.css';

interface ServiceDetail {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
  applications: string[];
}

const ServicesPage: React.FC = () => {
  const services: ServiceDetail[] = [
    {
      id: 1,
      icon: '⚡',
      title: 'Electrical Systems',
      description: 'Comprehensive electrical solutions for industrial, commercial, and residential applications.',
      features: [
        'Power distribution design',
        'Lighting systems installation',
        'Emergency power systems',
        'Energy management',
        'Electrical safety audits'
      ],
      applications: [
        'Manufacturing facilities',
        'Office buildings',
        'Healthcare facilities',
        'Educational institutions',
        'Retail spaces'
      ]
    },
    {
      id: 2,
      icon: '🔧',
      title: 'Mechanical Installation',
      description: 'Professional mechanical systems installation and commissioning services.',
      features: [
        'Piping systems',
        'Equipment installation',
        'Ventilation systems',
        'Pump and compressor setup',
        'System testing'
      ],
      applications: [
        'Industrial plants',
        'HVAC systems',
        'Process piping',
        'Mechanical equipment',
        'Utility systems'
      ]
    },
    {
      id: 3,
      icon: '❄️',
      title: 'HVAC Solutions',
      description: 'Heating, ventilation, and air conditioning systems for optimal environmental control.',
      features: [
        'System design and calculation',
        'Ductwork installation',
        'Chiller and boiler systems',
        'Energy recovery',
        'Building automation integration'
      ],
      applications: [
        'Commercial buildings',
        'Industrial facilities',
        'Data centers',
        'Healthcare facilities',
        'Residential complexes'
      ]
    },
    {
      id: 4,
      icon: '🛠️',
      title: 'Maintenance Services',
      description: 'Preventive and corrective maintenance programs to ensure system reliability.',
      features: [
        'Scheduled maintenance',
        '24/7 emergency response',
        'Predictive maintenance',
        'System optimization',
        'Performance monitoring'
      ],
      applications: [
        'Equipment maintenance',
        'System upgrades',
        'Troubleshooting',
        'Performance optimization',
        'Lifecycle management'
      ]
    },
    {
      id: 5,
      icon: '🔌',
      title: 'Power Distribution',
      description: 'Efficient power distribution systems design and implementation.',
      features: [
        'Transformer installation',
        'Switchgear setup',
        'Power quality analysis',
        'Grounding systems',
        'Protection coordination'
      ],
      applications: [
        'Electrical substations',
        'Power plants',
        'Industrial complexes',
        'Commercial centers',
        'Renewable energy integration'
      ]
    },
    {
      id: 6,
      icon: '🏭',
      title: 'Industrial Automation',
      description: 'Advanced automation solutions for improved efficiency and productivity.',
      features: [
        'PLC programming',
        'SCADA systems',
        'Process control',
        'Robotics integration',
        'Data acquisition'
      ],
      applications: [
        'Manufacturing lines',
        'Process industries',
        'Material handling',
        'Quality control',
        'Production monitoring'
      ]
    }
  ];

  return (
    <div className="services-page">
      <section className="page-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive electromechanical solutions tailored to your needs</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-intro">
            <h2>Expert Electromechanical Solutions</h2>
            <p>
              With over 18 years of experience, PowerTech delivers comprehensive 
              electromechanical services that combine technical expertise with 
              innovative solutions. Our team of certified professionals ensures 
              every project meets the highest standards of quality and safety.
            </p>
          </div>

          <div className="services-detailed">
            {services.map(service => (
              <div key={service.id} className="service-detail">
                <div className="service-header">
                  <div className="service-icon-large">
                    {service.icon}
                  </div>
                  <div className="service-info">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
                
                <div className="service-content">
                  <div className="service-features">
                    <h4>Key Features</h4>
                    <ul>
                      {service.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="service-applications">
                    <h4>Applications</h4>
                    <ul>
                      {service.applications.map((application, index) => (
                        <li key={index}>{application}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="service-cta">
                  <Link to="/contact" className="btn btn-primary">
                    Get Quote for {service.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Contact us today to discuss your electromechanical needs</p>
            <Link to="/contact" className="btn btn-primary btn-large">
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;