import Cart from "../components/Cart";
import { getPokeball } from "../store/pokeball";

const Pokeball = () => {
  return (
    <div>
      <div>
        {getPokeball().map((id) => (
          <Cart key={id} id={id} />
        ))}
      </div>
    </div>
  );
};

export default Pokeball;
