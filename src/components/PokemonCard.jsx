// src/components/PokemonCard.jsx

import React from 'react';

function PokemonCard({ name, type, imageUrl }) {
  const handleAddClick =() => {
    console.log(`Adding ${name} to team!`);
  }
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '15px',
      margin: '10px',
      textAlign: 'center',
      width: '150px',
      backgroundColor: '#f8f8f8',
      boxShadow: '2px 2px 5px rgba(0,0,0,0.1)'
    }}>
      <img src={imageUrl} alt={name} style={{ width: '100px', height: '100px' }} />
      <h3>{name}</h3>
      <p>Type: {type}</p>
      <button style={{
        marginTop: '10px',
        padding: '8px 15px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
         onClick={handleAddClick}>
        Add to Team
      </button>
    </div>
  );
}

export default PokemonCard;