import { useEffect, useState } from "react";
import Cart from "../components/Cart";
import { IPokedex } from "../interfaces/Games/Pokedex";
import { getPokedex } from "../services/pokemon";

const Pokeball = () => {
  const [pokedex, setPokedex] = useState<IPokedex>();

  useEffect(() => {
    getPokedex(5).then((res) => {
      setPokedex(res);
      console.log(res);
    });
  }, []);

  return (
    <div>
      <div>
        {pokedex?.pokemon_entries.slice(0, 20).map((e) => (
          <Cart id={e.entry_number} />
        ))}
      </div>
    </div>
  );
};

export default Pokeball;
