import React, { useState } from 'react';
import './App.css';

function App() {
  const [isRed, setRed] = useState(true);

  const handleClick = () => {
    setRed(!isRed);
  };

  return (
    <div className="App">
      <button id="button" onClick={handleClick}>
        Toggle Text Color
      </button>
      <p className={isRed ? 'red' : 'blue'}>
        This is some text with dynamic color.
      </p>
    </div>
  );
}

export default App;







// import React, {useEffect, useState} from 'react'
// import '../styles/App.css';

// const App = () => {
// //code here 
//   return (
//     <div id="main">
//       <p className={} >Newton School</p>
//       <button id='button' onClick={}>Change Style</button>
//     </div>
//   )
// }


// export default App;
