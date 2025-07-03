import React from 'react';

const ToolCard = ({ tool }) => {
  return (
    <div className="tool-card">
      <h3>{tool.name}</h3>
      <div className="tool-badges">
        <span className={`badge level-${tool.level}`}>{tool.level}</span>
        <span className={`badge pricing-${tool.pricing}`}>{tool.pricing}</span>
      </div>
      <p>{tool.description}</p>
      <div className="tool-features">
        {tool.features.map((feature, index) => (
          <span key={index} className="feature-tag">{feature}</span>
        ))}
      </div>
      <div className="tool-category">
        {tool.category}
      </div>
      <a href={tool.link} target="_blank" rel="noopener noreferrer" className="visit-button">
        Besuchen
      </a>
    </div>
  );
};

export default ToolCard;
