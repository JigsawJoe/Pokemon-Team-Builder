// src/components/PokemonCard.jsx

import React from 'react'; // React is implicitly imported in newer versions but good to be explicit for components

// This component will receive 'props' as an argument.
// We are immediately destructuring the props into { name, type, imageUrl }
function PokemonCard({ name, type, imageUrl }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '15px',
      margin: '10px',
      textAlign: 'center',
      width: '150px', // Fixed width for display
      backgroundColor: '#f8f8f8',
      boxShadow: '2px 2px 5px rgba(0,0,0,0.1)'
    }}>
      <img src={imageUrl} alt={name} style={{ width: '100px', height: '100px' }} />
      <h3>{name}</h3>
      <p>Type: {type}</p>
    </div>
  );
}

export default PokemonCard;