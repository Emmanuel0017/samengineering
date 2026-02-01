import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Gallery.css';

const GalleryPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, images, projectDetails } = location.state || {
    title: 'Project Gallery',
    images: [],
    projectDetails: null
  };

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!images || images.length === 0) {
    return (
      <div className="gallery-page">
        <div className="gallery-empty">
          <h2>No images available</h2>
          <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="gallery-page">
      <section className="gallery-header">
        <div className="container">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <svg className="back-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            Back to Blog
          </button>
          <h1>{title}</h1>
          {projectDetails && (
            <div className="gallery-subtitle">
              <span>Client: {projectDetails.client}</span>
              <span>Location: {projectDetails.location}</span>
              <span>{images.length} Photos</span>
            </div>
          )}
        </div>
      </section>

      <section className="gallery-content">
        <div className="container">
          <div className="gallery-grid">
            {images.map((image: string, index: number) => (
              <div 
                key={index} 
                className="gallery-item"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
              <svg className="close-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
            <img src={selectedImage} alt="Full size" />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;