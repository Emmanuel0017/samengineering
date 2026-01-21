import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
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

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        alert('Message sent successfully. We will contact you shortly.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        alert('Failed to send message. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="contact-page">
      <section className="cntc-page-hero">
        <div className="cntc-hero-background"></div>
        <div className="cntc-hero-overlay"></div>
        <div className="container">
          <div className="cntc-hero-content">
            <h1>Contact Us</h1>
            <p>Get in touch with our expert team</p>
          </div>
        </div>
      </section>

      <section className="cntc-page-section">
        <div className="container">
          <div className="contact-content">

            {/* LEFT INFO */}
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>
                Ready to start your next project? Contact us today for a free consultation.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={faLocationPin} />
                  </div>
                  <div className="contact-text">
                    <h4>Office Address</h4>
                    <p>Old Naperi<br />House NP/337, Blantyre</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <p>+265 994 002 138</p>
                    <p>+265 991 548 657</p>
                    <p>+265 999 920 096</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <p>info@samengineeringmw.com</p>
                    <p>info.samengineeringmw@gmail.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={faClock} />
                  </div>
                  <div className="contact-text">
                    <h4>Hours</h4>
                    <p>Mon–Fri: 8AM – 6PM<br />Emergency: 24/7</p>
                  </div>
                </div>
              </div>

              <div className="social-contact">
                <h4>Follow Us</h4>
                <div className="social-links">
                  <a href="/" className="social-link"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                  <a href="/" className="social-link"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                  <a href="/" className="social-link"><FontAwesomeIcon icon={faXTwitter} size="2x" /></a>
                  <a href="/" className="social-link"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Send Us a Message</h3>

                <div className="form-row">
                  <div className="form-group">
                    <input 
                      name="name" 
                      placeholder="Full Name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      name="email" 
                      type="email" 
                      placeholder="Email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input 
                      name="phone" 
                      placeholder="Phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      name="company" 
                      placeholder="Company" 
                      value={formData.company} 
                      onChange={handleChange} 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <select name="service" value={formData.service} onChange={handleChange}>
                    <option value="">Select Service</option>
                    <option value="Electrical">Electrical</option>
                    <option value="Mechanical">Mechanical</option>
                    <option value="HVAC">HVAC</option>
                    <option value="Automation">Automation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;