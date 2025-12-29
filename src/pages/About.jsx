import { Link } from 'react-router-dom';
import SectionWrapper from '../components/common/SectionWrapper';
import Button from '../components/common/Button';
import './About.css';

/**
 * About Us Page
 * Company story, mission, vision, and values
 */
const About = () => {
  const values = [
    {
      title: 'Integrity',
      description: 'We operate with transparency and honesty in every transaction, building lasting trust with our partners.',
      icon: '🤝'
    },
    {
      title: 'Excellence',
      description: 'We pursue the highest standards in product quality, service delivery, and operational efficiency.',
      icon: '⭐'
    },
    {
      title: 'Innovation',
      description: 'We continuously evolve our processes and solutions to meet the changing needs of global trade.',
      icon: '💡'
    },
    {
      title: 'Partnership',
      description: 'We view every client relationship as a long-term partnership built on mutual success and growth.',
      icon: '🌐'
    }
  ];

  const milestones = [
    { year: '2008', title: 'Company Founded', description: 'Established as a trading company with focus on Asia-Europe trade routes.' },
    { year: '2012', title: 'Global Expansion', description: 'Expanded operations to include North America and Middle East markets.' },
    { year: '2016', title: 'On-Demand Model', description: 'Pioneered the on-demand supply model for flexible sourcing solutions.' },
    { year: '2020', title: 'Digital Transformation', description: 'Launched digital platforms for seamless order management and tracking.' },
    { year: '2024', title: 'Industry Leader', description: 'Recognized as a leading B2B export solutions provider serving 50+ countries.' }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <span className="page-label">About Us</span>
            <h1>Building Bridges Across Global Markets</h1>
            <p>
              For over 15 years, Global Trendx International has been at the forefront 
              of connecting businesses with quality products and reliable supply chains 
              across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <SectionWrapper background="white">
        <div className="story-section">
          <div className="story-content">
            <span className="section-label">Our Story</span>
            <h2>From Vision to Global Impact</h2>
            <p>
              Global Trendx International was founded with a clear mission: to simplify 
              international trade for businesses of all sizes. What started as a small 
              trading operation has grown into a comprehensive global sourcing and export 
              solutions provider.
            </p>
            <p>
              Our founders recognized the challenges businesses face when navigating 
              international supply chains – from finding reliable suppliers to managing 
              logistics and ensuring quality. We built Global Trendx to address these 
              pain points with a client-first approach.
            </p>
            <p>
              Today, we serve hundreds of businesses across more than 50 countries, 
              providing end-to-end support from product sourcing to final delivery. Our 
              on-demand supply model has revolutionized how companies approach 
              international procurement.
            </p>
          </div>
          <div className="story-visual">
            <div className="visual-card">
              <svg viewBox="0 0 300 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="100" width="260" height="130" rx="10" fill="var(--primary-100)"/>
                <rect x="40" y="60" width="100" height="80" rx="8" fill="var(--primary-200)"/>
                <rect x="160" y="40" width="100" height="100" rx="8" fill="var(--primary-300)"/>
                <circle cx="250" cy="35" r="25" fill="var(--primary-200)"/>
                <path d="M30 230L80 180L130 200L180 160L230 180L280 150" stroke="var(--primary-500)" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Mission & Vision */}
      <SectionWrapper background="light">
        <div className="mission-vision">
          <div className="mission-card">
            <div className="mv-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To empower businesses worldwide with seamless access to quality products 
              and reliable supply chain solutions, enabling growth through simplified 
              international trade.
            </p>
          </div>
          <div className="vision-card">
            <div className="mv-icon">🔭</div>
            <h3>Our Vision</h3>
            <p>
              To become the world's most trusted partner for on-demand global sourcing, 
              setting the standard for quality, reliability, and innovation in 
              international trade.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Values Section */}
      <SectionWrapper 
        background="white"
        title="Our Core Values"
        subtitle="The principles that guide every decision and relationship at Global Trendx International."
      >
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <span className="value-icon">{value.icon}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Timeline Section */}
      <SectionWrapper 
        background="light"
        title="Our Journey"
        subtitle="Key milestones in our growth from a trading startup to a global export solutions leader."
      >
        <div className="timeline">
          {milestones.map((milestone, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-year">{milestone.year}</span>
              </div>
              <div className="timeline-content">
                <h4>{milestone.title}</h4>
                <p>{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Team Philosophy */}
      <section className="team-section">
        <div className="container">
          <div className="team-content">
            <span className="section-label">Our Team</span>
            <h2>Experts Dedicated to Your Success</h2>
            <p>
              Our team comprises experienced trade professionals, logistics experts, 
              quality assurance specialists, and dedicated account managers. With 
              combined experience spanning decades in international trade, we bring 
              deep industry knowledge to every client engagement.
            </p>
            <p>
              From our sourcing specialists in manufacturing hubs to our logistics 
              coordinators managing global shipments, every team member is committed 
              to delivering exceptional service and ensuring your business objectives 
              are met.
            </p>
            <Link to="/contact">
              <Button variant="primary" size="large">Get in Touch</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Partner With Us Today</h2>
            <p>
              Join hundreds of businesses that trust Global Trendx International 
              for their global sourcing and export needs.
            </p>
            <div className="cta-buttons">
              <Link to="/contact">
                <Button variant="primary" size="large">Request a Quote</Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="large">Learn How It Works</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
