import Link from "next/link";

export default function PokemonList(){
   return (
      <>
         <h1>Pokemon list</h1>
         <h2><Link href="/pokemon/1">Pokemon 1</Link></h2>
      </>
   );
}