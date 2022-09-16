import { useEffect, useState } from "react";
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

  const [pokeballActive, setPokeballActive] = useState(false);
  const [favoriteActive, setFavoriteActive] = useState(false);

  useEffect(() => {
    setFavoriteActive(favoriteValue.includes(id));
    setPokeballActive(value.includes(id));
  }, [id]);

  const handleClickPokeball = () => {
    if (!value.includes(id)) {
      addPokemon(id);
      setPokeballActive(true);
    } else {
      removePokemon(id);
      setPokeballActive(false);
    }
    console.log(value);
  };

  const handleClickFavorite = () => {
    if (!favoriteValue.includes(id)) {
      addFavorite(id);
      setFavoriteActive(true);
    } else {
      removeFavorite(id);
      setFavoriteActive(false);
    }
  };
  return (
    <div className="flex ">
      <button
        onClick={handleClickPokeball}
        className="rounded-full cursor-pointer mt-auto m-0 mr-1 mb-1 md:mr-4 md:mb-4 sm:mr-2 sm:mb-2 p-2 bg-white"
      >
        <Pokeball className={pokeballActive ? "text-red-500" : ""} />
      </button>
      <button
        onClick={handleClickFavorite}
        className="rounded-full cursor-pointer mt-auto m-0 mr-1 mb-1 md:mr-4 md:mb-4 sm:mr-2 sm:mb-2 p-2 bg-white"
      >
        <Star className={favoriteActive ? "text-red-500" : ""} />
      </button>
    </div>
  );
};

export default Status;
