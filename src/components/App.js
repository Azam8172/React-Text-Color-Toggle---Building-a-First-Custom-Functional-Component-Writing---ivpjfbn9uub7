import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
  function App() {
  const [isRed, setRed] = useState(true);

  const handleClick = () => {
    setRed(!isRed);
  };
//code here 
  return (
    <div id="main">
      <p className={isRed ? 'redColor' : 'blueColor'} >Newton School</p>
      <button id='button' onClick={}>Change Style</button>
    </div>
  )
}


export default App;
