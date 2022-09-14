import create from "zustand";

interface PokeballsState {
  value: number[];
  addPokemon: (id: number) => void;
  removePokemon: (id: number) => void;
}

const usePokeballsState = create<PokeballsState>((set) => ({
  value: [],

  addPokemon: (id) =>
    set((state) => ({
      value: state.value.includes(id) ? state.value : [...state.value, id],
    })),
  removePokemon: (id) =>
    set((state) => ({ value: state.value.filter((value) => value != id) })),
}));

export default usePokeballsState;
