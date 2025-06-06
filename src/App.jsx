// src/App.jsx

// Only keep the App.css import for now
import {useState} from 'react';
import './App.css';
import Greeting from './Greeting'; //This will import the greeting information.
import PokemonCard from './components/PokemonCard';

function App() {
  const [count, setCount] = useState(0);
  // The below line will simulate a log in status.
  const [isLoggedin, setisLoggedIN] = useState(false);

  const PokemonData = [ { id: 1, name: 'Bulbasaur', type: 'Grass/Poison', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
    { id: 4, name: 'Charmander', type: 'Fire', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
    { id: 7, name: 'Squirtle', type: 'Water', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
    { id: 152, name: 'Chikorita', type: 'Grass', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png' },
    { id: 155, name: 'Cyndaquil', type: 'Fire', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png' },
    { id: 158, name: 'Totodile', type: 'Water', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png' },
  ];



  return (
    <>
      {isLoggedin ? (
        <h2>Welcome back, awesome Trainer!</h2>
      ) : (
        <h2>Please log in to start your adventure.</h2>
      )}

      <h1>Welcome Trainer. This is Day Two of your coding adventure!</h1>
      <p>Are you ready?</p>
      <div className="card">
        <button onClick={() => setCount(prevCount => prevCount + 1)}>
          Count is {count}
        </button>
        
        {count > 4 && (
            <p style={{ color: '#282f3c', fontWeight: 'bold' }}>
            You are 1 pokemon away from a whole team, who ya gonna choose?
            </p>
        )} 
        <p>Click the button above to update your total amount of pokemon</p>
      </div>

      <div className='card' style={{ marginTop: '20px'}}>
        <button onClick={() => setisLoggedIN(!isLoggedin)}>
          {isLoggedin ? 'Log Out' : 'Log In'}
        </button>
      </div>

      <Greeting />
      <Greeting name="JigsawJoe" adventureLevel={13} />
      <Greeting name="Timmy Reckless" adventureLevel={93} />
      <Greeting name="Aluwing" adventureLevel={72} />
      
 <h2 style={{marginTop: '40px'}}>Your Pokemon Roster (using Components!)</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}> {/* Added a flex container for card layout */}
        {PokemonData.map(pokemon => (
          <PokemonCard
            key={pokemon.id} // IMPORTANT: Using the unique 'id' from the object as the key!
            name={pokemon.name}
            type={pokemon.type}
            imageUrl={pokemon.imageUrl}
          />
        ))}
      </div>
    </>
  );
}

export default App;