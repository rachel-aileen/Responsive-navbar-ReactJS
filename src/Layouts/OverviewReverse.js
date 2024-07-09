import React from 'react'
import '../Styles/main.css';
import PrimaryButton from '../Components/PrimaryButton';

export default function OverviewReverse() {
  return (
    <div className='overviewReverse'>
    <div className='overviewPhotoReverse'>
      <img
        src='https://firebasestorage.googleapis.com/v0/b/ally-health-obgyn.appspot.com/o/minimalistic-living-room.png?alt=media&token=fed4dadc-45e9-4e49-b74f-a09abd771e04'
        alt='Empty Living Room'
        className='overviewImg'
      ></img>
    </div>
  
    <div className='overviewTextBoxReverse'>
      <h1 className='cursiveText'>Make It Your Own</h1>
      <h2 className='h2Text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo.</h2>
      <p className='bodyText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
      <PrimaryButton buttonText="View Gallery" />
    </div>
  </div>
  
  );
}
