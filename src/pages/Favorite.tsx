import { useEffect, useState } from "react";
import Cart from "../components/Cart";
import { getFavorite } from "../store/favorite";

const Favorite = () => {
  const [favorite, setFavorite] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFavorite(getFavorite());
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div>
        {favorite.map((id: number) => (
          <Cart key={id} id={id} />
        ))}
      </div>
    </div>
  );
};

export default Favorite;
