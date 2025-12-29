import { Link } from 'react-router-dom';
import SectionWrapper from '../components/common/SectionWrapper';
import Button from '../components/common/Button';
import './GlobalReach.css';

/**
 * Global Reach Page
 * International network, why choose us, and statistics
 */
const GlobalReach = () => {
  const regions = [
    {
      name: 'Asia Pacific',
      countries: ['China', 'India', 'Vietnam', 'Thailand', 'Indonesia', 'Japan', 'South Korea', 'Taiwan', 'Malaysia', 'Bangladesh'],
      description: 'Our primary manufacturing hub with access to diverse industries and competitive production capabilities.',
      icon: '🌏'
    },
    {
      name: 'Europe',
      countries: ['Germany', 'United Kingdom', 'France', 'Netherlands', 'Italy', 'Spain', 'Poland', 'Belgium'],
      description: 'Strategic distribution and sourcing partners for premium quality products and specialized manufacturing.',
      icon: '🌍'
    },
    {
      name: 'Americas',
      countries: ['United States', 'Canada', 'Mexico', 'Brazil', 'Colombia', 'Argentina'],
      description: 'Major consumer markets with growing sourcing opportunities and established logistics networks.',
      icon: '🌎'
    },
    {
      name: 'Middle East & Africa',
      countries: ['UAE', 'Saudi Arabia', 'Turkey', 'South Africa', 'Egypt', 'Morocco'],
      description: 'Emerging markets with strong demand and unique sourcing capabilities for specific product categories.',
      icon: '🌍'
    }
  ];

  const stats = [
    { value: '50+', label: 'Countries Served', description: 'Active trade relationships across all major continents' },
    { value: '200+', label: 'Verified Suppliers', description: 'Thoroughly vetted manufacturing partners' },
    { value: '1000+', label: 'Products Exported', description: 'Diverse product range across industries' },
    { value: '15+', label: 'Years Experience', description: 'Proven track record in international trade' }
  ];

  const whyChoose = [
    {
      title: 'Global Supplier Network',
      description: 'Access our pre-vetted network of manufacturers and suppliers across 20+ countries, carefully selected for quality and reliability.',
      icon: '🌐'
    },
    {
      title: 'End-to-End Solutions',
      description: 'From initial sourcing to final delivery, we manage every aspect of your supply chain with dedicated expertise.',
      icon: '🔄'
    },
    {
      title: 'Quality Guarantee',
      description: 'Rigorous quality control processes including factory audits, production inspections, and pre-shipment verification.',
      icon: '✅'
    },
    {
      title: 'Competitive Pricing',
      description: 'Direct manufacturer relationships and bulk procurement power enable us to offer the most competitive market prices.',
      icon: '💰'
    },
    {
      title: 'Flexible Terms',
      description: 'Adaptable payment terms, flexible MOQs, and customized shipping schedules to suit your business requirements.',
      icon: '🤝'
    },
    {
      title: 'Dedicated Support',
      description: 'Personal account managers available around the clock to handle your queries and provide transaction updates.',
      icon: '💬'
    }
  ];

  return (
    <div className="global-reach-page">
      {/* Hero */}
      <section className="global-hero">
        <div className="container">
          <div className="global-hero-content">
            <span className="page-label">Global Reach</span>
            <h1>Your Gateway to International Markets</h1>
            <p>
              With operations spanning across Asia, Europe, Americas, and the Middle East, 
              Global Trendx International connects you to quality suppliers and markets worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* World Map Section */}
      <SectionWrapper background="white">
        <div className="map-section">
          <div className="map-visual">
            <svg viewBox="0 0 600 350" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Simplified continents */}
              <ellipse cx="300" cy="175" rx="280" ry="150" fill="var(--primary-50)"/>
              
              {/* Connection lines */}
              <path d="M120 120 Q200 100 280 130" stroke="var(--primary-300)" strokeWidth="2" strokeDasharray="4,4"/>
              <path d="M280 130 Q350 100 420 140" stroke="var(--primary-300)" strokeWidth="2" strokeDasharray="4,4"/>
              <path d="M280 130 Q280 180 320 220" stroke="var(--primary-300)" strokeWidth="2" strokeDasharray="4,4"/>
              <path d="M120 120 Q150 180 180 220" stroke="var(--primary-300)" strokeWidth="2" strokeDasharray="4,4"/>
              <path d="M420 140 Q450 180 480 200" stroke="var(--primary-300)" strokeWidth="2" strokeDasharray="4,4"/>
              
              {/* Region dots with labels */}
              <circle cx="120" cy="120" r="12" fill="var(--primary-500)"/>
              <circle cx="420" cy="140" r="12" fill="var(--primary-500)"/>
              <circle cx="280" cy="130" r="12" fill="var(--primary-500)"/>
              <circle cx="520" cy="160" r="12" fill="var(--primary-500)"/>
              <circle cx="180" cy="220" r="10" fill="var(--primary-400)"/>
              <circle cx="320" cy="220" r="10" fill="var(--primary-400)"/>
              <circle cx="480" cy="200" r="10" fill="var(--primary-400)"/>
              
              {/* Animated pulse circles */}
              <circle cx="120" cy="120" r="20" fill="var(--primary-500)" opacity="0.3" className="pulse-ring"/>
              <circle cx="420" cy="140" r="20" fill="var(--primary-500)" opacity="0.3" className="pulse-ring delay"/>
              <circle cx="520" cy="160" r="20" fill="var(--primary-500)" opacity="0.3" className="pulse-ring delay-2"/>
            </svg>
          </div>
          <div className="map-legend">
            <p>Our global network ensures seamless sourcing and logistics capabilities across all major trade regions.</p>
          </div>
        </div>
      </SectionWrapper>

      {/* Regions Grid */}
      <SectionWrapper 
        background="light"
        title="Our Global Network"
        subtitle="Strategic presence across major manufacturing and consumer markets worldwide."
      >
        <div className="regions-grid">
          {regions.map((region, index) => (
            <div key={index} className="region-card">
              <div className="region-header">
                <span className="region-icon">{region.icon}</span>
                <h3>{region.name}</h3>
              </div>
              <p className="region-desc">{region.description}</p>
              <div className="region-countries">
                {region.countries.map((country, i) => (
                  <span key={i} className="country-tag">{country}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Stats Section */}
      <section className="global-stats">
        <div className="container">
          <div className="stats-header">
            <h2>Proven Track Record</h2>
            <p>Numbers that reflect our commitment to global trade excellence.</p>
          </div>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
                <p className="stat-desc">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <SectionWrapper 
        background="white"
        title="Why Partner With Us"
        subtitle="The Global Trendx advantage that sets us apart in international trade."
      >
        <div className="why-grid">
          {whyChoose.map((item, index) => (
            <div key={index} className="why-card">
              <span className="why-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="global-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Go Global?</h2>
            <p>
              Join our network of international businesses and access quality products 
              from verified suppliers across the globe.
            </p>
            <div className="cta-buttons">
              <Link to="/contact">
                <Button variant="primary" size="large">Start Sourcing Today</Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="large">Learn Our Process</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalReach;
