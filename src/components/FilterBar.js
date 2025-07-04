import React from 'react';
import { categories, pricingOptions, levels } from '../data/aiTools';

const FilterBar = ({ 
  selectedCategory, 
  setSelectedCategory, 
  selectedPricing, 
  setSelectedPricing,
  selectedLevel,
  setSelectedLevel 
}) => {
  return (
    <div className="filter-bar">
      <div className="container">
        <div className="filter-container">
          {/* Category Filter */}
          <div className="filter-group">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Pricing Filter */}
          <div className="filter-group">
            {pricingOptions.map((pricing) => (
              <button
                key={pricing}
                onClick={() => setSelectedPricing(pricing)}
                className={`filter-button pricing ${selectedPricing === pricing ? 'active' : ''}`}
              >
                {pricing}
              </button>
            ))}
          </div>

          {/* Level Filter */}
          <div className="filter-group">
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`filter-button level ${selectedLevel === level ? 'active' : ''}`}
                style={{ textTransform: 'capitalize' }}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;

