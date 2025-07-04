import React from 'react';
import ToolCard from './ToolCard';

const ToolGrid = ({ tools }) => {
  if (tools.length === 0) {
    return (
      <div className="no-results">
        <div className="emoji">🔍</div>
        <h3>Keine Tools gefunden</h3>
        <p>Versuchen Sie andere Suchbegriffe oder Filter.</p>
      </div>
    );
  }

  return (
    <div className="tool-grid">
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
};

export default ToolGrid;

