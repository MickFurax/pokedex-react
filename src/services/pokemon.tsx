import axios from "axios";
import { IPokedex } from "../interfaces/Games/Pokedex";
import { IPokemon } from "../interfaces/Pokemon/Pokemon";
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

export const getPokedex = async (id: number) => {
  const result = await axios.get<IPokedex>(
    `https://pokeapi.co/api/v2/pokedex/${id}/`
  );
  return result.data;
};
