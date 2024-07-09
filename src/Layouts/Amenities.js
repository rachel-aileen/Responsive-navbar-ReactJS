import React from 'react';
import '../Styles/main.css';
import UnderlinedText from '../Components/UnderlinedText';

export default function Amenities() {
  return (
    <div className='amenities'>
      <div className='amenitiesTextBox'>
        <UnderlinedText 
          headerText="Lorem" 
          bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <UnderlinedText 
          headerText="Lorem" 
          bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <UnderlinedText 
          headerText="Lorem" 
          bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>
      <div className='amenitiesPhoto'>
        <img
          src='https://firebasestorage.googleapis.com/v0/b/ally-health-obgyn.appspot.com/o/amenitiesImg.png?alt=media&token=17cd1f24-8a8c-4b68-bda2-3997fd1a3ae1'
          alt='White Stairs'
          className='amenitiesImg'
        />
      </div>
    </div>
  );
}
