// src/Greeting.jsx

import React from 'react'; // React is implicitly imported in new versions, but good practice to include

function Greeting(props) {
  return (
    <div>
      <h2>You are starting to get the hang of it trainer. Keep up the good work!</h2>
      <p>{props.name}</p>
      <p>Your current Adventure level is: {props.adventureLevel || 'unknown'}</p>
    </div>
  );
}

export default Greeting; // This line makes our component available to other files