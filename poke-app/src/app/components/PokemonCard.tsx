// src/app/components/PokemonCard.tsx

import React from 'react';
import { useRouter } from 'next/navigation';

interface PokemonCardProps {
  name: string;
  imageUrl: string;
  types: string[];
}

// Colores asociados a cada tipo de Pokémon
const typeColors: { [key: string]: string } = {
  fire: '#F08030',
  water: '#6890F0',
  grass: '#78C850',
  electric: '#F8D030',
  psychic: '#F85888',
  ice: '#98D8D8',
  dragon: '#7038F8',
  dark: '#705848',
  fairy: '#EE99AC',
  normal: '#A8A878',
  fighting: '#C03028',
  flying: '#A890F0',
  poison: '#A040A0',
  ground: '#E0C068',
  rock: '#B8A038',
  bug: '#A8B820',
  ghost: '#705898',
  steel: '#B8B8D0',
};

const PokemonCard: React.FC<PokemonCardProps> = ({ name, imageUrl, types }) => {
  const router = useRouter();

  // Función para manejar el clic y navegar a la página de detalles
  const handleClick = () => {
    router.push(`/pokemon/${name}`);
  };

  // Obtener el color basado en el primer tipo
  const backgroundColor = typeColors[types[0]?.toLowerCase()] || '#f0f0f0';

  return (
    <div
      onClick={handleClick}
      className="pokemon-card"
      style={{
        cursor: 'pointer',
        backgroundColor,
        padding: '1rem',
        borderRadius: '10px',
        color: '#fff',
      }}
    >
      <img src={imageUrl} alt={name} style={{ width: '100%', borderRadius: '8px' }} />
      <h2>{name}</h2>
      <p>Tipos: {types.join(', ')}</p>
    </div>
  );
};

export default PokemonCard;
