import { IPokemon } from "../interfaces/Pokemon/Pokemon";
import Status from "./Status";
import { useEffect, useState } from "react";
import axios from "axios";
import { IPokemonSpecies } from "../interfaces/Pokemon/PokemonSpecies";
import Evolution from "./Evolution";
import { IEvolutionChain } from "../interfaces/Evolution/EvolutionChain";

type PokemonType =
  | "normal"
  | "fighting"
  | "flying"
  | "poison"
  | "ground"
  | "rock"
  | "bug"
  | "ghost"
  | "steel"
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "psychic"
  | "ice"
  | "dragon"
  | "dark"
  | "fairy";

interface Props {
  result?: IPokemon;
  profil?: IPokemonSpecies;
}

// Color of each Pokemon type
const typeColorMap = {
  normal: "#9CA3AF",
  fighting: "#A1A1AA",
  flying: "#38BDF8",
  poison: "#A78BFA",
  ground: "#D97706",
  rock: "#9CA3AF",
  bug: "#A3E635",
  ghost: "#94A3B8",
  steel: "#A8A29E",
  fire: "#F87171",
  water: "#60A5FA",
  grass: "#4ADE80",
  electric: "#FACC15",
  psychic: "#E879F9",
  ice: "#22D3EE",
  dragon: "#808CF8",
  dark: "#A3A3A3",
  fairy: "#FB7185",
};

const PokemonProfil = (props: Props) => {
  const { result } = props;

  const [profil, setProfil] = useState<IPokemonSpecies>();
  const [evolution, setEvolution] = useState<IEvolutionChain>();

  const sprite = result?.sprites?.front_default;
  const name = result?.name;
  const id = result?.id;
  const types: PokemonType[] | undefined = result?.types.map(
    (e) => e.type?.name as unknown as PokemonType
  );

  useEffect(() => {
    axios
      .get<IPokemonSpecies>(
        `https://pokeapi.co/api/v2/pokemon-species/${result?.id}`
      )
      .then((res) => {
        setProfil(res.data);
      });
  }, [id]);

  const descrition = profil?.flavor_text_entries
    .filter((e) => e.language.name == "en")[0]
    .flavor_text?.replace("\n", " ")
    .replace("\f", " ")
    .replace("POKéMON", "POKÉMON");

  const spriteColor = typeColorMap[types?.[0] || "normal"];

  // Evolution

  useEffect(() => {
    if (!profil) {
      return;
    }
    axios.get<IEvolutionChain>(profil.evolution_chain.url).then((res) => {
      setEvolution(res.data);
      console.log(res.data);
    });
  }, [profil]);

  return (
    <div>
      <div
        className="flex justify-between"
        style={{ backgroundColor: spriteColor }}
      >
        <div className="flex items-center">
          <img
            src={sprite}
            alt={result?.name}
            className="md:h-72 md:w-72 sm:h-52 sm:w-52  h-32 w-32  sprite"
          />
          <div className="capitalize">
            <span className="text-3xl font-semibold text-white flex flex-row md:text-7xl sm:text-6xl">
              <p>{name}</p>
              <p className="opacity-[.125] text-black pl-4 md:pl-8 sm:pl-5">
                #{id}
              </p>
            </span>
            <div className="mt-0 flex gap-3 md:mt-2 sm:mt-1">
              {types?.map((pokemonType) => (
                <div
                  key={id}
                  className="mt-2 bg-white w-min p-1 pr-3 sm:pr-4 rounded-full flex items-center text-xs md:text-base sm:text-sm "
                >
                  <div
                    className="w-3 h-3 rounded-full mx-1 md:mx-2"
                    style={{ backgroundColor: typeColorMap[pokemonType] }}
                  ></div>
                  {pokemonType}
                </div>
              ))}
            </div>
          </div>
        </div>
        <Status />
      </div>
      <main className="m-10 text-slate-800">
        <div className="mt-2">
          <h1 className="font-medium text-2xl">Description</h1>
          <p className="m-3">{descrition}</p>
        </div>
        <div>
          <h1 className="font-medium text-2xl">Evolution</h1>
          <div className="m-3">
            <Evolution
              result={result}
              profil={profil}
              evolution={evolution}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default PokemonProfil;
