import React from 'react';
import '../Styles/main.css';
import PrimaryButton from '../Components/PrimaryButton';

export default function Overview({ imageUrl }) {
  return (
    <div className='overview'>
      <div className='overviewPhoto'>
        <img
          src={imageUrl}
          alt='Overview Image'
          className='overviewImg'
        ></img>
      </div>

      <div className='overviewTextBox'>
        <h1 className='cursiveText'>Fine Scenery</h1>
        <h2 className='h2Text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo.</h2>
        <p className='bodyText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        <PrimaryButton buttonText="Find A Floor Plan" />
      </div>
    </div>
  );
}
