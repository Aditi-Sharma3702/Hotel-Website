import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Free Wi-Fi',
      description: 'Stay connected with high-speed Wi-Fi available throughout the hotel.',
      icon: '🌐',
      details: 'Unlimited Wi-Fi with no bandwidth limitations in all areas of the hotel.',
    },
    {
      id: 2,
      title: 'Room Service',
      description: 'Enjoy 24/7 room service with a variety of delicious food options.',
      icon: '🍽️',
      details: 'Choose from a wide menu of food delivered directly to your room.',
    },
    {
      id: 3,
      title: 'Pool & Spa',
      description: 'Relax and unwind with our luxurious pool and spa services.',
      icon: '🏊‍♂️',
      details: 'Enjoy a rejuvenating massage, spa treatments, or just relax by the pool.',
    },
    {
      id: 4,
      title: 'Airport Shuttle',
      description: 'Convenient airport shuttle services to and from the hotel.',
      icon: '🚖',
      details: 'Enjoy safe, comfortable, and timely airport shuttle services.',
    },
  ];

  const toggleDetails = (id) => {
    setActiveService(activeService === id ? null : id);
  };

  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map(service => (
          <div
            className="service-card"
            key={service.id}
            onClick={() => toggleDetails(service.id)}
          >
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            {activeService === service.id && <p className="more-info">{service.details}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
