/**
 * 
 * @param params is an object with key pokemonId and value as string 
 * @returns 
 */

export default function PokemonDetails({ params } : {
   params: {pokemonId: string}
}){
   return (
      <>
         <h1>Details about pokemon {params.pokemonId}</h1>
      </>
   );
}