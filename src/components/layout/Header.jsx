import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

/**
 * Header Component
 * Professional navigation with logo and responsive mobile menu
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products & Services' },
    { path: '/industries', label: 'Industries' },
    { path: '/global-reach', label: 'Global Reach' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="container header-container">
        {/* Logo */}
        <Link to="/" className="header-logo">
          <div className="logo-icon">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2"/>
              <path d="M20 6C20 6 32 14 32 20C32 26 20 34 20 34" stroke="currentColor" strokeWidth="2"/>
              <path d="M20 6C20 6 8 14 8 20C8 26 20 34 20 34" stroke="currentColor" strokeWidth="2"/>
              <ellipse cx="20" cy="20" rx="12" ry="5" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-name">Global Trendx</span>
            <span className="logo-tagline">International</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="header-nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link to="/contact" className="header-cta">
          Request Quote
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mobile-cta"
            onClick={() => setIsMenuOpen(false)}
          >
            Request Quote
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
