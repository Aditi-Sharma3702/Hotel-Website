import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Pathaleshwara Sadanam</div>
      <nav>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#rooms">Rooms</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
