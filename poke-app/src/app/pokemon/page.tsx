// src/app/pokemon/page.tsx

"use client";

import { useState, useEffect } from 'react';
import { getPokemonList, getPokemonDetails } from '../services/apiService';
import PokemonList from '../components/PokemonList';
import Filter from '../components/Filter';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonDetails {
  name: string;
  types: string[];
  image: string;
}

const PokemonPage = () => {
  const [pokemonList, setPokemonList] = useState<PokemonDetails[]>([]);  // Lista completa de Pokémon
  const [filteredPokemons, setFilteredPokemons] = useState<PokemonDetails[]>([]);  // Lista de Pokémon filtrada
  const [filters, setFilters] = useState({ name: '', type: '' });  // Filtros de búsqueda
  const [loading, setLoading] = useState(true);  // Estado de carga

  useEffect(() => {
    // Cargar lista de Pokémon y detalles
    const fetchPokemonData = async () => {
      setLoading(true);
      try {
        const data = await getPokemonList();  // Obtener la lista de Pokémon
        const details = await Promise.all(
          data.results.map(async (pokemon: Pokemon) => {
            // Verificar que la URL del Pokémon esté presente
            if (pokemon.url) {
              const details = await getPokemonDetails(pokemon.url);  // Obtener detalles del Pokémon
              return {
                name: pokemon.name,
                types: details.types.map((type: any) => type.type.name),
                image: details.sprites.front_default,
              };
            } else {
              console.error('La URL del Pokémon no es válida:', pokemon);
              return null;  // Devuelve null si la URL es inválida
            }
          })
        );

        // Filtrar los detalles de los Pokémon que son válidos (no nulos)
        const validDetails = details.filter((detail) => detail !== null);
        setPokemonList(validDetails);
        setFilteredPokemons(validDetails);
      } catch (error) {
        console.error('Error al cargar los Pokémon:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonData();  // Llamar a la función para cargar los Pokémon
  }, []);

  // Función para manejar los filtros
  useEffect(() => {
    const filtered = pokemonList.filter((pokemon) => {
      const matchesName = pokemon.name.toLowerCase().includes(filters.name.toLowerCase());
      const matchesType = filters.type
        ? pokemon.types.includes(filters.type.toLowerCase())
        : true;
      return matchesName && matchesType;
    });
    setFilteredPokemons(filtered);
  }, [filters, pokemonList]);

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <h1>Lista de Pokémon</h1>
      {loading && <p>Cargando Pokémon...</p>}
      <Filter onFilterChange={handleFilterChange} />
      <PokemonList pokemonList={filteredPokemons} />
    </div>
  );
};

export default PokemonPage;
