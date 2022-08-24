import axios from "axios";
import { useEffect, useState } from "react";
import { IPokemon } from "../interfaces/Pokemon/Pokemon";

interface Props {
  name?: string;
}

const Sprite = (props: Props) => {
  const { name } = props;

  const [sprite, setSprite] = useState<IPokemon>();

  useEffect(() => {
    axios
      .get<IPokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => {
        setSprite(res.data);
      });
  }, [name]);

  return (
    <img
      src={sprite?.sprites?.front_default}
      alt={name}
      className="lg:h-56 lg:w-56 sm:h-32 sm:w-32 h-20 w-20 sprite shrink-0"
    />
  );
};

export default Sprite;
