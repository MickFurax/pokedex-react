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
      className="md:h-72 md:w-72 sm:h-52 sm:w-52  h-32 w-32  sprite shrink-0"
    />
  );
};

export default Sprite;
