import axios from "axios";
import { useState } from "react";
import { IEvolutionChain } from "../interfaces/Evolution/EvolutionChain";

import { IPokemon } from "../interfaces/Pokemon/Pokemon";
import { IPokemonSpecies } from "../interfaces/Pokemon/PokemonSpecies";

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

  return (
    <div>
      <div>
        {evolution?.chain?.species?.name} evolve to
        {evolutionArray?.map((e) => {
          return (
            <div>
              {e.species?.name} {e.evolves_to.length > 0 ? "evolve to" : " "}
              {e.evolves_to.map((j) => (
                <div>{j.species?.name}</div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Evolution;
