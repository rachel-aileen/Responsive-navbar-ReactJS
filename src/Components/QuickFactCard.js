import React from 'react'
import { FiHome } from "react-icons/fi";
import { GoHome } from "react-icons/go";


import '../Styles/main.css';


export default function QuickFactCard() {
  return (
        <div className='quickFactCard' >
         <GoHome className='quickFactIcon ' />
        <h2 className='quickFactHeaderText'>Building</h2>
        <div className='cardLine'></div>
        <p className='quickFactsBodyText'>Lorem ipsum</p>
        </div>
        
  )
}
