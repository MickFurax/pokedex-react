import { useEffect, useState } from "react";
import axios from "axios";

import { IPokemon } from "../interfaces/Pokemon/Pokemon";
import { IPokemonSpecies } from "../interfaces/Pokemon/PokemonSpecies";
import { IEvolutionChain } from "../interfaces/Evolution/EvolutionChain";
import { getPokemonSpecies } from "../services/pokemon";
import { typeColorMap } from "../constants/pokemon";
import type { PokemonType } from "../types/pokemon";
import Status from "./Status";
import Evolution from "./Evolution";

interface Props {
  result: IPokemon;
  profil?: IPokemonSpecies;
}

const PokemonProfil = (props: Props) => {
  const { result} = props;

  const [profil, setProfil] = useState<IPokemonSpecies>();

  if (result== undefined) {
    return null;
  }


  useEffect(() => {
    if (!result.id) {
      return;
    }
    getPokemonSpecies(result.id).then((res) => {
      setProfil(res);
    });
  }, [result.id]);

  const descrition = profil?.flavor_text_entries
    .filter((e) => e.language.name == "en")[0]
    .flavor_text?.replace("\n", " ")
    .replace("\f", " ")
    .replace("POKéMON", "POKÉMON");



  
  const sprite = result.sprites?.front_default;
  const name = result.name;
  const id = result.id;
  const types: PokemonType[] | undefined = result.types.map(
    (e) => e.type?.name as unknown as PokemonType
  );

  const spriteColor = typeColorMap[types?.[0] || "normal"];

  return (
    <div>
      <div
        className="flex justify-between"
        style={{ backgroundColor: spriteColor }}
      >
        <div className="flex items-center">
          <img
            src={sprite}
            alt={name}
            className="md:h-72 md:w-72 sm:h-52 sm:w-52 h-32 w-32 sprite shrink-0"
          />
          <div className="capitalize mb-2">
            <span className="text-3xl font-semibold text-white flex flex-row md:text-7xl sm:text-6xl">
              <p>{name}</p>
              <p className="opacity-[.125] text-black pl-4 md:pl-8 sm:pl-5">
                #{id}
              </p>
            </span>
            <div className="flex gap-3 md:mt-2 sm:mt-1 mt-2">
              {types?.map((pokemonType) => (
                <div
                  key={pokemonType}
                  className="
                  bg-white w-min p-1 pr-3 sm:pr-4 rounded-full flex items-center text-xs md:text-base sm:text-sm "
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
        <Status id={id} />
      </div>
      <main className="md:m-10 sm:m-6 m-3 text-slate-800">
        <div className="mt-2">
          <h1 className="font-medium text-2xl">Description</h1>
          <p className="m-3">{descrition}</p>
        </div>
        <div>
          <h1 className="font-medium text-2xl">Evolution</h1>
          <div className="m-3">
            <Evolution id={id}/>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PokemonProfil;
