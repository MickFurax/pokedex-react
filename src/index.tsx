import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import "./index.css";
import axios from "axios";
import PokemonProfil from "./components/PokemonProfil";
import { IPokemon } from "./interfaces/Pokemon/Pokemon";

const App = () => {
  const [searchValue, setSearchValue] = useState<string>("pikachu");
  const [result, setResult] = useState<IPokemon>();

  useEffect(() => {
    axios
      .get<IPokemon>(`https://pokeapi.co/api/v2/pokemon/${searchValue.toLowerCase()}`)
      .then((res) => {
        setResult(res.data);
        console.log(res.data.name);
      });
  }, [searchValue]);

  const Search = (value: string) => {
    setSearchValue(value);
  };

  return (
    <main>
      <Navbar search={Search} />
      <PokemonProfil result={result}/>
    </main>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
