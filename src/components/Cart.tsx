import { useEffect, useState } from "react";
import axios from "axios";

import { getPokemon, getPokemonSpecies } from "../services/pokemon";
import { typeColorMap } from "../constants/pokemon";
import { useNavigate } from "react-router-dom";
import type { PokemonType } from "../types/pokemon";
import Status from "./Status";
import { IPokemonSpecies } from "../interfaces/Pokemon/PokemonSpecies";

interface Props {
  id: number | string;
}

const Cart = (props: Props) => {
  const { id } = props;

  const [result, setResult] = useState<IPokemonSpecies>();
  const [sprite, setSprite] = useState("");
  const [types, setTypes] = useState<PokemonType[]>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      return;
    }
    getPokemonSpecies(id).then((res) => {
      setResult(res);
    });
    getPokemon(id).then((res) => {
      setSprite(res.sprites?.front_default);
      setTypes(res.types.map((e) => e.type?.name as unknown as PokemonType));
    });
  }, [id]);

  const spriteColor = typeColorMap[types?.[0] || "normal"];

  const Detail = (id: number | undefined) => {
    navigate(`/${id}`);
  };

  return (
    <div className="mb-px">
      <div
        className="flex justify-between"
        style={{ backgroundColor: spriteColor }}
      >
        <div
          className="flex items-center cursor-pointer"
          onClick={() => Detail(result?.id)}
        >
          <img
            src={sprite}
            alt={result?.name}
            className="md:h-60 md:w-60 sm:h-48 sm:w-48 h-28 w-28 sprite shrink-0"
          />
          <div className="capitalize mb-2">
            <span className="text-3xl font-semibold text-white flex flex-row md:text-7xl sm:text-6xl">
              <p>{result?.name}</p>
              <p className="opacity-[.125] text-black pl-4 md:pl-8 sm:pl-5">
                #{result?.id}
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
        <Status id={id}/>
      </div>
    </div>
  );
};

export default Cart;
