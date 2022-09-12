import axios from "axios";
import { useEffect, useState } from "react";
import { ArrowRightCircle } from "react-feather";
import { IEvolutionChain } from "../../interfaces/Evolution/EvolutionChain";

import { useNavigate } from "react-router-dom";
import { getPokemonSpecies } from "../../services/pokemon";
import Item from "./Item";

interface Props {
  id: number;
}

const Evolution = (props: Props) => {
  const { id } = props;
  const navigate = useNavigate();
  const [evolution, setEvolution] = useState<IEvolutionChain>();

  useEffect(() => {
    getPokemonSpecies(id).then((res) => {
      if (res.evolution_chain == null) {
        return;
      }
      axios.get<IEvolutionChain>(res.evolution_chain.url).then((res) => {
        setEvolution(res.data);
        console.log(res.data);
      });
    });
  }, [id]);

  const species = evolution?.chain?.species?.name;
  const evolutionArray = evolution?.chain?.evolves_to;

  const spriteFunction = (name: string) => {};
  console.log(evolution?.chain.evolves_to);

  const Detail = (targetId: number) => {
    navigate(`/${targetId}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex items-center text-center capitalize p-3 max-w-full bg-slate-100 rounded overflow-x-auto">
      <div className="mx-auto flex items-center">
        <Item identification={species} />
        {evolution?.chain.evolves_to[0] && (
          <div className="mx-2">
            <ArrowRightCircle className="icon text-slate-500 md:h-8 md:w-8 sm:h-7 sm:w-7 h-6 w-6" />
          </div>
        )}
        <div className="flex flex-row  w-full items-center mr-auto">
          {evolutionArray?.map((e) => {
            return (
              <>
                <Item identification={e.species.name} />

                <div className="mx-2">
                  {e.evolves_to.length > 0 && (
                    <ArrowRightCircle className="icon text-slate-500 md:h-8 md:w-8 sm:h-7 sm:w-7 h-6 w-6" />
                  )}
                </div>
                <div className="flex flex-row">
                  {e.evolves_to.map((j) => (
                    <Item identification={j.species.name} />
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
