import { useEffect, useState } from "react";
import Cart from "../components/Cart";
import { IPokemonList } from "../interfaces/Pokemon/Pokemon";
import { getPokemonList } from "../services/pokemon";

const Homepage = () => {
  const [pokemonList, setPokemonList] = useState<IPokemonList>();
  const [page, setPage] = useState(0);

  useEffect(() => {
    getPokemonList(page).then((res) => {
      setPokemonList(res);
      console.log(res);
    });
    console.log(page);
  }, [page]);

  const handleNext = () => {
    console.log(page);

    setPage((oldPage) => oldPage + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handlePrevious = () => {
    console.log(page);

    setPage((oldPage) => oldPage - 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div>
        {pokemonList?.results.map((result) => (
          <Cart key={result.name} id={result.name} />
        ))}
      </div>
      <div className="my-6 gap-8 flex justify-center">
        {page >= 1 && (
          <button
            className="bg-white text-red-500 border-red-500 border hover:text-white hover:bg-red-500 w-28 py-1 rounded"
            onClick={handlePrevious}
          >
            Previous
          </button>
        )}
        <button
          className="bg-red-500 text-white w-28 py-1 rounded hover:bg-red-600"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Homepage;
