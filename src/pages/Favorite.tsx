import Cart from "../components/Cart";
import { getFavorite } from "../store/favorite";

const Favorite = () => {
  return (
    <div>
      <div>
        {getFavorite().map((id: number) => (
          <Cart key={id} id={id} />
        ))}
      </div>
    </div>
  );
};

export default Favorite;
