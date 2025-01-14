import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src="/images/enagic.svg" alt="Enagic Logo" />
        </a>
      </div>
      <nav className="navbar-links">
        <div className="navbar-item">
          <a href="#products">Enagic Products</a>
        </div>
        <div className="navbar-item dropdown">
          <a href="#info">Consumer Information</a>
          <div className="dropdown-content">
            <a href="#benefits">Benefits of Kangen Water</a>
            <a href="#uses">60+ Uses for the K8</a>
            <a href="#call">Book a No-Cost Information Call</a>
            <a href="#maintenance">Machine Maintenance Reminders</a>
            <a href="#resources">Resources</a>
            <a href="#faq">Consumer FAQ</a>
          </div>
        </div>
        <div className="navbar-item">
          <a href="#distributor">Become a Distributor</a>
        </div>
        <div className="navbar-item">
          <a href="#about">About Us</a>
        </div>
        <div className="navbar-item">
          <a href="#contact">Contact Us</a>
        </div>
      </nav>
      <div className="navbar-actions">
        <a href="#order" className="call-to-order">
          📞 CALL TO ORDER
        </a>
        <button className="search-button">🔍</button>
      </div>
    </header>
  );
};

export default Header;
