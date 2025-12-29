import { Link } from 'react-router-dom';
import SectionWrapper from '../components/common/SectionWrapper';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import './Products.css';

/**
 * Products & Services Page
 * On-demand supply model explanation and service offerings
 */
const Products = () => {
  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="M21 21l-4.35-4.35"/>
        </svg>
      ),
      title: 'Product Sourcing',
      description: 'We identify and vet manufacturers across our global network to find the perfect match for your product requirements. From raw materials to finished goods, we source it all.',
      features: ['Verified supplier network', 'Multi-country sourcing', 'Price negotiation', 'Sample procurement']
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      title: 'Custom Manufacturing',
      description: 'Partner with vetted factories for OEM and ODM production. We handle the entire manufacturing process from design to final production.',
      features: ['OEM/ODM services', 'Flexible MOQs', 'Product customization', 'Private labeling']
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4"/>
          <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.12 0 4.07.74 5.61 1.97"/>
        </svg>
      ),
      title: 'Quality Assurance',
      description: 'Rigorous quality control at every stage - from factory audits to pre-shipment inspections. We ensure your products meet international standards.',
      features: ['Factory audits', 'Production monitoring', 'Pre-shipment inspection', 'Lab testing']
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="3" width="15" height="13"/>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
          <circle cx="5.5" cy="18.5" r="2.5"/>
          <circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      ),
      title: 'Logistics & Shipping',
      description: 'Complete logistics solutions from factory to your doorstep. We manage freight, customs clearance, and last-mile delivery.',
      features: ['Freight forwarding', 'Customs clearance', 'Door-to-door delivery', 'Real-time tracking']
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
        </svg>
      ),
      title: 'Trade Documentation',
      description: 'Expert handling of all export documentation including commercial invoices, certificates of origin, and compliance paperwork.',
      features: ['Export documentation', 'Certificates & permits', 'Compliance support', 'Letter of credit']
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: 'Dedicated Support',
      description: 'Your personal account manager handles all aspects of your orders, providing regular updates and responsive communication.',
      features: ['Personal account manager', '24/7 availability', 'Regular updates', 'Issue resolution']
    }
  ];

  const productCategories = [
    { name: 'Textiles & Fabrics', icon: '🧵' },
    { name: 'Apparel & Fashion', icon: '👔' },
    { name: 'Industrial Equipment', icon: '⚙️' },
    { name: 'Electronics & Components', icon: '🔌' },
    { name: 'Home & Garden', icon: '🏠' },
    { name: 'Packaging Materials', icon: '📦' },
    { name: 'Agricultural Products', icon: '🌾' },
    { name: 'Automotive Parts', icon: '🚗' },
    { name: 'Healthcare Supplies', icon: '🏥' },
    { name: 'Building Materials', icon: '🏗️' },
    { name: 'Food & Beverages', icon: '🍽️' },
    { name: 'Chemicals & Materials', icon: '🧪' }
  ];

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="container">
          <div className="products-hero-content">
            <span className="page-label">Products & Services</span>
            <h1>On-Demand Global Sourcing Solutions</h1>
            <p>
              Access quality products from verified manufacturers worldwide without 
              the burden of large inventories. Our flexible supply model adapts to 
              your exact requirements.
            </p>
          </div>
        </div>
      </section>

      {/* On-Demand Model Section */}
      <SectionWrapper background="white">
        <div className="model-section">
          <div className="model-content">
            <span className="section-label">Our Model</span>
            <h2>The On-Demand Advantage</h2>
            <p>
              Traditional import models require significant upfront investment and 
              inventory management. Our on-demand supply model eliminates these 
              challenges, allowing you to order exactly what you need, when you need it.
            </p>
            <ul className="model-benefits">
              <li>
                <span className="benefit-icon">✓</span>
                <span>No minimum order constraints – order based on your actual demand</span>
              </li>
              <li>
                <span className="benefit-icon">✓</span>
                <span>Reduced inventory costs and warehouse requirements</span>
              </li>
              <li>
                <span className="benefit-icon">✓</span>
                <span>Flexible quantity adjustments based on market conditions</span>
              </li>
              <li>
                <span className="benefit-icon">✓</span>
                <span>Access to diverse product categories without commitment</span>
              </li>
              <li>
                <span className="benefit-icon">✓</span>
                <span>Risk mitigation through verified supplier relationships</span>
              </li>
            </ul>
          </div>
          <div className="model-visual">
            <div className="process-diagram">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-text">Submit Requirements</div>
              </div>
              <div className="process-arrow">→</div>
              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-text">We Source & Quote</div>
              </div>
              <div className="process-arrow">→</div>
              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-text">Production & QC</div>
              </div>
              <div className="process-arrow">→</div>
              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-text">Deliver to You</div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Services Grid */}
      <SectionWrapper 
        background="light"
        title="Our Services"
        subtitle="Comprehensive solutions covering every aspect of international sourcing and trade."
      >
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Product Categories */}
      <SectionWrapper 
        background="white"
        title="Product Categories"
        subtitle="We source across a wide range of product categories to meet diverse business needs."
      >
        <div className="categories-grid">
          {productCategories.map((category, index) => (
            <div key={index} className="category-item">
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </div>
          ))}
        </div>
        <div className="categories-note">
          <p>
            Don't see your product category? We source across virtually all industries. 
            <Link to="/contact"> Contact us</Link> with your requirements.
          </p>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <section className="products-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Source Your Products?</h2>
            <p>
              Share your requirements and receive a detailed quote within 48 hours. 
              Our team is ready to help you find the right products at the right price.
            </p>
            <div className="cta-buttons">
              <Link to="/contact">
                <Button variant="primary" size="large">Request a Quote</Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="large">See How It Works</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
