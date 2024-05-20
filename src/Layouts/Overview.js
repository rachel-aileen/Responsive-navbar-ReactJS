import React from 'react';
import '../Styles/main.css';
import PrimaryButton from '../Components/PrimaryButton';

export default function Overview() {
  return (
    <div className='overview'>
    <div className='overviewPhoto'>
      <img
        src='https://firebasestorage.googleapis.com/v0/b/ally-health-obgyn.appspot.com/o/homeImg1Estelle.png?alt=media&token=6ce8045f-6e79-423e-a116-362acd19073f'
        alt='Empty Living Room'
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
