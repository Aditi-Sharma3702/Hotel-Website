import React from 'react';
import './Rooms.css';

const Rooms = () => {
  const imagePath = "https://images.woodenstreet.de/image/data%2FLooks%2F9.jpg";
  const handleClick = () => {
    alert("Booking functionality coming soon!");
  };

  return (
    <section className="rooms" id="rooms">
      <h2>Our Rooms</h2>
      <div className="room-list">
        <div className="room">
          <img src={imagePath} alt="Luxury Suite" />
          <h3>Luxury Suite</h3>
          <p>Spacious, elegant, with a stunning view.</p>
          <h5>Starting from <span>$399/night</span></h5>
          <button onClick={handleClick}>Book Now</button>
        </div>
        <div className="room">
          <img src="./ac.jpeg" width="300"  alt="Deluxe Room" />
          <h3>Deluxe Room</h3>
          <p>Comfort and style with modern amenities.</p>
          <h5>Starting from <span>$399/night</span></h5>
          <button onClick={handleClick}>Book Now</button>
        </div>
        <div className="room">
          <img src="./vip.jpeg" width="40" alt="Standard Room" />
          <h3>Standard Room</h3>
          <p>Cozy and affordable, perfect for a short stay.</p>
          <h5>Starting from <span>$399/night</span></h5>
          <button onClick={handleClick}>Book Now</button>
        </div>
      </div>
    </section>
  );
}

export default Rooms;
