import React, { useState } from 'react';
import PokemonCard from './PokemonCard';

interface PokemonDetails {
  name: string;
  image: string;
  types: string[];
}

interface PokemonListProps {
  pokemonList: PokemonDetails[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemonList }) => {
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetails | null>(null);

  const closeModal = () => {
    setSelectedPokemon(null);
  };

  return (
    <>
      <div
        className="pokemon-list"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem',
          padding: '1rem',
        }}
      >
        {pokemonList.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            imageUrl={pokemon.image}
            types={pokemon.types}
            onClick={() => setSelectedPokemon(pokemon)} // Abrir el modal con el Pokémon seleccionado
          />
        ))}
      </div>

      {/* Modal */}
      {selectedPokemon && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
          onClick={closeModal} // Cerrar al hacer clic fuera del modal
        >
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '10px',
              padding: '2rem',
              width: '90%',
              maxWidth: '600px',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()} // Prevenir el cierre al hacer clic dentro del modal
          >
            {/* Botón para cerrar */}
            <button
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'transparent',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
              }}
              onClick={closeModal}
            >
              &times;
            </button>

            {/* Contenido del modal */}
            <div style={{ textAlign: 'center' }}>
              <img
                src={selectedPokemon.image}
                alt={selectedPokemon.name}
                style={{
                  width: '200px',
                  height: '200px',
                  objectFit: 'contain',
                  marginBottom: '1rem',
                }}
              />
              <h2 style={{ marginBottom: '1rem' }}>{selectedPokemon.name}</h2>
              <p style={{ marginBottom: '1rem' }}>Tipos: {selectedPokemon.types.join(', ')}</p>
            </div>

            {/* Barras de información de poderes */}
            <div style={{ marginTop: '1rem' }}>
              {/* Simulando información de poderes */}
              {['Ataque', 'Defensa', 'Velocidad', 'Especial'].map((stat) => (
                <div key={stat} style={{ marginBottom: '1rem' }}>
                  <strong>{stat}</strong>
                  <div
                    style={{
                      height: '10px',
                      width: '100%',
                      backgroundColor: '#e0e0e0',
                      borderRadius: '5px',
                      overflow: 'hidden',
                      marginTop: '0.5rem',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: `${Math.random() * 100}%`, // Simula un valor aleatorio
                        backgroundColor: '#4caf50',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonList;
