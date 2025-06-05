// src/App.jsx

// Only keep the App.css import for now
import {useState} from 'react';
import './App.css'; 
import Greeting from './Greeting'; //This will import the greeting information. 

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      {/* This is the ONLY content that should be inside the Fragment for now */}
      <h1>Welcome Trainer. This is Day One of your coding adventure!</h1>
      <p>Are you ready?</p>
      <div className="card"> {/* A simple div to contain the button and text */}
        <button onClick={() => setCount(prevCount => prevCount + 1)}>
          Count is {count}
        </button>
        <p>Click the button above to update your total amount of pokemon</p>
      </div>
      {/* END ADDITION */}


      <Greeting />
      {/* We are going to add name functions under this*/}
      <Greeting name="JigsawJoe" adventureLevel={13}/>
      <Greeting name="Timmy Reckless" adventureLevel={93}/>
      <Greeting name="Aluwing"adventureLevel={72}/>
    </>
  );
}

export default App;