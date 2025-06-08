// src/App.jsx

import {useState} from 'react';
import './App.css';
import Greeting from './Greeting';
import PokemonCard from './components/PokemonCard';

function App() {
  const [count, setCount] = useState(0);
  const [isLoggedin, setisLoggedIN] = useState(false);

  const [username, setUsername] = useState('');

  // NEW: Declare feedbackMessage state here
  const [feedbackMessage, setFeedbackMessage] = useState(''); // Initialize as an empty string


  const [team, setTeam] = useState([]); //This will create the list for team based off the brackets

  const addToTeam = (pokemonToAdd) => {
    const isAlreadyInTeam = team.some(pokemon => pokemon.id === pokemonToAdd.id);

    if (isAlreadyInTeam) {
      // NEW: Set feedback message for already in team
      setFeedbackMessage(`${pokemonToAdd.name} is already in your team! Try adding some variety to your team trainer.`);
      // Optional: Clear message after a few seconds
      setTimeout(() => setFeedbackMessage(''),10000); // Clears message after 3 seconds
    } else {
      setTeam(prevTeam => [...prevTeam, pokemonToAdd]);
      // NEW: Set feedback message for added to team
      setFeedbackMessage(`${pokemonToAdd.name} added to team!`);
      // Optional: Clear message after a few seconds
      setTimeout(() => setFeedbackMessage(''),10000); // Clears message after 3 seconds
    }
  };

  const removeFromTeam = (pokemonIdToRemove) => {
    setTeam(prevTeam => prevTeam.filter(pokemon => pokemon.id !== pokemonIdToRemove));
    // NEW: Set feedback message for removed from team
    setFeedbackMessage(`Pokemon with ID ${pokemonIdToRemove} removed from team. It's okay, the pokemon doesn't feel bad!`);
    // Optional: Clear message after a few seconds
    setTimeout(() => setFeedbackMessage(''), 3000); // Clears message after 3 seconds
  };


  const pokemondata = [
    { id: 1, name: 'Bulbasaur', type: 'Grass/Poison', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
    { id: 4, name: 'Charmander', type: 'Fire', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
    { id: 7, name: 'Squirtle', type: 'Water', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
    { id: 152, name: 'Chikorita', type: 'Grass', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png' },
    { id: 155, name: 'Cyndaquil', type: 'Fire', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png' },
    { id: 158, name: 'Totodile', type: 'Water', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png' },
  ];

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    // console.log("Current username input:", event.target.value); // You can remove this console.log now if you like
  }

  return (
    <>
      {/* Login/Logout Section */}
      {isLoggedin ? (
        <h2>Welcome to the Lab</h2>
      ) : (
        <>
          <h2>Please log in to start your adventure.</h2>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
        </>
      )}

      {/* NEW: Display the feedback message here */}
      {feedbackMessage && ( // Only render if feedbackMessage is not empty
        <p style={{
          marginTop: '20px',
          padding: '10px',
          backgroundColor: '#e7f3e7', // Light green background
          border: '1px solid #d4edda', // Green border
          borderRadius: '5px',
          color: '#155724', // Dark green text
          fontWeight: 'bold',
          textAlign: 'center'
        }}>
          {feedbackMessage}
        </p>
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

      {/* Display Current Team Size */}
      <h3 style={{marginTop: '20px'}}>Your Current Team: {team.length} Pokemon</h3>

      {/* Section to display pokemon selected to team*/}
      {team.length > 0 && (
        <div style={{ marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
          <h2 style={{ marginBottom: '20px' }}>Your Selected Team</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
            {team.map(pokemon => (
              <div key={pokemon.id} style={{
                border: '1.5px solid #ddd',
                borderRadius: '6px',
                padding: '8px',
                textAlign: 'center',
                backgroundColor: '#fff',
                boxShadow: '3px 3px 6px rgba(63, 63, 63, 0.1)',
                width: '100px',
                fontSize: '1.0em'
              }}>
                <img src={pokemon.imageUrl} alt={pokemon.name} style={{ width: '65px', height: '65px' }} />
                <p style={{ margin: '5px 0 0 0', color: '#333', fontSize: '1em' }}>{pokemon.name}</p>
                <button
                  onClick={() => removeFromTeam(pokemon.id)}
                  style={{
                    background: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '5px 8px',
                    marginTop: '8px',
                    cursor: 'pointer',
                    fontSize: '0.8em'
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      {team.length === 0 && (
        <p style={{ marginTop: '20px', fontStyle: 'italic', color: '#666' }}>Your team is empty. Select some Pokémon!</p>
      )}


      {/* Pokemon Roster Display */}
      <h2 style={{marginTop: '40px'}}>Your Pokemon Roster (using Components!)</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {pokemondata.map(pokemon => (
          <PokemonCard
            key={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            imageUrl={pokemon.imageUrl}
            pokemon={pokemon}
            onAddToTeam={addToTeam}
          />
        ))}
      </div>
    </>
  );
}

export default App;