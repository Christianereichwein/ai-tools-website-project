import React from 'react';

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>AI Tools für Business</h1>
        <p>Entdecken Sie die besten KI-Tools für Ihr Unternehmen</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="KI-Tools durchsuchen..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="button">🔍</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
