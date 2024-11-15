// src/app/components/PokemonCard.tsx

import React from 'react';
import { useRouter } from 'next/navigation';

interface PokemonCardProps {
  name: string;
  imageUrl: string;
  types: string[];
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, imageUrl, types }) => {
  const router = useRouter();

  // Función para manejar el clic y navegar a la página de detalles
  const handleClick = () => {
    router.push(`/pokemon/${name}`);
  };

  return (
    <div onClick={handleClick} className="pokemon-card" style={{ cursor: 'pointer' }}>
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>Tipos: {types.join(', ')}</p>
    </div>
  );
};

export default PokemonCard;
