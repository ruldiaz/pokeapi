import { getPokemonDetails } from '../../services/apiService';
import './PokemonDetailPage.css';

interface PokemonDetails {
  name: string;
  sprites: {
    other: {
      dream_world: {
        front_default: string
      }
    }
  };
  height: number;
  weight: number;
}

export const dynamic = "force-dynamic"; // Asegura que el renderizado es dinámico

const PokemonDetailPage = async ({ params }: { params: { id: string } }) => {
  if (!params?.id) {
    throw new Error("El parámetro 'id' no está disponible.");
  }

  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${params.id}`;
  const pokemon: PokemonDetails = await getPokemonDetails(pokemonUrl);

  const maxHeight = 20; // Altura máxima para referencia
  const maxWeight = 1000; // Peso máximo para referencia
  const heightPercentage = (pokemon.height / maxHeight) * 100;
  const weightPercentage = (pokemon.weight / maxWeight) * 100;

  return (
    <div className="pokemon-detail">
      <h1 className="pokemon-name">{pokemon.name}</h1>
      <img
        className="pokemon-image"
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
      />

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
