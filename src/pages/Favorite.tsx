import Cart from "../components/Cart";
import useFavoritesState from "../store/favorite";

const Favorite = () => {
  const favoriteValue = useFavoritesState((state) => state.favoriteValue);

  console.log(favoriteValue);

  return (
    <div>
      <div>
        {favoriteValue.map((id: number) => (
          <Cart key={id} id={id} />
        ))}
      </div>
    </div>
  );
};

export default Favorite;
