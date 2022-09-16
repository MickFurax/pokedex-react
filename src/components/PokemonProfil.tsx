import { useEffect, useState } from "react";
import axios from "axios";

import { IPokemon } from "../interfaces/Pokemon/Pokemon";
import { IPokemonSpecies } from "../interfaces/Pokemon/PokemonSpecies";
import { getPokemonSpecies } from "../services/pokemon";
import { typeColorMap } from "../constants/pokemon";
import type { PokemonType } from "../types/pokemon";
import Status from "./Status";
import Evolution from "./Evolution";
import Cart from "./Cart";

interface Props {
  result: IPokemon;
  profil?: IPokemonSpecies;
}

const PokemonProfil = (props: Props) => {
  const { result } = props;

  const [profil, setProfil] = useState<IPokemonSpecies>();

  useEffect(() => {
    if (!result.id) {
      return;
    }
    getPokemonSpecies(result.id).then((res) => {
      setProfil(res);
    });
  }, [result.id]);

  if (result == undefined) {
    return null;
  }

  const descrition = profil?.flavor_text_entries
    .filter((e) => e.language.name == "en")[0]
    .flavor_text?.replace("\n", " ")
    .replace("\f", " ")
    .replace("POKéMON", "POKEMON");

  return (
    <div>
      <div>
        <Cart id={result.id} />
      </div>
      <main className="md:m-10 sm:m-6 m-3 text-slate-800">
        <div className="mt-2">
          <h1 className="font-medium text-2xl">Description</h1>
          <p className="m-3">{descrition}</p>
        </div>
        <div>
          <h1 className="font-medium text-2xl">Evolution</h1>
          <div className="m-3">
            <Evolution id={result.id} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default PokemonProfil;
