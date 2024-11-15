// src/app/services/apiService.ts

import axios from 'axios';

// Función para obtener la lista de Pokémon
export const getPokemonList = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
    return response.data;  // Devuelve la lista de Pokémon
  } catch (error) {
    console.error('Error al obtener la lista de Pokémon:', error);
    throw error;
  }
};

// Función para obtener los detalles de un Pokémon
export const getPokemonDetails = async (url: string) => {
  try {
    // Verificar que la URL no esté vacía
    if (!url) {
      throw new Error('La URL proporcionada no es válida');
    }
    
    console.log("Fetching details from URL:", url);  // Verifica la URL que se pasa
    
    const response = await axios.get(url);  // Realiza la solicitud HTTP
    return response.data;  // Devuelve los detalles del Pokémon
  } catch (error) {
    console.error('Error al obtener los detalles del Pokémon:', error);
    throw error;  // Relanza el error para que pueda ser manejado en el componente
  }
};
