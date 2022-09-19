import { useEffect, useState } from "react";
import Cart from "../components/Cart";
import { getPokeball } from "../store/pokeball";

const Pokeball = () => {
  const [pokeball, setPokeball] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPokeball(getPokeball());
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div>
        {pokeball.map((id) => (
          <Cart key={id} id={id} />
        ))}
      </div>
    </div>
  );
};

export default Pokeball;
