import React, { useState } from 'react';
import './ProjectsPage.css';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
  completionDate: string;
  client: string;
  location: string;
  technologies: string[];
}

const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Blantyre Industrial Estate Electrical Upgrade',
      category: 'electrical',
      description: 'Complete electrical system modernization',
      fullDescription: 'Comprehensive electrical system upgrade for Blantyre Industrial Estate manufacturing facilities, including new power distribution, lighting systems, and emergency power solutions. The project involved replacing outdated equipment with energy-efficient systems and implementing smart control technologies.',
      imageUrl: 'assets/1.jpeg',
      completionDate: 'June 2023',
      client: 'Blantyre Industrial Holdings Ltd.',
      location: 'Blantyre Industrial Estate, Malawi',
      technologies: ['Power Distribution', 'Lighting Control', 'Emergency Systems', 'Energy Management', 'Smart Grid']
    },
    {
      id: 2,
      title: 'Lilongwe City Center HVAC Installation',
      category: 'hvac',
      description: 'Energy-efficient HVAC system installation',
      fullDescription: 'Design and installation of a state-of-the-art HVAC system for Capital City Business Complex in Lilongwe, focusing on energy efficiency and occupant comfort. The system includes advanced air filtration, zoning controls, and energy recovery ventilators.',
      imageUrl: 'assets/2',
      completionDate: 'August 2023',
      client: 'Capital City Development Corporation',
      location: 'City Center, Lilongwe',
      technologies: ['HVAC Design', 'Energy Recovery', 'Building Automation', 'Air Quality', 'Ventilation']
    },
    {
      id: 3,
      title: 'Kasungu Tobacco Factory Automation',
      category: 'automation',
      description: 'Automated control systems implementation',
      fullDescription: 'Implementation of advanced automation and control systems to optimize production efficiency and quality control in tobacco processing. The system integrates robotics, conveyor systems, and quality inspection for Malawi\'s largest tobacco processing facility.',
      imageUrl: 'assets/3.jpeg',
      completionDate: 'March 2022',
      client: 'Kasungu Tobacco Processors',
      location: 'Kasungu Industrial Area, Malawi',
      technologies: ['PLC Systems', 'SCADA', 'Process Control', 'Robotics', 'Quality Control']
    },
    {
      id: 4,
      title: 'Mzuzu Power Distribution Center',
      category: 'electrical',
      description: 'New power distribution hub construction',
      fullDescription: 'Construction and commissioning of a new power distribution center to serve growing industrial and residential demands in Northern Region. The facility features redundant power sources and advanced monitoring systems.',
      imageUrl: 'assets/4.jpeg',
      completionDate: 'November 2022',
      client: 'Northern Region Power Authority',
      location: 'Mzuzu Industrial Park, Malawi',
      technologies: ['Transformer Systems', 'Switchgear', 'Protection Systems', 'Power Monitoring', 'Redundancy']
    },
    {
      id: 5,
      title: 'Salima Sugar Mill Maintenance',
      category: 'maintenance',
      description: 'Preventive maintenance program',
      fullDescription: 'Comprehensive preventive maintenance program for mechanical systems at Salima Sugar Mill, ensuring optimal performance and reliability during processing seasons. The program includes regular inspections, lubrication, and replacement schedules.',
      imageUrl: 'assets/5.jpeg',
      completionDate: 'Ongoing',
      client: 'Salima Sugar Company Ltd.',
      location: 'Salima, Lake Shore, Malawi',
      technologies: ['Predictive Maintenance', 'System Optimization', 'Performance Monitoring', 'Vibration Analysis', 'Thermal Imaging']
    },
    {
      id: 6,
      title: 'Solar Power Integration - Queen Elizabeth Central Hospital',
      category: 'electrical',
      description: 'Solar power integration project',
      fullDescription: 'Integration of solar power systems with existing electrical infrastructure for Queen Elizabeth Central Hospital, reducing carbon footprint and energy costs while ensuring uninterrupted power for critical medical equipment.',
      imageUrl: 'assets/1.jpeg',
      completionDate: 'September 2022',
      client: 'Ministry of Health, Malawi',
      location: 'Blantyre, Malawi',
      technologies: ['Solar PV', 'Grid Integration', 'Energy Management', 'Battery Storage', 'Smart Grid']
    },
    {
      id: 7,
      title: 'Kamuzu Central Hospital HVAC Upgrade',
      category: 'hvac',
      description: 'Critical environment HVAC systems',
      fullDescription: 'Upgrade of specialized HVAC systems for hospital critical care areas including operating theaters and ICU, ensuring precise environmental control and air quality. The system maintains strict temperature, humidity, and pressure differentials.',
      imageUrl: 'assets/2',
      completionDate: 'May 2023',
      client: 'Kamuzu Central Hospital',
      location: 'Lilongwe, Malawi',
      technologies: ['Critical HVAC', 'Air Quality', 'Pressure Control', 'HEPA Filtration', 'Redundant Systems']
    },
    {
      id: 8,
      title: 'Blantyre Water Board Automation',
      category: 'automation',
      description: 'Process automation implementation',
      fullDescription: 'Implementation of automated control systems for water treatment processes at Blantyre Water Board\'s main treatment plant, improving efficiency and regulatory compliance. The system monitors and controls chemical dosing, filtration, and distribution.',
      imageUrl: 'assets/3.jpeg',
      completionDate: 'December 2022',
      client: 'Blantyre Water Board',
      location: 'Mudi Dam, Blantyre, Malawi',
      technologies: ['Process Automation', 'SCADA', 'Remote Monitoring', 'Chemical Control', 'Flow Management']
    },
    {
      id: 9,
      title: 'Lilongwe University Mechanical Systems',
      category: 'mechanical',
      description: 'Campus-wide mechanical installation',
      fullDescription: 'Comprehensive mechanical systems installation for new campus buildings at Lilongwe University of Agriculture and Natural Resources, including laboratory ventilation, plumbing, and specialized equipment setup.',
      imageUrl: 'assets/4.jpeg',
      completionDate: 'October 2023',
      client: 'LUANAR University',
      location: 'Bunda Campus, Lilongwe, Malawi',
      technologies: ['Laboratory Ventilation', 'Plumbing Systems', 'Equipment Installation', 'Water Treatment', 'Pressure Systems']
    },
    {
      id: 10,
      title: 'Mulanje Hydropower Electrical Systems',
      category: 'electrical',
      description: 'Hydroelectric power plant electrical',
      fullDescription: 'Electrical systems installation and commissioning for Mulanje Mountain hydropower project, including generator controls, distribution networks, and grid synchronization systems for renewable energy production.',
      imageUrl: 'assets/5.jpeg',
      completionDate: 'July 2023',
      client: 'Mulanje Renewable Energy Ltd.',
      location: 'Mulanje Mountain, Malawi',
      technologies: ['Hydro Generator Control', 'Power Distribution', 'Grid Synchronization', 'Protection Systems', 'Renewable Integration']
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'electrical', label: 'Electrical' },
    { key: 'hvac', label: 'HVAC' },
    { key: 'automation', label: 'Automation' },
    { key: 'maintenance', label: 'Maintenance' },
    { key: 'mechanical', label: 'Mechanical' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="projects-page">
      <section className="project-page-hero">
        <div className="project-hero-background"></div>
        <div className="project-hero-overlay"></div>
        <div className="container">
          <div className="project-hero-content">
            <h1>Our Projects</h1>
            <p>Explore our portfolio of successful electromechanical projects across Malawi</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="projects-filters">
            {categories.map(category => (
              <button
                key={category.key}
                className={`filter-btn ${activeFilter === category.key ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.key)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="projects-grid-detailed">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-card-detailed">
                <div className="project-image-large">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                  <div className="image-category-overlay">
                    <span className="project-category-badge">{project.category}</span>
                  </div>
                </div>
                <div className="project-content-detailed">
                  <div className="project-meta">
                    <span className="project-year">{project.completionDate}</span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.fullDescription}</p>
                  
                  <div className="project-details">
                    <div className="detail-item">
                      <strong>Client:</strong> {project.client}
                    </div>
                    <div className="detail-item">
                      <strong>Location:</strong> {project.location}
                    </div>
                    <div className="detail-item">
                      <strong>Scope:</strong> {project.description}
                    </div>
                  </div>

                  <div className="project-technologies">
                    <h4>Technologies & Solutions</h4>
                    <div className="tech-tags">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <h3>No projects found for the selected category</h3>
              <p>Please try selecting a different category or view all projects.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;