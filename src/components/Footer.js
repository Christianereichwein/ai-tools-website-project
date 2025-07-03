import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>AI Tools für Business</h3>
            <p>Ihre zentrale Anlaufstelle für die besten KI-Tools zur Steigerung der Geschäftsproduktivität.</p>
          </div>
          <div className="footer-section categories">
            <h3>Kategorien</h3>
            <ul>
              <li><a href="#">KI-Assistenten</a></li>
              <li><a href="#">Video-Generierung</a></li>
              <li><a href="#">Bild-Generierung</a></li>
              <li><a href="#">Automatisierung</a></li>
              <li><a href="#">Content-Erstellung</a></li>
            </ul>
          </div>
          <div className="footer-section resources">
            <h3>Ressourcen</h3>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Kontakt</a></li>
              <li><a href="#">Über uns</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 AI Tools für Business. Alle Rechte vorbehalten.</p>
          <div className="footer-links">
            <a href="#">Datenschutz</a>
            <a href="#">Impressum</a>
            <a href="#">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
