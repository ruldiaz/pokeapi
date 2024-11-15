// src/app/pokemon/[id]/page.tsx

import { getPokemonDetails } from '../../services/apiService';
import './PokemonDetailPage.css';

interface PokemonDetails {
  name: string;
  sprites: {
    front_default: string;
  };
  height: number;
  weight: number;
}

const PokemonDetailPage = async ({ params }: { params: { id: string } }) => {
  // Construir la URL completa para obtener los detalles del Pokémon
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${params.id}`;

  // Obtener los detalles del Pokémon utilizando la URL completa
  const pokemon: PokemonDetails = await getPokemonDetails(pokemonUrl);

  // Normalización de altura y peso para las barras de progreso
  const maxHeight = 20; // Altura máxima para referencia en la barra
  const maxWeight = 1000; // Peso máximo para referencia en la barra
  const heightPercentage = (pokemon.height / maxHeight) * 100;
  const weightPercentage = (pokemon.weight / maxWeight) * 100;

  return (
    <div className="pokemon-detail">
      <h1 className="pokemon-name">{pokemon.name}</h1>
      <img className="pokemon-image" src={pokemon.sprites.front_default} alt={pokemon.name} />
      
      <div className="pokemon-stats">
        <div className="stat">
          <p>Altura:</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${heightPercentage}%` }}></div>
          </div>
          <span>{pokemon.height} m</span>
        </div>

        <div className="stat">
          <p>Peso:</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${weightPercentage}%` }}></div>
          </div>
          <span>{pokemon.weight} kg</span>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailPage;
