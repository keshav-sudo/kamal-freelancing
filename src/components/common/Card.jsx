import './Card.css';

/**
 * Card Component
 * Reusable card for services, industries, and features
 */
const Card = ({ 
  icon, 
  title, 
  description, 
  variant = 'default',
  className = '',
  children,
  onClick
}) => {
  return (
    <div 
      className={`card card-${variant} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {icon && (
        <div className="card-icon">
          {icon}
        </div>
      )}
      {title && <h3 className="card-title">{title}</h3>}
      {description && <p className="card-description">{description}</p>}
      {children}
    </div>
  );
};

export default Card;
