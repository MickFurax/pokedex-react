import Cart from "../components/Cart";
import usePokeballsState from "../store/pokeball";

const Pokeball = () => {
  const value = usePokeballsState((state) => state.value);

  console.log(value);

  return (
    <div>
      <div>
        {value.map((id) => (
          <Cart key={id} id={id} />
        ))}
      </div>
    </div>
  );
};

export default Pokeball;
