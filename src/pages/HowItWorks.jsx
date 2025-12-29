import { Link } from 'react-router-dom';
import SectionWrapper from '../components/common/SectionWrapper';
import Button from '../components/common/Button';
import './HowItWorks.css';

/**
 * How It Works Page
 * Step-by-step sourcing and supply flow explanation
 */
const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Share Your Requirements',
      description: 'Tell us what you need – product specifications, quantities, target pricing, and delivery timelines. Our team will analyze your requirements and provide initial feasibility assessment.',
      details: [
        'Submit detailed product specifications',
        'Specify quantity requirements and timeline',
        'Share target pricing and quality standards',
        'Provide any samples or reference materials'
      ],
      icon: '📋'
    },
    {
      number: '02',
      title: 'Sourcing & Quotation',
      description: 'Our sourcing team identifies suitable manufacturers from our verified supplier network. We negotiate pricing, assess capabilities, and prepare comprehensive quotations for your review.',
      details: [
        'Supplier identification and vetting',
        'Price negotiation on your behalf',
        'Capability and capacity assessment',
        'Detailed quotation with all costs'
      ],
      icon: '🔍'
    },
    {
      number: '03',
      title: 'Sample Approval',
      description: 'Before production begins, we arrange product samples for your evaluation. You can review quality, make adjustments, and approve the final specifications.',
      details: [
        'Pre-production samples arranged',
        'Quality evaluation and testing',
        'Design modifications if needed',
        'Final specification approval'
      ],
      icon: '✅'
    },
    {
      number: '04',
      title: 'Production & Quality Control',
      description: 'Once approved, production begins with continuous monitoring. Our QC team conducts in-line inspections and ensures adherence to your specifications throughout.',
      details: [
        'Production monitoring',
        'In-line quality inspections',
        'Progress updates and reporting',
        'Issue resolution and adjustments'
      ],
      icon: '🏭'
    },
    {
      number: '05',
      title: 'Pre-Shipment Inspection',
      description: 'Before goods leave the factory, we conduct comprehensive pre-shipment inspections. Every order is verified against approved samples and specifications.',
      details: [
        'Final quality inspection',
        'Quantity verification',
        'Packaging and labeling check',
        'Documentation preparation'
      ],
      icon: '🔎'
    },
    {
      number: '06',
      title: 'Logistics & Delivery',
      description: 'We manage the entire shipping process – from freight booking to customs clearance. Track your shipment in real-time until it reaches your designated destination.',
      details: [
        'Freight forwarding arrangement',
        'Export documentation',
        'Customs clearance support',
        'Door-to-door delivery'
      ],
      icon: '🚢'
    }
  ];

  const faqs = [
    {
      question: 'What is the minimum order quantity?',
      answer: 'Unlike traditional importers, we offer flexible MOQs based on product type and supplier capabilities. Many orders start from as low as 100-500 units depending on the product category.'
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Initial quotations are typically provided within 48-72 hours. Complete sourcing including samples can take 2-4 weeks depending on product complexity. Production timelines vary by order size.'
    },
    {
      question: 'What payment terms do you offer?',
      answer: 'We offer flexible payment terms including T/T, Letter of Credit, and staged payments. For established clients, we can arrange credit terms based on relationship history.'
    },
    {
      question: 'How do you ensure product quality?',
      answer: 'Quality assurance includes supplier vetting, factory audits, production monitoring, pre-shipment inspections, and optional third-party lab testing. We guarantee quality through our comprehensive QC process.'
    },
    {
      question: 'Which shipping methods are available?',
      answer: 'We handle sea freight, air freight, and express courier shipments. The optimal method is recommended based on order volume, urgency, and cost considerations.'
    },
    {
      question: 'Can you handle custom manufacturing (OEM/ODM)?',
      answer: 'Absolutely. We specialize in custom manufacturing including private labeling, product modifications, and complete OEM/ODM development with our manufacturing partners.'
    }
  ];

  return (
    <div className="how-it-works-page">
      {/* Hero */}
      <section className="hiw-hero">
        <div className="container">
          <div className="hiw-hero-content">
            <span className="page-label">How It Works</span>
            <h1>Simple, Transparent Sourcing Process</h1>
            <p>
              From your initial inquiry to final delivery, we handle every aspect of 
              international sourcing with clarity and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <SectionWrapper background="white">
        <div className="process-timeline">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-indicator">
                <span className="step-icon">{step.icon}</span>
                <span className="step-number">{step.number}</span>
                {index < steps.length - 1 && <div className="step-line"></div>}
              </div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <ul className="step-details">
                  {step.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Timeline Summary */}
      <section className="timeline-summary">
        <div className="container">
          <div className="summary-header">
            <h2>Typical Timeline</h2>
            <p>From inquiry to delivery, here's what to expect</p>
          </div>
          <div className="timeline-bar">
            <div className="timeline-segment">
              <span className="segment-duration">1-3 Days</span>
              <span className="segment-label">Initial Quote</span>
            </div>
            <div className="timeline-segment">
              <span className="segment-duration">1-2 Weeks</span>
              <span className="segment-label">Samples</span>
            </div>
            <div className="timeline-segment">
              <span className="segment-duration">2-6 Weeks</span>
              <span className="segment-label">Production</span>
            </div>
            <div className="timeline-segment">
              <span className="segment-duration">2-5 Weeks</span>
              <span className="segment-label">Shipping</span>
            </div>
          </div>
          <p className="timeline-note">
            * Timelines vary based on product complexity, order volume, and destination.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <SectionWrapper 
        background="light"
        title="Frequently Asked Questions"
        subtitle="Common questions about our sourcing process and services."
      >
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h4>{faq.question}</h4>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="hiw-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>
              Share your requirements with our team and receive a detailed 
              quotation within 48 hours.
            </p>
            <div className="cta-buttons">
              <Link to="/contact">
                <Button variant="primary" size="large">Request a Quote</Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" size="large">View Our Services</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
