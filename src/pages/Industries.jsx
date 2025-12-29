import { Link } from 'react-router-dom';
import SectionWrapper from '../components/common/SectionWrapper';
import Button from '../components/common/Button';
import './Industries.css';

/**
 * Industries Page
 * Detailed view of industries served with specific capabilities
 */
const Industries = () => {
  const industries = [
    {
      name: 'Textiles & Apparel',
      icon: '👔',
      description: 'From premium fabrics to finished garments, we source across the entire textile value chain for fashion brands, retailers, and manufacturers.',
      capabilities: ['Woven & knitted fabrics', 'Ready-made garments', 'Technical textiles', 'Home textiles', 'Accessories & trims'],
      regions: 'India, Bangladesh, Vietnam, China, Turkey'
    },
    {
      name: 'Industrial Equipment',
      icon: '⚙️',
      description: 'Machinery, components, and industrial supplies for manufacturing, construction, and processing industries worldwide.',
      capabilities: ['Manufacturing machinery', 'Industrial tools', 'Spare parts', 'Safety equipment', 'Automation components'],
      regions: 'China, Germany, India, Taiwan, Japan'
    },
    {
      name: 'Consumer Electronics',
      icon: '📱',
      description: 'Electronic products and components ranging from consumer devices to specialized electronic parts and accessories.',
      capabilities: ['Consumer devices', 'Electronic components', 'Audio/video equipment', 'Smart home products', 'Cables & accessories'],
      regions: 'China, Taiwan, South Korea, Vietnam'
    },
    {
      name: 'Agricultural Products',
      icon: '🌾',
      description: 'Agricultural commodities, processed foods, and farming supplies sourced from prime agricultural regions globally.',
      capabilities: ['Grains & cereals', 'Spices & herbs', 'Processed foods', 'Agricultural equipment', 'Seeds & fertilizers'],
      regions: 'India, Brazil, Thailand, Vietnam, Indonesia'
    },
    {
      name: 'Home & Living',
      icon: '🏠',
      description: 'Furniture, home décor, kitchenware, and lifestyle products for retailers and hospitality businesses.',
      capabilities: ['Furniture', 'Home décor', 'Kitchenware', 'Bathroom products', 'Outdoor living'],
      regions: 'China, India, Vietnam, Indonesia, Poland'
    },
    {
      name: 'Automotive Parts',
      icon: '🚗',
      description: 'Automotive components, accessories, and aftermarket parts for vehicle manufacturers and distributors.',
      capabilities: ['Engine parts', 'Body components', 'Interior accessories', 'Electrical parts', 'Maintenance supplies'],
      regions: 'China, India, Thailand, Germany, Japan'
    },
    {
      name: 'Healthcare & Medical',
      icon: '🏥',
      description: 'Medical equipment, supplies, and healthcare products meeting international quality and compliance standards.',
      capabilities: ['Medical devices', 'Diagnostic equipment', 'Consumables', 'PPE & safety', 'Laboratory supplies'],
      regions: 'China, India, Germany, USA, Malaysia'
    },
    {
      name: 'Food & Beverages',
      icon: '🍽️',
      description: 'Food products, beverages, and packaging solutions for food service and retail distribution channels.',
      capabilities: ['Processed foods', 'Beverages', 'Ingredients', 'Food packaging', 'Restaurant supplies'],
      regions: 'India, Thailand, Brazil, Vietnam, China'
    },
    {
      name: 'Building & Construction',
      icon: '🏗️',
      description: 'Construction materials, building supplies, and architectural products for commercial and residential projects.',
      capabilities: ['Building materials', 'Plumbing fixtures', 'Electrical supplies', 'Flooring & tiles', 'Hardware & tools'],
      regions: 'China, India, Turkey, Italy, Vietnam'
    },
    {
      name: 'Packaging & Printing',
      icon: '📦',
      description: 'Packaging materials, printing supplies, and labeling solutions for various industry applications.',
      capabilities: ['Corrugated packaging', 'Flexible packaging', 'Labels & tags', 'Printing materials', 'Sustainable packaging'],
      regions: 'China, India, Vietnam, Thailand, Indonesia'
    },
    {
      name: 'Chemicals & Raw Materials',
      icon: '🧪',
      description: 'Industrial chemicals, raw materials, and specialty compounds for manufacturing and processing industries.',
      capabilities: ['Industrial chemicals', 'Specialty compounds', 'Pigments & dyes', 'Plastics & polymers', 'Adhesives & coatings'],
      regions: 'China, India, Germany, South Korea, USA'
    },
    {
      name: 'Sports & Recreation',
      icon: '⚽',
      description: 'Sporting goods, fitness equipment, and recreational products for retailers and brand owners.',
      capabilities: ['Sports equipment', 'Fitness gear', 'Outdoor products', 'Athletic apparel', 'Accessories'],
      regions: 'China, India, Pakistan, Vietnam, Taiwan'
    }
  ];

  return (
    <div className="industries-page">
      {/* Hero */}
      <section className="industries-hero">
        <div className="container">
          <div className="industries-hero-content">
            <span className="page-label">Industries We Serve</span>
            <h1>Expertise Across Diverse Industry Verticals</h1>
            <p>
              Deep industry knowledge combined with our global supplier network enables 
              us to deliver specialized sourcing solutions for businesses across sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <SectionWrapper background="white">
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-detail-card">
              <div className="industry-header">
                <span className="industry-icon">{industry.icon}</span>
                <h3>{industry.name}</h3>
              </div>
              <p className="industry-desc">{industry.description}</p>
              <div className="industry-capabilities">
                <h4>Key Capabilities</h4>
                <ul>
                  {industry.capabilities.map((cap, i) => (
                    <li key={i}>{cap}</li>
                  ))}
                </ul>
              </div>
              <div className="industry-regions">
                <span className="region-label">Primary Sourcing Regions:</span>
                <span className="region-list">{industry.regions}</span>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="industries-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Looking for Industry-Specific Solutions?</h2>
            <p>
              Our team includes specialists with deep experience in each industry vertical. 
              Let us understand your unique requirements and deliver tailored solutions.
            </p>
            <div className="cta-buttons">
              <Link to="/contact">
                <Button variant="primary" size="large">Discuss Your Needs</Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" size="large">View All Services</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
