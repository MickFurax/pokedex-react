import axios from "axios";
import { useEffect, useState } from "react";
import { IEvolutionChain } from "../interfaces/Evolution/EvolutionChain";
import { IPokemon } from "../interfaces/Pokemon/Pokemon";
import { IPokemonSpecies } from "../interfaces/Pokemon/PokemonSpecies";

interface Props {
  result?: IPokemon;
  profil?: IPokemonSpecies;
}

const Evolution = (props: Props) => {
  const { profil } = props;

  // Evolution
  const [evolution, setEvolution] = useState<IEvolutionChain>();

  useEffect(() => {
    if (!profil) {
      return;
    }
    axios.get<IEvolutionChain>(profil.evolution_chain.url).then((res) => {
      setEvolution(res.data);
    });
  }, [profil]);

  console.log(evolution);

  return (
    <div>
      <div></div>
    </div>
  );
};

export default Evolution;
