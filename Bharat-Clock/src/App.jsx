import 'bootstrap/dist/css/bootstrap.min.css'
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
