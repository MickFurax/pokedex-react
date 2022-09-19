import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "../components/Cart";
import { getPokeball } from "../store/pokeball";

const Pokeball = () => {
  const [pokeball, setPokeball] = useState<number[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setPokeball(getPokeball());
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const home = () => {
    navigate("/");
  };

  useEffect(() => {
    if (getPokeball().length == 0) {
      home();
    }
  }, [pokeball]);

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
