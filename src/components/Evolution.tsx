import axios from "axios";
import { useState } from "react";
import { ArrowRightCircle } from "react-feather";
import { IEvolutionChain } from "../interfaces/Evolution/EvolutionChain";

import { IPokemon } from "../interfaces/Pokemon/Pokemon";
import { IPokemonSpecies } from "../interfaces/Pokemon/PokemonSpecies";
import Sprite from "./Sprite";

interface Props {
  result?: IPokemon;
  profil?: IPokemonSpecies;
  evolution?: IEvolutionChain;
}

const Evolution = (props: Props) => {
  const { evolution, result } = props;

  const evolutionID = evolution?.id;
  const species = evolution?.chain?.species?.name;
  const evolutionArray = evolution?.chain?.evolves_to;

  const spriteFunction = (name: string) => {};
  console.log(evolution?.chain.evolves_to); 

  return (
    <div className="flex items-center text-center capitalize p-3 max-w-full bg-slate-100 rounded overflow-x-auto">
      <div className="mx-auto flex items-center">
        <div className="flex flex-col shrink-0 ml-auto">
          <Sprite name={species} />
          <p className="mb-2">{species}</p>
        </div>{" "}
        {evolution?.chain.evolves_to[0] && (
          <div className="mx-2">
            <ArrowRightCircle className="icon text-slate-500 md:h-8 md:w-8 sm:h-7 sm:w-7 h-6 w-6" />
          </div>
        )}
        <div className="flex flex-row  w-full items-center mr-auto">
          {evolutionArray?.map((e) => {
            return (
              <>
                <div className="flex flex-col shrink-0">
                  <Sprite name={e.species?.name} />
                  <p className="mb-2">{e.species?.name}</p>
                </div>
                <div className="mx-2">
                  {e.evolves_to.length > 0 && (
                    <ArrowRightCircle className="icon text-slate-500 md:h-8 md:w-8 sm:h-7 sm:w-7 h-6 w-6" />
                  )}
                </div>
                <div className="flex flex-row">
                  {e.evolves_to.map((j) => (
                    <div className="flex flex-col mx-2 shrink-0">
                      <Sprite name={j.species?.name} />
                      <p className="mb-2">{j.species?.name}</p>
                    </div>
                  ))}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Evolution;
