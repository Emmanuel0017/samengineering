import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Blog.css';

interface BlogPost {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  fullContent: string;
  imageUrl: string;
  galleryImages?: string[];
  publishDate: string;
  author: string;
  readTime: string;
  tags: string[];
  isExpanded: boolean;
  projectDetails?: {
    client: string;
    location: string;
    technologies: string[];
    completionDate: string;
  };
}

const BlogPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); 

  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: 'Industrial Plant Construction: Electromechanical Systems Integration',
      category: 'mechanical',
      excerpt: 'Comprehensive engineering solutions for industrial plant construction, integrating electrical, mechanical, and automation systems.',
      fullContent: `Our team successfully delivered a electromechanical solution for a new industrial processing plant in Nkhotakota, Dwangwa. This project involved the integration of complex systems to ensure optimal plant performance and operational efficiency.

Project Overview:
We provided end-to-end engineering services for the construction of a modern processing facility, focusing on seamless integration of electrical, mechanical, and automation systems. The project aimed to establish a state-of-the-art production line with maximum efficiency and minimum environmental impact.

Key Components:
- Electrical power distribution systems
- Mechanical conveyor and processing equipment
- Automated control systems
- Safety and emergency systems
- Environmental control systems
- Quality monitoring systems

Technical Implementation:
1. Electrical Infrastructure:
   - Main power distribution panels
   - Motor control centers
   - Lighting and emergency power systems
   - Grounding and lightning protection

2. Mechanical Systems:
   - Conveyor belt installations
   - Pump and valve systems
   - Processing equipment assembly
   - Ventilation and exhaust systems

3. Automation & Control:
   - Programmable Logic Controllers (PLC)
   - Human-Machine Interface (HMI) panels
   - Sensor networks and monitoring systems
   - Data acquisition systems

Challenges Overcome:
- Integrating legacy equipment with modern systems
- Ensuring compliance with industrial safety standards
- Maintaining project timeline during supply chain disruptions
- Implementing energy-efficient solutions within budget constraints

Innovative Solutions:
- Modular system design for future expansion
- Energy recovery systems to reduce operational costs
- Predictive maintenance capabilities through IoT integration
- Remote monitoring and control systems
- Sustainable materials and green building practices

Results Delivered:
- 30% increase in production efficiency
- 25% reduction in energy consumption
- 100% compliance with industrial safety standards
- Zero critical safety incidents during construction
- 20% reduction in maintenance costs through predictive systems
- Enhanced equipment lifespan through proper installation

Environmental Impact:
The plant incorporates sustainable practices including:
- Water recycling systems
- Energy-efficient lighting and motors
- Waste management systems
- Emission control technologies
- Noise reduction measures

This industrial plant construction project demonstrates our capability to handle complex, multi-disciplinary engineering projects while delivering measurable results in efficiency, safety, and sustainability.`,
      imageUrl: 'assets/11 (9).jpg',
      galleryImages: [
        'assets/11 (10).jpg',
        'assets/11 (9).jpg',
        'assets/9 (36).jpg',
        'assets/9 (38).jpg',
        'assets/9 (40).jpg',
        'assets/11 (4).jpg'
      ],
      publishDate: 'March 15, 2023',
      author: 'Industrial Engineering Team',
      readTime: '10 min read',
      tags: ['Industrial Plant', 'Electromechanical', 'System Integration', 'Automation', 'Construction', 'Manufacturing'],
      isExpanded: false,
      projectDetails: {
        client: 'Ethanol Ltd.',
        location: 'Nkhotakota, Dwangwa',
        technologies: ['PLC Systems', 'Power Distribution', 'Mechanical Conveyors', 'Automation Control', 'Safety Systems', 'Energy Management'],
        completionDate: 'on going'
      }
    },
    {
      id: 2,
      title: 'Powerline Construction Project: Enhancing Energy Distribution in Nkhotakota',
      category: 'casestudy',
      excerpt: 'A comprehensive case study on our high-voltage powerline installation project for Illovo Ltd., improving electricity reliability across Dwangwa.',
      fullContent: `Our team recently completed a significant powerline construction project in Nkhotakota, Dwangwa, for Illovo Ltd. This project involved the installation of high-voltage power lines designed to enhance electricity distribution and reliability across the region.

Project Overview:
Constructed a dual-purpose electrical infrastructure system to power residential neighborhoods and provide reliable street lighting in Dwangwa Illovo residents area. The project delivered both high-voltage power distribution for homes and an efficient street lighting network to enhance community safety.

Key Challenges:
- Complex terrain navigation in residential areas
- Minimal disruption to existing community infrastructure
- Coordinating power distribution with street lighting integration
- Strict safety protocols in populated zones

Solutions Implemented:
- Smart grid technology for optimized power distribution
- Energy-efficient LED street lights 
- Advanced pole installation methods for dual functionality

Results Achieved:
- 40% improvement in residential electricity reliability
- 150+ energy-efficient street lights installed
- 100% safety compliance achieved
- 30% energy reduction for street lighting
- Enhanced power delivery to 500+ households
- Improved community safety and visibility

This project showcases our expertise in integrated electrical solutions that serve both residential power needs and public lighting requirements.`,
      imageUrl: 'assets/9 (27).png',
      galleryImages: [
        'assets/9 (27).png',
        'assets/9 (24).jpg',
        'assets/9 (4).jpg',
        'assets/9 (18).jpg',
        'assets/11 (7).jpg',
        'assets/11 (6).jpg'
      ],
      publishDate: 'December 10, 2025',
      author: 'Engineering Team',
      readTime: '8 min read',
      tags: ['Case Study', 'Powerlines', 'Electrical Infrastructure', 'Energy Distribution', 'Illovo Ltd'],
      isExpanded: false,
      projectDetails: {
        client: 'Illovo Ltd.',
        location: 'Nkhotakota, Dwangwa',
        technologies: ['High-Voltage Powerlines', 'Electrical Poles', 'Energy Distribution', 'Safety Compliance', 'Sustainable Construction'],
        completionDate: 'November 2025'
      }
    },
    {
      id: 3,
      title: 'Commercial HVAC Installation: Smart Climate Control for CEAR Offices',
      category: 'casestudy',
      excerpt: 'Case study on implementing energy-efficient HVAC systems across CEAR office complexes in multiple Malawian locations.',
      fullContent: `Central East African Railways (CEAR) partnered with us to upgrade their HVAC systems across multiple office locations in Malawi. This project focused on implementing smart, energy-efficient climate control solutions.

Project Scope:
Complete HVAC, refrigeration, and water dispenser solutions for CEAR offices across their working locations. Services included installation, repair, servicing, and ongoing maintenance.

Services Provided:
- Air conditioning system installation and optimization
- Commercial refrigeration unit servicing
- Water dispenser installation and maintenance
- Regular equipment repair and preventive care

Key Features:
- Smart climate control with remote monitoring
- Energy-efficient systems reducing consumption by 45%
- Environmentally friendly refrigerants
- Customized solutions for each location

Results:
- Improved office comfort and air quality
- Reliable refrigeration and water dispensing
- Reduced energy costs
- Minimal equipment downtime
- Enhanced equipment lifespan

This project showcases our comprehensive commercial climate control and appliance maintenance services.`,
      imageUrl: 'assets/A1.png',
      galleryImages: [
        'assets/A1.png',
        'assets/10.jpg',
        'assets/12 (1).jpg',
        'assets/12 (8).jpg',
        'assets/12 (7).jpg',
        'assets/12 (3).jpg'
      ],
      publishDate: 'October 15, 2023',
      author: 'HVAC Specialists',
      readTime: '7 min read',
      tags: ['Case Study', 'HVAC', 'Energy Efficiency', 'Smart Buildings', 'CEAR'],
      isExpanded: false,
      projectDetails: {
        client: 'Central East African Railways (CEAR)',
        location: 'Blantyre, Lilongwe, Balaka, Liwonde, Malawi',
        technologies: ['HVAC Systems', 'Smart Climate Control', 'Energy Optimization', 'Air Quality Management', 'Sustainable Cooling'],
        completionDate: 'September 2023'
      }
    },
    {
      id: 4,
      title: 'Network Tower Maintenance: Ensuring Telecom Reliability Across Malawi',
      category: 'casestudy',
      excerpt: 'How our preventive maintenance program for CEAR telecom towers improved network performance and reduced downtime.',
      fullContent: `Regular maintenance of telecom infrastructure is crucial for uninterrupted network services. Our preventive maintenance program for CEAR's network towers has significantly improved reliability and performance.

Project Scope:
Comprehensive network tower inspection, maintenance, and repair services across multiple sites. Focus on preventive care to ensure optimal performance and safety compliance.

Maintenance Services:
- Structural integrity inspections
- Electrical system verification
- Antenna alignment and optimization
- Safety compliance audits
- Emergency repair response

Key Features:
- Quarterly structural inspections
- Biannual electrical system checks
- Annual full-system diagnostics
- Real-time monitoring capabilities
- Drone-based inspections for hard-to-reach areas

Results Achieved:
- 60% reduction in emergency repairs
- 99.5% network uptime maintained
- Extended tower lifespan by 8-10 years
- Improved safety compliance
- Reduced overall maintenance costs

This project demonstrates our expertise in telecom infrastructure maintenance, ensuring network reliability and operational efficiency.`,
      imageUrl: 'assets/11 (1).png',
      galleryImages: [
        'assets/11 (1).png',
        'assets/10 (9).jpg',
        'assets/13 (1).png',
        'assets/13 (2).png',
        'assets/13 (3).png',
        'assets/13 (4).png',
      ],
      publishDate: 'August 5, 2024',
      author: 'Maintenance Team',
      readTime: '6 min read',
      tags: ['Case Study', 'Maintenance', 'Telecom', 'Network Reliability', 'CEAR'],
      isExpanded: false,
      projectDetails: {
        client: 'CEAR',
        location: 'Liwonde, Mwanza',
        technologies: ['Telecom Tower Maintenance', 'Structural Inspection', 'Preventive Maintenance', 'Network Optimization', 'Safety Compliance'],
        completionDate: 'July 2024'
      }
      },
    {
      id: 5,
      title: 'Modern Street Lighting Installation: Enhancing Safety and Efficiency',
      category: 'electrical',
      excerpt: 'Implementation of smart street lighting systems that improve public safety while reducing energy consumption and maintenance costs.',
      fullContent: `We recently completed a comprehensive street lighting project in Blantyre's central business district, transforming the urban nightscape with smart, energy-efficient lighting solutions.

Project Overview:
The initiative involved installing street lights with modern LED systems equipped with smart controls, significantly improving visibility, safety, and energy efficiency.

System Features:
1. Smart LED Lighting:
   - High-efficiency LED luminaires
   - Adaptive brightness control
   - Color temperature optimization
   - Long lifespan (50,000+ hours)

2. Intelligent Control System:
   - Centralized monitoring platform
   - Individual light control capability
   - Automatic dimming based on traffic patterns
   - Fault detection and reporting
   - Remote configuration and updates

3. Energy Management:
   - Solar power integration for selected areas
   - Power consumption monitoring
   - Peak load management
   - Energy usage analytics

4. Safety Enhancements:
   - Motion sensor activation in low-traffic areas
   - Emergency lighting protocols
   - Backup power systems
   - Vandal-resistant designs

Installation Process:
- Phase 1: Site assessment and planning
- Phase 2: Pole installation and foundation work
- Phase 3: Electrical wiring and connections
- Phase 4: Fixture installation and alignment
- Phase 5: Control system programming
- Phase 6: Testing and commissioning
- Phase 7: Maintenance training and handover

Technical Specifications:
- 12 km of cabling
- 15 smart control nodes
- 2 centralized monitoring stations
- Weather-resistant IP65 rated fixtures

Key Challenges Addressed:
- Integrating with existing electrical infrastructure
- Ensuring uniform light distribution
- Protecting against power surges and theft
- Managing different lighting requirements for various zones

Performance Results:
- 65% reduction in energy consumption
- 40% decrease in maintenance calls
- 30% improvement in lighting uniformity
- 90% reduction in light pollution
- 24/7 monitoring capability
- 5-year warranty on all components

Community Impact:
- Enhanced pedestrian safety in evening hours
- Reduced traffic accidents in poorly lit areas
- Improved business activity during night hours
- Increased property values in illuminated areas
- Better security surveillance capabilities
- Positive environmental impact through energy savings

Economic Benefits:
- Lower municipal electricity bills
- Reduced maintenance labor costs
- Extended equipment lifespan
- Potential for smart city expansion
- Attraction of nighttime economic activities

Future-Ready Design:
The system is designed for scalability, allowing for:
- Additional smart city integrations
- Traffic monitoring capabilities
- Environmental sensors
- Public WiFi hotspots
- Emergency response systems

This street lighting project demonstrates how modern electrical engineering can transform urban infrastructure, creating safer, more efficient, and sustainable cities while delivering significant economic benefits.`,
      imageUrl: 'assets/11 (6).jpg',
      galleryImages: [
        'assets/11 (7).jpg',
        'assets/11 (6).jpg'
      ],
      publishDate: 'June 22, 2024',
      author: 'Engineering Team',
      readTime: '9 min read',
      tags: ['Street Lighting', 'LED Technology', 'Smart Cities', 'Urban Infrastructure', 'Energy Efficiency', 'Public Safety'],
      isExpanded: false,
      projectDetails: {
        client: 'Illovo Ltd',
        location: 'Nkhotakota, Dwangwa',
        technologies: ['LED Lighting', 'Smart Controls', 'Solar Power', 'IoT Monitoring', 'Power Management', 'Wireless Communication'],
        completionDate: 'May 2025'
      }
    }
  ]);

  const categories = [
    { key: 'all', label: 'All Articles' },
    { key: 'casestudy', label: 'Case Studies' },
    { key: 'electrical', label: 'Electrical Engineering' },
    { key: 'hvac', label: 'HVAC Systems' },
    { key: 'automation', label: 'Automation' },
    { key: 'maintenance', label: 'Maintenance' },
    { key: 'mechanical', label: 'Mechanical Systems' },
    { key: 'industry', label: 'Industry News' }
  ];

  const togglePostExpansion = (id: number) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, isExpanded: !post.isExpanded } : post
    ));
  };

  const navigateToGallery = (post: BlogPost) => {
    // Navigate to gallery page with post data
    navigate('/gallery', { 
      state: { 
        title: post.title,
        images: post.galleryImages || [post.imageUrl],
        projectDetails: post.projectDetails
      }
    });
  };

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeFilter === 'all' || post.category === activeFilter;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      post.fullContent.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const getRelatedPosts = (currentPost: BlogPost, count: number = 2) => {
    return posts
      .filter(post => 
        post.id !== currentPost.id && 
        (post.category === currentPost.category || 
         post.tags.some(tag => currentPost.tags.includes(tag)))
      )
      .slice(0, count);
  };

  return (
    <div className="blog-page">
      <section className="blog-page-hero">
        <div className="blog-hero-background"></div>
        <div className="blog-hero-overlay"></div>
        <div className="container">
          <div className="blog-hero-content">
            <h1>S.A.M Engineering Insights</h1>
            <p>Expert articles, project case studies, and industry updates from our engineering team</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-search-section">
            <div className="search-container">
              <input
                type="text"
                className="blog-search"
                placeholder="Search articles by keyword, topic, or author..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="search-btn">
                <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="blog-filters">
            {categories.map(category => (
              <button
                key={category.key}
                className={`blog-filter-btn ${activeFilter === category.key ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.key)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="blog-grid">
            {filteredPosts.map(post => {
              const relatedPosts = getRelatedPosts(post);
              const hasGallery = post.galleryImages && post.galleryImages.length > 1;
              
              return (
                <article key={post.id} className="blog-post-card">
                  <div className="blog-post-image">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title}
                      className="post-image"
                      loading="lazy"
                    />
                    <div className="post-category-overlay">
                      <span className="post-category-badge">{post.category}</span>
                    </div>
                    {hasGallery && (
                      <div className="gallery-indicator" onClick={() => navigateToGallery(post)}>
                        <svg className="gallery-icon" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm14 10l-4-4-4 4-2-2-4 4V6h14v8z"/>
                          <circle cx="8.5" cy="8.5" r="1.5"/>
                        </svg>
                        <span className="gallery-text">View {post.galleryImages!.length} photos</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="blog-post-content">
                    <div className="post-meta">
                      <span className="post-date">{post.publishDate}</span>
                      <span className="post-read-time">{post.readTime}</span>
                    </div>
                    
                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-excerpt">{post.excerpt}</p>
                    
                    <div className="post-author">
                      <div className="author-avatar">
                        {post.author.split(' ').map(n => n[0]).join('').substring(0, 2)}
                      </div>
                      <div className="author-info">
                        <span className="author-name">By {post.author}</span>
                      </div>
                    </div>
                    
                    <div className="post-tags">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="post-tag">{tag}</span>
                      ))}
                    </div>
                    
                    {post.projectDetails && (
                      <div className="project-highlights">
                        <div className="highlight-item">
                          <strong>Client:</strong> {post.projectDetails.client}
                        </div>
                        <div className="highlight-item">
                          <strong>Location:</strong> {post.projectDetails.location}
                        </div>
                        <div className="highlight-item">
                          <strong>Completed:</strong> {post.projectDetails.completionDate}
                        </div>
                      </div>
                    )}
                    
                    <div className="post-actions">
                      <button 
                        className="read-more-btn"
                        onClick={() => togglePostExpansion(post.id)}
                      >
                        {post.isExpanded ? 'Read Less' : 'Read Full Article'}
                        <svg className="read-more-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={post.isExpanded ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}></path>
                        </svg>
                      </button>
                      
                      {hasGallery && (
                        <button 
                          className="view-gallery-btn"
                          onClick={() => navigateToGallery(post)}
                        >
                          <svg className="gallery-btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                          </svg>
                          View Gallery
                        </button>
                      )}
                    </div>
                    
                    {post.isExpanded && (
                      <div className="post-expanded-content">
                        <div className="post-full-content">
                          {post.fullContent.split('\n\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                          ))}
                          
                          {post.projectDetails && (
                            <div className="project-details-expanded">
                              <h4>Project Details</h4>
                              <div className="details-grid">
                                <div className="detail-column">
                                  <div className="detail-item">
                                    <strong>Client:</strong>
                                    <span>{post.projectDetails.client}</span>
                                  </div>
                                  <div className="detail-item">
                                    <strong>Location:</strong>
                                    <span>{post.projectDetails.location}</span>
                                  </div>
                                  <div className="detail-item">
                                    <strong>Completion Date:</strong>
                                    <span>{post.projectDetails.completionDate}</span>
                                  </div>
                                </div>
                                <div className="detail-column">
                                  <div className="detail-item">
                                    <strong>Technologies Used:</strong>
                                    <div className="tech-list">
                                      {post.projectDetails.technologies.map((tech, index) => (
                                        <span key={index} className="tech-item">{tech}</span>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        
                        {hasGallery && (
                          <div className="post-gallery-preview">
                            <h4>Project Gallery</h4>
                            <div className="gallery-preview-grid">
                              {post.galleryImages!.slice(0, 4).map((img, index) => (
                                <div 
                                  key={index} 
                                  className="gallery-preview-item"
                                  onClick={() => navigateToGallery(post)}
                                >
                                  <img src={img} alt={`Gallery ${index + 1}`} />
                                  {index === 3 && post.galleryImages!.length > 4 && (
                                    <div className="more-images-overlay">
                                      +{post.galleryImages!.length - 4} more
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                            <button 
                              className="view-full-gallery-btn"
                              onClick={() => navigateToGallery(post)}
                            >
                              View All {post.galleryImages!.length} Photos
                              <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                              </svg>
                            </button>
                          </div>
                        )}
                        
                        {relatedPosts.length > 0 && (
                          <div className="related-posts">
                            <h4>Related Articles</h4>
                            <div className="related-posts-grid">
                              {relatedPosts.map(related => (
                                <div key={related.id} className="related-post">
                                  <h5 onClick={() => togglePostExpansion(related.id)} className="related-post-title">
                                    {related.title}
                                  </h5>
                                  <span className="related-post-category">{related.category}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {filteredPosts.length === 0 && (
            <div className="no-posts">
              <h3>No articles found</h3>
              <p>Try adjusting your search or filter to find what you're looking for.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;