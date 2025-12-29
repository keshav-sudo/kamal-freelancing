import './SectionWrapper.css';

/**
 * SectionWrapper Component
 * Consistent section layout with header and optional background
 */
const SectionWrapper = ({ 
  children, 
  title, 
  subtitle,
  background = 'white',
  className = '',
  id
}) => {
  return (
    <section 
      id={id}
      className={`section-wrapper bg-${background} ${className}`}
    >
      <div className="container">
        {(title || subtitle) && (
          <div className="section-header">
            {title && <h2>{title}</h2>}
            {subtitle && <p>{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
