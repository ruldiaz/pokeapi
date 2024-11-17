import React from 'react';
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
  console.log(pokemonList);
  
  return (
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
        />
      ))}
    </div>
  );
};

export default PokemonList;
