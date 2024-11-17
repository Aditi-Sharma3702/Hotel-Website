import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Rooms />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

