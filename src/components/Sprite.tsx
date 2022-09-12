import axios from "axios";
import { useEffect, useState } from "react";
import { IPokemon } from "../interfaces/Pokemon/Pokemon";

interface Props {
  id: number;
}

const Sprite = (props: Props) => {
  const { id } = props;

  const [sprite, setSprite] = useState<IPokemon>();

  useEffect(() => {
    axios
      .get<IPokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => {
        setSprite(res.data);
      });
  }, [id]);

  return (
    <img
      src={sprite?.sprites?.front_default}
      alt={sprite?.name}
      className="lg:h-56 lg:w-56 sm:h-32 sm:w-32 h-20 w-20 sprite shrink-0"
    />
  );
};

export default Sprite;
