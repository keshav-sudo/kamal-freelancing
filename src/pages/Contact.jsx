import { useState } from 'react';
import SectionWrapper from '../components/common/SectionWrapper';
import Button from '../components/common/Button';
import './Contact.css';

/**
 * Contact Page
 * Professional B2B contact form and company information
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    inquiryType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      label: 'Email',
      value: 'contact@globaltrendx.com',
      link: 'mailto:contact@globaltrendx.com'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      ),
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      label: 'Headquarters',
      value: 'Global Operations Center',
      subvalue: 'International Trade Hub'
    }
  ];

  const offices = [
    { region: 'Asia Pacific', city: 'Hong Kong', type: 'Regional Office' },
    { region: 'Europe', city: 'Amsterdam', type: 'Trade Office' },
    { region: 'North America', city: 'New York', type: 'Sales Office' },
    { region: 'Middle East', city: 'Dubai', type: 'Trade Office' }
  ];

  const inquiryTypes = [
    'Product Sourcing',
    'Custom Manufacturing',
    'Request for Quotation',
    'Partnership Inquiry',
    'General Inquiry'
  ];

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <span className="page-label">Contact Us</span>
            <h1>Let's Build Your Supply Chain Together</h1>
            <p>
              Whether you need product sourcing, custom manufacturing, or supply chain 
              consultation, our team is ready to help. Get in touch today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <SectionWrapper background="white">
        <div className="contact-grid">
          {/* Form */}
          <div className="contact-form-wrapper">
            {!submitted ? (
              <>
                <h2>Request a Quote</h2>
                <p>Fill out the form below and our team will respond within 24-48 hours.</p>
                <form className="contact-form" onSubmit={handleSubmit}>
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
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">Company Name *</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Business Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@company.com"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="country">Country *</label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        placeholder="Your country"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inquiryType">Inquiry Type *</label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select inquiry type</option>
                        {inquiryTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="form-group full-width">
                    <label htmlFor="message">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Describe your requirements, including product details, quantities, and any specific needs..."
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    size="large"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                  </Button>
                </form>
              </>
            ) : (
              <div className="form-success">
                <div className="success-icon">✅</div>
                <h2>Thank You!</h2>
                <p>
                  Your inquiry has been received. Our team will review your requirements 
                  and get back to you within 24-48 business hours.
                </p>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      company: '',
                      email: '',
                      phone: '',
                      country: '',
                      inquiryType: '',
                      message: ''
                    });
                  }}
                >
                  Submit Another Inquiry
                </Button>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="contact-info-wrapper">
            <div className="contact-info-card">
              <h3>Get in Touch</h3>
              <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-item">
                    <div className="info-icon">{info.icon}</div>
                    <div className="info-content">
                      <span className="info-label">{info.label}</span>
                      {info.link ? (
                        <a href={info.link} className="info-value">{info.value}</a>
                      ) : (
                        <>
                          <span className="info-value">{info.value}</span>
                          {info.subvalue && <span className="info-subvalue">{info.subvalue}</span>}
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="offices-card">
              <h3>Global Offices</h3>
              <div className="offices-list">
                {offices.map((office, index) => (
                  <div key={index} className="office-item">
                    <span className="office-region">{office.region}</span>
                    <span className="office-city">{office.city}</span>
                    <span className="office-type">{office.type}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="response-card">
              <div className="response-icon">⏱️</div>
              <h4>Quick Response Guaranteed</h4>
              <p>
                Our team responds to all inquiries within 24-48 business hours. 
                For urgent matters, please call our main line directly.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Prefer a Direct Conversation?</h2>
            <p>
              Schedule a call with our trade specialists to discuss your 
              specific requirements in detail.
            </p>
            <a href="mailto:contact@globaltrendx.com">
              <Button variant="primary" size="large">Schedule a Call</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
