import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Industrial Plant Electrical Upgrade',
      category: 'electrical',
      description: 'Complete electrical system modernization for manufacturing facility.',
      image: '⚡'
    },
    {
      id: 2,
      title: 'Commercial HVAC Installation',
      category: 'hvac',
      description: 'Energy-efficient HVAC system for office complex.',
      image: '❄️'
    },
    {
      id: 3,
      title: 'Factory Automation System',
      category: 'automation',
      description: 'Automated control systems for production line optimization.',
      image: '🏭'
    },
    {
      id: 4,
      title: 'Power Distribution Center',
      category: 'electrical',
      description: 'New power distribution hub for industrial park.',
      image: '🔌'
    },
    {
      id: 5,
      title: 'Mechanical Systems Maintenance',
      category: 'maintenance',
      description: 'Preventive maintenance program for manufacturing equipment.',
      image: '🛠️'
    },
    {
      id: 6,
      title: 'Renewable Energy Integration',
      category: 'electrical',
      description: 'Solar power integration for commercial building.',
      image: '☀️'
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
              <div className="project-image">
                <span className="project-icon">{project.image}</span>
              </div>
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <Link to="/projects" className="project-link">
                  View Details →
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