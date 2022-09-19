import { useEffect, useState } from "react";
import { Pokeball, Star } from "tabler-icons-react";
import { addFavorite, getFavorite, removeFavorite } from "../store/favorite";
import { getPokeball, addPokeball, removePokeball } from "../store/pokeball";

interface Props {
  id: number;
}

const Status = (props: Props) => {
  const { id } = props;

  const [pokeballActive, setPokeballActive] = useState(false);
  const [favoriteActive, setFavoriteActive] = useState(false);

  useEffect(() => {
    setPokeballActive(getPokeball().includes(id));
    setFavoriteActive(getFavorite().includes(id));
  }, [id]);

  const handleClickPokeball = () => {
    console.log(getPokeball());
    if (!getPokeball().includes(id)) {
      addPokeball(id);
      setPokeballActive(true);
    } else {
      removePokeball(id);
      setPokeballActive(false);
    }
  };

  const handleClickFavorite = () => {
    console.log(getFavorite());
    if (!getFavorite().includes(id)) {
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
