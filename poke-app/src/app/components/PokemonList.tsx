// src/app/components/PokemonList.tsx

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
  return (
    <div className="pokemon-list">
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
