import React, { useState } from 'react';
import './Contact.css';
import { faFacebook, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEnvelope, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here (Formspree/EmailJS)
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Contact Us</h1>
            <p>Get in touch with our expert team</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>
                Ready to start your next project? Contact us today for a free 
                consultation and let's discuss how we can help you achieve your goals.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon"><FontAwesomeIcon icon={faLocationPin}/></div>
                  <div className="contact-text">
                    <h4>Office Address</h4>
                    <p>Naperi<br />Private Bag 303, Blantyre</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon"><FontAwesomeIcon icon={faPhone}/></div>
                  <div className="contact-text">
                    <h4>Phone Number</h4>
                    <p>+265 991 548 657</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon"><FontAwesomeIcon icon={faEnvelope}/></div>
                  <div className="contact-text">
                    <h4>Email Address</h4>
                    <p>info@samengineering.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon"><FontAwesomeIcon icon={faClock}/></div>
                  <div className="contact-text">
                    <h4>Business Hours</h4>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM<br />Emergency Services: 24/7</p>
                  </div>
                </div>
              </div>

              <div className="social-contact">
                <h4>Follow Us</h4>
                <div className="social-links">
                  <a href="#" className="social-link"><FontAwesomeIcon icon={faLinkedin} size='2x'/></a>
                  <a href="#" className="social-link"><FontAwesomeIcon icon={faFacebook} size='2x'/></a>
                  <a href="#" className="social-link"><FontAwesomeIcon icon={faXTwitter} size='2x'/></a>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Send us a Message</h3>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="electrical">Electrical Systems</option>
                    <option value="mechanical">Mechanical Installation</option>
                    <option value="hvac">HVAC Solutions</option>
                    <option value="maintenance">Maintenance Services</option>
                    <option value="automation">Industrial Automation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h2 className="cntc-section-title">Our Location</h2>
          <div className="map-placeholder">
            <div className="map-content">
              <div className="map-icon">📍</div>
              <h3>Blantyre City Office</h3>
              <p>Naperi, Private Bag 303, Blantyre</p>
              {/* <p className="map-note">Interactive map would be embedded here</p> */}
            </div>
          </div>
        </div>
      </section>

      <section className="emergency-section">
        <div className="container">
          <div className="emergency-content">
            <div className="emergency-icon">🚨</div>
            <div className="emergency-text">
              <h3>24/7 Emergency Services</h3>
              <p>Need immediate assistance? Our emergency team is available 24/7 for urgent electromechanical issues.</p>
            </div>
            <div className="emergency-contact">
              <div className="emergency-phone">+265 991 548 657</div>
              <button className="btn btn-primary">Call Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;