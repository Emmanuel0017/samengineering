import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Industrial Plant Electrical Upgrade',
      category: 'electrical',
      description: 'Complete electrical system modernization for manufacturing facility with advanced power distribution and control systems.',
      imageUrl: 'assets/1.jpeg'
    },
    {
      id: 2,
      title: 'Commercial HVAC Installation',
      category: 'hvac',
      description: 'Energy-efficient HVAC system installation for modern office complex with smart climate control technology.',
      imageUrl: 'assets/3.jpeg'
    },
    {
      id: 3,
      title: 'Factory Automation System',
      category: 'automation',
      description: 'Advanced automation and robotics integration for production line optimization and efficiency improvement.',
      imageUrl: 'assets/5.jpeg'
    },
    {
      id: 4,
      title: 'Power Distribution Center',
      category: 'electrical',
      description: 'New high-capacity power distribution hub serving industrial park with redundant backup systems.',
      imageUrl: 'assets/4.jpeg'
    },
    {
      id: 5,
      title: 'Mechanical Systems Maintenance',
      category: 'maintenance',
      description: 'Comprehensive preventive maintenance program for industrial machinery and mechanical equipment.',
      imageUrl: 'assets/1.jpeg'
    },
    {
      id: 6,
      title: 'Renewable Energy Integration',
      category: 'electrical',
      description: 'Solar power system integration with existing electrical infrastructure for commercial building.',
      imageUrl: 'assets/2'
    },
    {
      id: 7,
      title: 'Water Treatment Plant',
      category: 'mechanical',
      description: 'Complete mechanical and electrical systems for municipal water treatment facility.',
      imageUrl: 'assets/3.jpeg'
    },
    {
      id: 8,
      title: 'Data Center Cooling',
      category: 'hvac',
      description: 'Specialized precision cooling system for high-density data center with redundant backup.',
      imageUrl: 'assets/4.jpeg'
    },
    {
      id: 9,
      title: 'Manufacturing Plant Control Systems',
      category: 'automation',
      description: 'PLC and SCADA system implementation for automated manufacturing process control.',
      imageUrl: 'assets/5.jpeg'
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
    <section className="projects section">
      <div className="container">
        <div className="section-title">
          <h2>Featured Projects</h2>
          <p>Explore our recent electromechanical projects and solutions</p>
        </div>

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

        <div className="projects-grid">
          {filteredProjects.slice(0, 3).map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
                <div className="image-overlay">
                  <span className="project-category-badge">{project.category}</span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <Link to={`/projects/${project.id}`} className="project-link">
                  View Details <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <Link to="/projects" className="btn btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;