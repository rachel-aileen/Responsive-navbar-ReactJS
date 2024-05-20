import React from 'react';
import Navbar from './Navbar';
import "../Styles/main.css";

const Hero = () => {
  return (
    <div className="hero">
      <Navbar />
      <div className="heroSquareBackground">
        <div className="heroContent">
          <h1>Luxurious Living in Eastern Philadelphia</h1>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
