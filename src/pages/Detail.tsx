import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PokemonProfil from "../components/PokemonProfil";
import { IPokemon } from "../interfaces/Pokemon/Pokemon";
import { getPokemon } from "../services/pokemon";

const Detail = () => {
  const [result, setResult] = useState<IPokemon>();

  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }
    getPokemon(id).then((res) => {
      setResult(res);
    });
  }, [id]);

  if (result == undefined) {
    return null;
  }

  return (
    <main>
      <PokemonProfil result={result} />
    </main>
  );
};

export default Detail;
