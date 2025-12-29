import { Link } from 'react-router-dom';
import SectionWrapper from '../components/common/SectionWrapper';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import './Home.css';

/**
 * Home Page
 * Main landing page with hero, services, industries, why us, and CTA sections
 */
const Home = () => {
  // Service data
  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      title: 'Product Sourcing',
      description: 'Access our extensive network of verified manufacturers and suppliers across Asia, Europe, and the Americas for quality products.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
      title: 'Global Export Solutions',
      description: 'Comprehensive export services including documentation, compliance, and international trade regulations handled by our expert team.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
        </svg>
      ),
      title: 'Custom Manufacturing',
      description: 'Tailored production solutions with flexible MOQs, OEM/ODM services, and rigorous quality control throughout the manufacturing process.'
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
      description: 'End-to-end logistics support including freight forwarding, customs clearance, and door-to-door delivery worldwide.'
    }
  ];

  // Industry data
  const industries = [
    { name: 'Textiles & Apparel', icon: '👔' },
    { name: 'Industrial Equipment', icon: '⚙️' },
    { name: 'Consumer Electronics', icon: '📱' },
    { name: 'Agricultural Products', icon: '🌾' },
    { name: 'Home & Living', icon: '🏠' },
    { name: 'Automotive Parts', icon: '🚗' },
    { name: 'Healthcare & Medical', icon: '🏥' },
    { name: 'Food & Beverages', icon: '🍽️' }
  ];

  // Stats data
  const stats = [
    { value: '50+', label: 'Countries Served' },
    { value: '1000+', label: 'Products Exported' },
    { value: '500+', label: 'Global Partners' },
    { value: '15+', label: 'Years Experience' }
  ];

  // Why choose us data
  const whyChooseUs = [
    {
      title: 'On-Demand Supply Model',
      description: 'No minimum order hassles. We provide flexible sourcing tailored to your exact requirements and timelines.'
    },
    {
      title: 'Quality Assured',
      description: 'Every product undergoes rigorous quality checks from factory to shipment, ensuring consistent standards.'
    },
    {
      title: 'Competitive Pricing',
      description: 'Direct manufacturer relationships enable us to offer the most competitive prices without compromising quality.'
    },
    {
      title: 'Dedicated Support',
      description: 'Your personal account manager handles everything from sourcing to delivery with 24/7 availability.'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-pattern"></div>
          <div className="hero-gradient"></div>
        </div>
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-badge">Trusted Global Export Partner</span>
            <h1>Connecting Global Markets Through Quality Supply Solutions</h1>
            <p>
              Global Trendx International delivers seamless on-demand sourcing,
              manufacturing, and export solutions for businesses worldwide. Your
              bridge to reliable international trade.
            </p>
            <div className="hero-cta">
              <Link to="/contact">
                <Button variant="primary" size="large">Request a Quote</Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="large">How It Works</Button>
              </Link>
            </div>
            <div className="hero-trust">
              <span>Trusted by companies in</span>
              <div className="trust-flags">
                <span>🇺🇸</span>
                <span>🇬🇧</span>
                <span>🇩🇪</span>
                <span>🇫🇷</span>
                <span>🇦🇺</span>
                <span>🇯🇵</span>
                <span>🇨🇦</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-globe">
              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
                <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="2" opacity="0.2"/>
                <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="2" opacity="0.15"/>
                <ellipse cx="200" cy="200" rx="180" ry="60" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
                <ellipse cx="200" cy="200" rx="60" ry="180" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
                <path d="M200 20C200 20 320 100 320 200C320 300 200 380 200 380" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
                <path d="M200 20C200 20 80 100 80 200C80 300 200 380 200 380" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
                {/* Animated connection points */}
                <circle cx="120" cy="100" r="8" fill="currentColor" className="pulse-dot"/>
                <circle cx="280" cy="120" r="8" fill="currentColor" className="pulse-dot delay-1"/>
                <circle cx="300" cy="220" r="8" fill="currentColor" className="pulse-dot delay-2"/>
                <circle cx="100" cy="280" r="8" fill="currentColor" className="pulse-dot delay-3"/>
                <circle cx="250" cy="300" r="8" fill="currentColor" className="pulse-dot delay-1"/>
              </svg>
            </div>
            <div className="floating-card card-1">
              <span className="card-icon">📦</span>
              <span>Shipped Today</span>
            </div>
            <div className="floating-card card-2">
              <span className="card-icon">✅</span>
              <span>Quality Verified</span>
            </div>
            <div className="floating-card card-3">
              <span className="card-icon">🌍</span>
              <span>50+ Countries</span>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <SectionWrapper background="white">
        <div className="who-we-are">
          <div className="who-content">
            <span className="section-label">Who We Are</span>
            <h2>Your Strategic Partner in Global Trade</h2>
            <p>
              Global Trendx International is a premier global sourcing and export company
              specializing in connecting businesses with quality products from verified
              manufacturers worldwide. We operate on an innovative on-demand supply model,
              eliminating inventory risks while ensuring timely delivery.
            </p>
            <p>
              With operations spanning across Asia, Europe, and the Americas, we serve
              distributors, wholesalers, and businesses seeking reliable supply chain
              solutions backed by years of industry expertise.
            </p>
            <Link to="/about">
              <Button variant="secondary">Learn More About Us</Button>
            </Link>
          </div>
          <div className="who-image">
            <div className="image-placeholder">
              <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="300" fill="var(--primary-50)"/>
                <rect x="40" y="180" width="320" height="100" fill="var(--primary-100)"/>
                <rect x="60" y="120" width="80" height="60" fill="var(--primary-200)"/>
                <rect x="160" y="100" width="80" height="80" fill="var(--primary-300)"/>
                <rect x="260" y="140" width="80" height="40" fill="var(--primary-200)"/>
                <circle cx="320" cy="60" r="30" fill="var(--primary-200)"/>
                <path d="M50 280L100 200L150 220L200 180L250 200L300 160L350 180" stroke="var(--primary-500)" strokeWidth="3"/>
              </svg>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Services Section */}
      <SectionWrapper 
        background="light" 
        title="Our Core Services" 
        subtitle="Comprehensive solutions designed to streamline your international procurement and supply chain operations."
      >
        <div className="services-grid">
          {services.map((service, index) => (
            <Card
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              variant="default"
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Industries Section */}
      <SectionWrapper 
        background="white"
        title="Industries We Serve"
        subtitle="Delivering specialized sourcing solutions across diverse industry verticals with deep market expertise."
      >
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card">
              <span className="industry-icon">{industry.icon}</span>
              <span className="industry-name">{industry.name}</span>
            </div>
          ))}
        </div>
        <div className="industries-cta">
          <Link to="/industries">
            <Button variant="secondary">Explore All Industries</Button>
          </Link>
        </div>
      </SectionWrapper>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <SectionWrapper
        background="white"
        title="Why Choose Global Trendx"
        subtitle="We combine global reach with local expertise to deliver unmatched value to our partners."
      >
        <div className="why-grid">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="why-item">
              <div className="why-number">{String(index + 1).padStart(2, '0')}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Global Presence Section */}
      <section className="global-section">
        <div className="container">
          <div className="global-content">
            <span className="section-label">Global Presence</span>
            <h2>Connecting You to Markets Worldwide</h2>
            <p>
              Our extensive network spans major manufacturing hubs and consumer markets
              across the globe. From sourcing in Asia to distribution in North America
              and Europe, we ensure seamless cross-border trade operations.
            </p>
            <div className="global-regions">
              <div className="region">
                <h4>Asia Pacific</h4>
                <p>China, India, Vietnam, Thailand, Indonesia</p>
              </div>
              <div className="region">
                <h4>Europe</h4>
                <p>Germany, UK, France, Netherlands, Italy</p>
              </div>
              <div className="region">
                <h4>Americas</h4>
                <p>USA, Canada, Mexico, Brazil</p>
              </div>
              <div className="region">
                <h4>Middle East & Africa</h4>
                <p>UAE, Saudi Arabia, South Africa</p>
              </div>
            </div>
          </div>
          <div className="global-visual">
            <div className="world-map">
              <svg viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Simplified world map outline */}
                <ellipse cx="250" cy="150" rx="220" ry="120" fill="var(--primary-800)" opacity="0.3"/>
                {/* Connection lines */}
                <path d="M100 120 Q200 80 300 100" stroke="var(--primary-300)" strokeWidth="2" strokeDasharray="5,5"/>
                <path d="M150 150 Q250 200 350 140" stroke="var(--primary-300)" strokeWidth="2" strokeDasharray="5,5"/>
                <path d="M200 180 Q300 150 400 180" stroke="var(--primary-300)" strokeWidth="2" strokeDasharray="5,5"/>
                {/* Location dots */}
                <circle cx="100" cy="120" r="6" fill="var(--primary-300)"/>
                <circle cx="300" cy="100" r="6" fill="var(--primary-300)"/>
                <circle cx="150" cy="150" r="6" fill="var(--primary-300)"/>
                <circle cx="350" cy="140" r="6" fill="var(--primary-300)"/>
                <circle cx="200" cy="180" r="6" fill="var(--primary-300)"/>
                <circle cx="400" cy="180" r="6" fill="var(--primary-300)"/>
                <circle cx="420" cy="130" r="6" fill="var(--primary-300)"/>
                <circle cx="80" cy="170" r="6" fill="var(--primary-300)"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Expand Your Global Reach?</h2>
            <p>
              Partner with Global Trendx International and unlock seamless access to
              quality products from verified suppliers worldwide. Let's build your
              supply chain together.
            </p>
            <div className="cta-buttons">
              <Link to="/contact">
                <Button variant="primary" size="large">Request a Quote</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="large">Schedule a Consultation</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
