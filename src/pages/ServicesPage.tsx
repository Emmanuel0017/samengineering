import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBolt,
  faTools,
  faSnowflake,
  faPlug,
  faIndustry,
  faCheck,
  faArrowRight,
  faSolarPanel,
  faVideo,
  faHome,
  faCogs,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons';

interface ServiceDetail {
  id: number;
  icon: any; 
  title: string;
  description: string;
  features: string[];
  applications: string[];
}

const ServicesPage: React.FC = () => {
  const services: ServiceDetail[] = [
  {
    id: 1,
    icon: faBolt,
    title: 'Transmission Powerline Construction & Maintenance',
    description: 'Construction and maintenance of high-voltage power lines that transmit electricity over long distances.',
    features: [
      'High-voltage line construction',
      'Tower and pole installation',
      'Line inspection and repairs',
      'Fault response and restoration',
      'Safety compliance and testing'
    ],
    applications: [
      'National power grids',
      'Power stations',
      'Long-distance electricity transmission',
      'Utility infrastructure projects'
    ]
  },
  {
    id: 2,
    icon: faPlug,
    title: 'Distribution Powerline Construction & Maintenance',
    description: 'Installation and servicing of power lines that distribute electricity to homes, businesses, and communities.',
    features: [
      'Medium and low voltage lines',
      'Pole-mounted equipment installation',
      'Network upgrades and extensions',
      'Fault detection and repairs',
      'Routine maintenance'
    ],
    applications: [
      'Residential areas',
      'Commercial districts',
      'Industrial zones',
      'Urban and rural electrification'
    ]
  },
  {
    id: 3,
    icon: faTools,
    title: 'Building Electrical Services',
    description: 'Complete electrical installations for safe and reliable power within buildings.',
    features: [
      'Electrical wiring and fittings',
      'Lighting and power outlets',
      'Backup power connections',
      'System testing and commissioning',
      'Safety inspections'
    ],
    applications: [
      'Homes and apartments',
      'Office buildings',
      'Schools and hospitals',
      'Retail and commercial spaces'
    ]
  },
  {
    id: 4,
    icon: faSnowflake,
    title: 'Air Conditioning Installation & Maintenance',
    description: 'Installation and maintenance of air conditioning systems for comfortable indoor environments.',
    features: [
      'AC system installation',
      'Routine servicing and cleaning',
      'Fault diagnosis and repairs',
      'Energy-efficient solutions',
      'System performance checks'
    ],
    applications: [
      'Office buildings',
      'Residential properties',
      'Commercial spaces',
      'Industrial and technical rooms'
    ]
  },
  {
    id: 5,
    icon: faSolarPanel,
    title: 'Renewable Energy Installation & Maintenance',
    description: 'Clean and sustainable energy solutions designed to reduce power costs and improve reliability.',
    features: [
      'Solar power system installation',
      'Battery and inverter setup',
      'System monitoring',
      'Preventive maintenance',
      'Energy efficiency improvements'
    ],
    applications: [
      'Homes and businesses',
      'Farms and remote sites',
      'Backup power systems',
      'Off-grid and hybrid solutions'
    ]
  },
  {
    id: 6,
    icon: faIndustry,
    title: 'Industrial Electro-Mechanical Installations & Maintenance',
    description: 'Installation and maintenance of electrical and mechanical systems used in industrial operations.',
    features: [
      'Equipment installation',
      'Electrical and mechanical integration',
      'Preventive maintenance',
      'Fault troubleshooting',
      'System reliability improvement'
    ],
    applications: [
      'Factories',
      'Processing plants',
      'Workshops',
      'Industrial facilities'
    ]
  },
  {
    id: 7,
    icon: faVideo,
    title: 'CCTV & Intercom Systems',
    description: 'Security and communication systems that help monitor premises and control access.',
    features: [
      'CCTV camera installation',
      'Intercom and access control systems',
      'System configuration',
      'Maintenance and support',
      'Remote monitoring setup'
    ],
    applications: [
      'Homes and estates',
      'Office buildings',
      'Commercial properties',
      'Industrial sites'
    ]
  },
  {
    id: 8,
    icon: faHome,
    title: 'House Automation Solutions',
    description: 'Smart home solutions that provide convenient control of lighting, security, and appliances.',
    features: [
      'Smart lighting control',
      'Security system integration',
      'Remote access via mobile devices',
      'Energy usage control',
      'System customization'
    ],
    applications: [
      'Modern homes',
      'Luxury residences',
      'Apartments',
      'Smart offices'
    ]
  },
  {
    id: 9,
    icon: faCogs,
    title: 'Production Plant Installation, Maintenance & Optimization',
    description: 'Installation and improvement of production facilities to ensure efficient and reliable operations.',
    features: [
      'Production equipment installation',
      'Routine and corrective maintenance',
      'System performance optimization',
      'Downtime reduction',
      'Operational efficiency improvements'
    ],
    applications: [
      'Manufacturing plants',
      'Processing facilities',
      'Industrial production lines',
      'Factory upgrades'
    ]
  },
  {
  id: 10,
  icon: faBolt,
  title: 'Energy Audit Services',
  description: 'Comprehensive assessment of energy usage to improve efficiency, reduce costs, and optimize system performance.',
  features: [
    'Energy consumption analysis',
    'Equipment efficiency evaluation',
    'Power loss identification',
    'Energy-saving recommendations',
    'Performance monitoring reports'
  ],
  applications: [
    'Commercial buildings',
    'Industrial facilities',
    'Residential properties',
    'Government and public institutions'
  ]
},
{
  id: 11,
  icon: faLightbulb,
  title: 'Street Lighting Installation & Maintenance',
  description: 'Professional installation and maintenance of street lighting systems for improved visibility, safety, and security.',
  features: [
    'Street light installation',
    'LED lighting upgrades',
    'Electrical cabling and connections',
    'Routine inspection and maintenance',
    'Fault detection and repair'
  ],
  applications: [
    'Urban roads and highways',
    'Residential areas',
    'Industrial zones',
    'Parks and public spaces'
  ]
}
  
];


  return (
    <div className="services-page">
      <section className="services-page-hero">
        <div className="services-hero-background"></div>
        <div className="services-hero-overlay"></div>
        <div className="container">
          <div className="services-hero-content">
            <h1>Our Services</h1>
            <p>Comprehensive electromechanical solutions tailored to your needs</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-intro">
            <h2>Expert Electromechanical Solutions</h2>
            <p>
              With our years of experience, S.A.M Engineering delivers comprehensive 
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
                    <FontAwesomeIcon icon={service.icon} />
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
                        <li key={index}>
                          <FontAwesomeIcon icon={faCheck} className="feature-check" /> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="service-applications">
                    <h4>Applications</h4>
                    <ul>
                      {service.applications.map((application, index) => (
                        <li key={index}>
                          <FontAwesomeIcon icon={faCheck} className="application-check" /> {application}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="service-cta">
                  <Link to="/contact" className="btn btn-primary">
                    Get Quote for {service.title} <FontAwesomeIcon icon={faArrowRight} />
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
              Get Free Consultation <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;