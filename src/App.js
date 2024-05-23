import React from 'react';
import Hero from './Components/Hero';
import Overview from './Layouts/Overview';
import OverviewReverse from './Layouts/OverviewReverse';
import Amenities from './Layouts/Amenities';
import QuickFacts from './Layouts/QuickFacts';

function App() {
	return (
	  <React.Fragment>
		<Hero />
		<Overview imageUrl='https://firebasestorage.googleapis.com/v0/b/ally-health-obgyn.appspot.com/o/homeImg1Estelle.png?alt=media&token=6ce8045f-6e79-423e-a116-362acd19073f'/>
		<Amenities/>
		<OverviewReverse/>
		<QuickFacts/>
		<Overview imageUrl='https://firebasestorage.googleapis.com/v0/b/ally-health-obgyn.appspot.com/o/minimalistic-kitchen.png?alt=media&token=7ade0edd-cdf7-4832-957c-6636890f6874'/>
		
	  </React.Fragment>
	);
  }

export default App;
