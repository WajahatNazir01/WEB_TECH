import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div className={`liquid-card p-8 ${className}`}>
      <div className="liquid-shine"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Card;