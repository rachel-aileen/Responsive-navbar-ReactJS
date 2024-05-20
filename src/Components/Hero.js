import React from 'react';
import Navbar from './Navbar';
import "../Styles/main.css";
import PrimaryButton from './PrimaryButton';

const Hero = () => {
  return (
    <div className="hero">
      <Navbar />
      <div className="heroSquareBackground">
        <div className="heroContent">
          <h1 className='h1Text'>Luxurious Living in Eastern Philadelphia</h1>
          <p className='bodyText'>Lorem ipsum dolor sit amet, consectetur.</p>
          <PrimaryButton buttonText="View Availability" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
