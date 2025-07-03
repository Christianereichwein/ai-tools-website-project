import React, { useState, useMemo } from 'react';
import './App.css';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import ToolGrid from './components/ToolGrid';
import Footer from './components/Footer';
import { aiTools } from './data/aiTools';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Alle');
  const [selectedPricing, setSelectedPricing] = useState('Alle');
  const [selectedLevel, setSelectedLevel] = useState('Alle');

  const filteredTools = useMemo(() => {
    return aiTools.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tool.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'Alle' || tool.category === selectedCategory;
      const matchesPricing = selectedPricing === 'Alle' || tool.pricing === selectedPricing;
      const matchesLevel = selectedLevel === 'Alle' || tool.level === selectedLevel;
      
      return matchesSearch && matchesCategory && matchesPricing && matchesLevel;
    });
  }, [searchTerm, selectedCategory, selectedPricing, selectedLevel]);

  return (
    <div className="App">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterBar 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedPricing={selectedPricing}
        setSelectedPricing={setSelectedPricing}
        selectedLevel={selectedLevel}
        setSelectedLevel={setSelectedLevel}
      />
      <main className="main-content">
        <div className="container">
          <div className="results-header">
            <h2>
              {filteredTools.length} KI-Tools gefunden
            </h2>
            <p>
              Entdecken Sie die besten KI-Tools für Ihr Business, sortiert nach Kategorien und Funktionen.
            </p>
          </div>
          <ToolGrid tools={filteredTools} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
