import axios from "axios";
import { IPokedex } from "../interfaces/Games/Pokedex";
import { IPokemon, IPokemonList } from "../interfaces/Pokemon/Pokemon";
import { IPokemonSpecies } from "../interfaces/Pokemon/PokemonSpecies";

export const getPokemonSpecies = async (id: string | number) => {
  const result = await axios.get<IPokemonSpecies>(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  );
  return result.data;
};

export const getPokemon = async (id: string | number) => {
  const result = await axios.get<IPokemon>(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );
  return result.data;
};

export const getPokemonList = async (page: number) => {
  const result = await axios.get<IPokemonList>(
    `https://pokeapi.co/api/v2/pokemon/`,
    {
      params: {
        offset: page * 20,
        limit: 20,
      },
    }
  );
  return result.data;
};
