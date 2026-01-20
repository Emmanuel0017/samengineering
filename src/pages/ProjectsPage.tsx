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
      imageUrl: 'assets/9 (37).jpg',
      completionDate: 'June 2023',
      client: 'Blantyre Industrial Holdings Ltd.',
      location: 'Blantyre Industrial Estate, Malawi',
      technologies: ['Power Distribution', 'Lighting Control', 'Emergency Systems', 'Energy Management', 'Smart Grid']
    },
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