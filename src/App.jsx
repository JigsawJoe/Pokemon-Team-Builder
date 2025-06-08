// src/App.jsx

import {useState} from 'react';
import './App.css';
import Greeting from './Greeting';
import PokemonCard from './components/PokemonCard'; // This is the correct import for PokemonCard

function App() {
  const [count, setCount] = useState(0); // Keeping count state, though its display is removed for now
  const [isLoggedin, setisLoggedIN] = useState(false);

  // Corrected: 'pokemondata' (lowercase 'p') for consistency and convention
  const pokemondata = [
    { id: 1, name: 'Bulbasaur', type: 'Grass/Poison', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
    { id: 4, name: 'Charmander', type: 'Fire', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
    { id: 7, name: 'Squirtle', type: 'Water', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
    { id: 152, name: 'Chikorita', type: 'Grass', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png' },
    { id: 155, name: 'Cyndaquil', type: 'Fire', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png' },
    { id: 158, name: 'Totodile', type: 'Water', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png' },
  ];

  return (
    <>
      {/* Login/Logout Section */}
      {isLoggedin ? (
        <h2>Welcome to the Lab</h2>
      ) : (
        <h2>Please log in to start your adventure.</h2>
      )}

      {/* Greeting and General Info */}
      <Greeting name="JigsawJoe" adventureLevel={20} />
      <p>We will help you select a team</p>

      {/* Login/Logout Button */}
      <div className='card' style={{ marginTop: '20px'}}>
        <button onClick={() => setisLoggedIN(!isLoggedin)}>
          {isLoggedin ? 'Log Out' : 'Log In'}
        </button>
      </div>

      {/* Pokemon Roster Display */}
      <h2 style={{marginTop: '40px'}}>Your Pokemon Roster (using Components!)</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {pokemondata.map(pokemon => (
          <PokemonCard
            key={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            imageUrl={pokemon.imageUrl}
          />
        ))}
      </div>
    </>
  );
}

export default App; // This should be the very last line of your App.jsx