export const addFavorite = (id: number): void => {
  const rawFavorite = localStorage.getItem("favorite");

  const favorite = rawFavorite == null ? [] : JSON.parse(rawFavorite);
  favorite.push(id);
  localStorage.setItem("favorite", JSON.stringify(favorite));
};
export const removeFavorite = (id: number): void => {
  const rawFavorite = localStorage.getItem("favorite");

  const favorite = rawFavorite == null ? [] : JSON.parse(rawFavorite);
  localStorage.setItem(
    "favorite",
    JSON.stringify(favorite.filter((e: number) => e != id))
  );
};
export const getFavorite = (): number[] => {
  const rawFavorite = localStorage.getItem("favorite");
  return rawFavorite == null ? [] : JSON.parse(rawFavorite);
};
