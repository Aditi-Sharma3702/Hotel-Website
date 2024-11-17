import React from 'react';
import './Footer.css'; // Import the CSS for styling

const Footer = () => {
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Hotel Paradise</h3>
          <p>Experience luxury and comfort with us!</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/rooms">Rooms</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul>
            <li>Phone: +123 456 7890</li>
            <li>Email: info@hotelparadise.com</li>
            <li>Address: 123 Paradise Street, City, Country</li>
          </ul>
        </div>

        <div className="footer-section social-media">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Hotel Paradise. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
