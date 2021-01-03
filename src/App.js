 import {useEffect, useState} from 'react';
import './App.css';

function App() {
const [val, setVal] = useState({});
  useEffect(() => {
  fetch(`/.netlify/functions/hello?name=from servallesss function`)
  .then(res=>res.json())
  .then(obj=>setVal(obj))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
       <h2>Hello Dear Lover</h2>
       <p>{val.message}</p>
        
      </header>
    </div>
  );
}

export default App;
