import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClockHeading from './Components/clockHeading'
import ClockBody from './Components/ClockBody'

function App() {
  return (
    <center className='clock-container'>
    <ClockHeading />
    <ClockBody></ClockBody>
    
    </center>
  );
}

export default App
