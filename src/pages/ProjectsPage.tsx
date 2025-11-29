import React, { useState } from 'react';
import './ProjectsPage.css';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
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
      title: 'Industrial Plant Electrical Upgrade',
      category: 'electrical',
      description: 'Complete electrical system modernization',
      fullDescription: 'Comprehensive electrical system upgrade for a major manufacturing facility, including new power distribution, lighting systems, and emergency power solutions.',
      image: '⚡',
      completionDate: '2023',
      client: 'TechManufacture Inc.',
      location: 'Industrial Park, TC',
      technologies: ['Power Distribution', 'Lighting Control', 'Emergency Systems']
    },
    {
      id: 2,
      title: 'Commercial HVAC Installation',
      category: 'hvac',
      description: 'Energy-efficient HVAC system installation',
      fullDescription: 'Design and installation of a state-of-the-art HVAC system for a commercial office complex, focusing on energy efficiency and occupant comfort.',
      image: '❄️',
      completionDate: '2023',
      client: 'Global Logistics Corp',
      location: 'Business District, TC',
      technologies: ['HVAC Design', 'Energy Recovery', 'Building Automation']
    },
    {
      id: 3,
      title: 'Factory Automation System',
      category: 'automation',
      description: 'Automated control systems implementation',
      fullDescription: 'Implementation of advanced automation and control systems to optimize production efficiency and quality control in manufacturing processes.',
      image: '🏭',
      completionDate: '2022',
      client: 'AutoParts Manufacturing',
      location: 'Industrial Zone, TC',
      technologies: ['PLC Systems', 'SCADA', 'Process Control']
    },
    {
      id: 4,
      title: 'Power Distribution Center',
      category: 'electrical',
      description: 'New power distribution hub construction',
      fullDescription: 'Construction and commissioning of a new power distribution center to serve growing industrial demands in the region.',
      image: '🔌',
      completionDate: '2022',
      client: 'Regional Power Authority',
      location: 'Energy Park, TC',
      technologies: ['Transformer Systems', 'Switchgear', 'Protection Systems']
    },
    {
      id: 5,
      title: 'Mechanical Systems Maintenance',
      category: 'maintenance',
      description: 'Preventive maintenance program',
      fullDescription: 'Comprehensive preventive maintenance program for mechanical systems in a large industrial facility, ensuring optimal performance and reliability.',
      image: '🛠️',
      completionDate: '2023',
      client: 'Process Industries Ltd.',
      location: 'Manufacturing Complex, TC',
      technologies: ['Predictive Maintenance', 'System Optimization', 'Performance Monitoring']
    },
    {
      id: 6,
      title: 'Renewable Energy Integration',
      category: 'electrical',
      description: 'Solar power integration project',
      fullDescription: 'Integration of solar power systems with existing electrical infrastructure for a commercial building, reducing carbon footprint and energy costs.',
      image: '☀️',
      completionDate: '2022',
      client: 'EcoBusiness Center',
      location: 'Green Park, TC',
      technologies: ['Solar PV', 'Grid Integration', 'Energy Management']
    },
    {
      id: 7,
      title: 'Hospital HVAC Upgrade',
      category: 'hvac',
      description: 'Critical environment HVAC systems',
      fullDescription: 'Upgrade of specialized HVAC systems for hospital critical care areas, ensuring precise environmental control and air quality.',
      image: '🏥',
      completionDate: '2023',
      client: 'City Medical Center',
      location: 'Medical District, TC',
      technologies: ['Critical HVAC', 'Air Quality', 'Pressure Control']
    },
    {
      id: 8,
      title: 'Water Treatment Plant Automation',
      category: 'automation',
      description: 'Process automation implementation',
      fullDescription: 'Implementation of automated control systems for water treatment processes, improving efficiency and regulatory compliance.',
      image: '💧',
      completionDate: '2022',
      client: 'Municipal Water Authority',
      location: 'Water Works, TC',
      technologies: ['Process Automation', 'SCADA', 'Remote Monitoring']
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'electrical', label: 'Electrical' },
    { key: 'hvac', label: 'HVAC' },
    { key: 'automation', label: 'Automation' },
    { key: 'maintenance', label: 'Maintenance' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="projects-page">
      <section className="page-hero">
        <div className="container">
          <h1>Our Projects</h1>
          <p>Explore our portfolio of successful electromechanical projects</p>
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
                  <span className="project-icon-large">{project.image}</span>
                </div>
                <div className="project-content-detailed">
                  <div className="project-meta">
                    <span className="project-category">{project.category}</span>
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