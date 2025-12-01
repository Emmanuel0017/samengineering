import React, { useState, useEffect } from 'react';
import './Testimonials.css';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'John Semu',
      company: 'Ethco',
      role: 'Project Manager',
      content: 'S.A.M Engineering delivered exceptional electrical system services for our facility. Their expertise and professionalism exceeded our expectations.',
      rating: 5
    },
    {
      id: 2,
      name: 'Wongani Mtekera',
      company: 'Nacala Logistics',
      role: 'Chief Engineer',
      content: 'The HVAC installation was completed on time and within budget. The team was knowledgeable and responsive throughout the entire project.',
      rating: 5
    },
    {
      id: 3,
      name: 'Chifundo',
      company: 'CEAR',
      role: 'Engineer',
      content: 'Outstanding performance in tower inspection and maintainance. S.A.M Engineering attention to detail and commitment to quality is impressive.',
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-title">
          <h2>Client Testimonials</h2>
          <p>What our clients say about our services</p>
        </div>

        <div className="testimonials-container">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="rating">
                {'★'.repeat(testimonials[currentTestimonial].rating)}
              </div>
              <p className="testimonial-text">
                "{testimonials[currentTestimonial].content}"
              </p>
              <div className="testimonial-author">
                <h4 className="author-name">{testimonials[currentTestimonial].name}</h4>
                <p className="author-company">{testimonials[currentTestimonial].company}</p>
                <p className="author-role">{testimonials[currentTestimonial].role}</p>
              </div>
            </div>
          </div>

          <div className="testimonials-controls">
            <button className="control-btn" onClick={prevTestimonial}>
              ‹
            </button>
            <div className="testimonials-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
            <button className="control-btn" onClick={nextTestimonial}>
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;