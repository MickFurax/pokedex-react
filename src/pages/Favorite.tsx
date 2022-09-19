import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "../components/Cart";
import { getFavorite } from "../store/favorite";

const Favorite = () => {
  const [favorite, setFavorite] = useState<number[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setFavorite(getFavorite());
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const home = () => {
    navigate("/");
  };

  useEffect(() => {
    if (getFavorite().length == 0) {
      home();
    }
  }, [favorite]);

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
