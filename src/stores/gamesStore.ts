import { IGame } from "Page/Games/@types";
import { create } from "zustand";

interface GamesStore {
  filteredGames: IGame[] | undefined;
  selectedCategory: number;
  searchQuery: string;
  setFilteredGames: (games: IGame[] | undefined) => void;
  setSelectedCategory: (category: number) => void;
  setSearchQuery: (query: string) => void;
}

const useGamesStore = create<GamesStore>((set) => ({
  filteredGames: [],
  selectedCategory: 0,
  searchQuery: "",
  setFilteredGames: (games) => set({ filteredGames: games }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSearchQuery: (query) => set({ searchQuery: query }),
}));

export default useGamesStore;
