import create from "zustand";

interface FavoritesState {
  favoriteValue: number[];
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
}

const useFavoritesState = create<FavoritesState>((set) => ({
  favoriteValue: [],

  addFavorite: (id) =>
    set((state) => ({
      favoriteValue: state.favoriteValue.includes(id)
        ? state.favoriteValue
        : [...state.favoriteValue, id],
    })),
  removeFavorite: (id) =>
    set((state) => ({
      favoriteValue: state.favoriteValue.filter(
        (favoriteValue) => favoriteValue != id
      ),
    })),
}));

export default useFavoritesState;
