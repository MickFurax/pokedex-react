import { useEffect } from "react";
import { Star } from "react-feather";
import pokeball from "../assets/pokeball.png";
import usePokeballsState from "../store/pokeball";

interface Props {
  id: number | string;
}

const Status = (props: Props) => {
  const { id } = props;

  const value = usePokeballsState((state) => state.value);
  const addPokemon = usePokeballsState((state) => state.addPokemon);
  const removePokemon = usePokeballsState((state) => state.removePokemon);


  const handleClick = () => {
    if (!value.includes(id)) {
      addPokemon(id);
    } else {
      removePokemon(id);
    }
  };
  return (
    <div className="flex cursor-pointer" onClick={handleClick}>
      <button className="rounded-full mt-auto m-0 mr-1 mb-1 md:mr-4 md:mb-4 sm:mr-2 sm:mb-2">
        <img src={pokeball} alt="Pokeball" className="icon m-2" />
      </button>
    </div>
  );
};

export default Status;
