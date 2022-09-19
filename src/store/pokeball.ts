export const addPokeball = (id: number): void => {
  const rawPokeball = localStorage.getItem("pokeball");

  const pokeball = rawPokeball == null ? [] : JSON.parse(rawPokeball);
  pokeball.push(id);
  localStorage.setItem("pokeball", JSON.stringify(pokeball));
};
export const removePokeball = (id: number): void => {
  const rawPokeball = localStorage.getItem("pokeball");

  const pokeball = rawPokeball == null ? [] : JSON.parse(rawPokeball);
  localStorage.setItem(
    "pokeball",
    JSON.stringify(pokeball.filter((e: number) => e != id))
  );
};
export const getPokeball = (): number[] => {
  const rawPokeball = localStorage.getItem("pokeball");
  return rawPokeball == null ? [] : JSON.parse(rawPokeball);
};
