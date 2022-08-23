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

  return (
    <div className="flex flex-row items-center text-center capitalize p-3 w-max bg-slate-100 rounded">
      <div className="flex flex-col shrink-0">
        <Sprite name={species} />
        <p className="mb-2">{species}</p>
      </div>{" "}
      <div className="mx-2">
        <ArrowRightCircle size={32} className="icon text-slate-600" />
      </div>
      <div className="flex flex-row  w-full overflow-x-auto items-center">
        {evolutionArray?.map((e) => {
          return (
            <>
              <div className="flex flex-col shrink-0">
                <Sprite name={e.species?.name} />
                <p className="mb-2">{e.species?.name}</p>
              </div>
              <div className="mx-2">
                {e.evolves_to.length > 0 && (
                  <ArrowRightCircle size={32} className="icon text-slate-600" />
                )}
              </div>
              <div className="flex flex-row">
                {e.evolves_to.map((j) => (
                  <div className="flex flex-col mx-2">
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
  );
};

export default Evolution;
