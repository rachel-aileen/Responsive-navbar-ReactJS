import React from 'react';

export default function UnderlinedText({ headerText, bodyText }) {
  return (
    <div className='amenitiesText'>
      <div className='headingWithLine'>
        <h2 className='amenitiesHeaderText'>{headerText}</h2>
        <div className='longLine'></div>
      </div>
      <p className='amenitiesBodyText'>{bodyText}</p>
    </div>
  );
}
