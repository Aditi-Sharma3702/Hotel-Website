import React from 'react';
import './Hero.css';

const Hero = () => {
  const handleClick = () => {
    alert("Booking functionality coming soon!");
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-text">
        <h1>Welcome to Pathaleshwara Sadanam</h1>
        <p>Your luxurious escape awaits</p>
        <button onClick={handleClick}>Book Now</button>
      </div>
    </section>
  );
}

export default Hero;
