// src/components/PokemonCard.jsx

import React from 'react';

// Modified: Destructure the new 'pokemon' object and 'onAddToTeam' function from props
function PokemonCard({ name, type, imageUrl, pokemon, onAddToTeam }) {
  const handleAddClick = () => {
    // Now, call the function passed from the parent (App),
    // and pass the entire 'pokemon' object to it.
    onAddToTeam(pokemon); // Call the function passed via props
  };

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '15px',
      padding: '15px',
      margin: '10px',
      textAlign: '',
      width: '150px',
      backgroundColor: '#f8f8f8',
      boxShadow: '2px 2px 5px rgba(0,0,0,0.1)'
    }}>
      <img src={imageUrl} alt={name} style={{ width: '100px', height: '100px' }} />
      <h3>{name}</h3>
      <p>Type: {type}</p>
      <button
        style={{
          marginTop: '3px',
          padding: '10px 15px',
          backgroundColor: '#007bff',
          color: 'black',
          border: 'none',
          borderRadius: '15px',
          cursor: 'pointer'
        }}
        onClick={handleAddClick}
      >
        Add to Team
      </button>
    </div>
  );
}

export default PokemonCard;