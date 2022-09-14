import { useEffect } from "react";
import { Star } from "react-feather";
import { Pokeball, Stars } from "tabler-icons-react";
import pokeball from "../assets/pokeball.png";
import useFavoritesState from "../store/favorite";
import usePokeballsState from "../store/pokeball";

interface Props {
  id: number;
}

const Status = (props: Props) => {
  const { id } = props;

  const value = usePokeballsState((state) => state.value);
  const addPokemon = usePokeballsState((state) => state.addPokemon);
  const removePokemon = usePokeballsState((state) => state.removePokemon);

  const favoriteValue = useFavoritesState((state) => state.favoriteValue);
  const addFavorite = useFavoritesState((state) => state.addFavorite);
  const removeFavorite = useFavoritesState((state) => state.removeFavorite);

  const handleClickPokeball = () => {
    if (!value.includes(id)) {
      addPokemon(id);
    } else {
      removePokemon(id);
    }
    console.log(value);
  };

  const handleClickFavorite = () => {
    if (!favoriteValue.includes(id)) {
      addFavorite(id);
    } else {
      removeFavorite(id);
    }
  };
  return (
    <div className="flex cursor-pointer">
      <button
        onClick={handleClickPokeball}
        className="rounded-full mt-auto m-0 mr-1 mb-1 md:mr-4 md:mb-4 sm:mr-2 sm:mb-2"
      >
        <Pokeball />
      </button>
      <button
        onClick={handleClickFavorite}
        className="rounded-full mt-auto m-0 mr-1 mb-1 md:mr-4 md:mb-4 sm:mr-2 sm:mb-2"
      >
        <Star />
      </button>
    </div>
  );
};

export default Status;
