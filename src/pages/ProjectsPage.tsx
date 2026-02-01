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
  title: 'Powerline Construction Project',
  category: 'electrical',
  description: 'Installation of high-voltage power lines to enhance area electricity distribution and reliability.',
  fullDescription: 'Comprehensive construction of electrical powerlines, including the installation of durable poles and high-voltage cables to improve electricity distribution and reliability across the area. The project ensured safe, efficient, and sustainable energy delivery for residential and commercial users.',
  imageUrl: 'assets/9 (27).png',
  completionDate: 'November 2025',
  client: 'Illovo Ltd.',
  location: 'Nkhotakota, Dwangwa',
  technologies: ['High-Voltage Powerlines', 'Electrical Poles', 'Energy Distribution', 'Safety Compliance', 'Sustainable Construction']
},
{
  id: 2,
  title: 'Commercial HVAC Installation',
  category: 'hvac',
  description: 'Energy-efficient HVAC system installation for modern office complex with smart climate control technology.',
  fullDescription: 'Installation of a state-of-the-art, energy-efficient HVAC system in a modern office complex. The project included smart climate control systems, air quality monitoring, and energy optimization strategies to ensure comfortable and sustainable working environments.',
  imageUrl: 'assets/A1.png',
  completionDate: 'September 2023',
  client: 'Central East African Railways(CEAR)',
  location: 'Blantyre, Lilongwe, Balaka, Liwonde, Malawi',
  technologies: ['HVAC Systems', 'Smart Climate Control', 'Energy Optimization', 'Air Quality Management', 'Sustainable Cooling']
},
{
  id: 3,
  title: 'Network Tower Inspection and Maintenance',
  category: 'maintenance',
  description: 'Routine inspection and maintenance services for telecom network towers to ensure optimal performance and safety compliance.',
  fullDescription: 'Regular inspection and maintenance of telecom network towers to guarantee uninterrupted network performance and compliance with safety standards. Tasks included structural integrity checks, antenna alignment, electrical system verification, and preventive maintenance to minimize downtime.',
  imageUrl: 'assets/11 (1).png',
  completionDate: 'July 2024',
  client: 'CEAR',
  location: 'Liwonde, Mwanza',
  technologies: ['Telecom Tower Maintenance', 'Structural Inspection', 'Preventive Maintenance', 'Network Optimization', 'Safety Compliance']
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