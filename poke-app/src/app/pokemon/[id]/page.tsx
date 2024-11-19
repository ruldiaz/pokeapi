import Image from 'next/image';
import './PokemonDetailPage.css';

interface PokemonDetails {
  name: string;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  height: number;
  weight: number;
}

async function getPokemonDetails(url: string): Promise<PokemonDetails> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error al obtener los detalles del Pokémon");
  }
  return response.json();
}

export default async function PokemonDetailPage(
  props: { params: Promise<{ id: string }> } // Recibimos los parámetros como una promesa
) {
  // Esperamos a que se resuelva la promesa para obtener el ID
  const params = await props.params;
  const { id } = params; // Ahora tenemos el id

  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
  let pokemon: PokemonDetails;

  try {
    pokemon = await getPokemonDetails(pokemonUrl);
  } catch {
    return <div>Error al cargar los datos del Pokémon.</div>;
  }

  const maxHeight = 20; // Altura máxima de referencia
  const maxWeight = 1000; // Peso máximo de referencia
  const heightPercentage = (pokemon.height / maxHeight) * 100;
  const weightPercentage = (pokemon.weight / maxWeight) * 100;

  return (
    <div className="pokemon-detail">
      <h1 className="pokemon-name">{pokemon.name}</h1>
      <Image
        className="pokemon-image"
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
        width={200}  // Especifica un ancho para el componente Image
        height={200} // Especifica una altura para el componente Image
      />

      <div className="pokemon-stats">
        <div className="stat">
          <p>Altura:</p>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${heightPercentage}%` }}
            ></div>
          </div>
          <span>{(pokemon.height / 10).toFixed(1)} m</span>
        </div>

        <div className="stat">
          <p>Peso:</p>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${weightPercentage}%` }}
            ></div>
          </div>
          <span>{(pokemon.weight / 10).toFixed(1)} kg</span>
        </div>
      </div>
    </div>
  );
}
