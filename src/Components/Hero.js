import React from 'react';
import Navbar from './Navbar';
import "../Styles/main.css";

const Hero = () => {
  return (
    <div className="hero">
      <Navbar />
      <div className="heroContent">
        <h1>Welcome to My Website</h1>
        <p>Your journey starts here.</p>
      </div>
    </div>
  );
};

export default Hero;
