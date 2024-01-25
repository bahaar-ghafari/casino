import { IGame } from "Page/Games/@types";
import { create } from "zustand";

interface GamesStore {
  filterdGames: IGame[];
  selectedCategory: number;
  searchQuery: string;
  setFilteredGames: (games: IGame[]) => void;
  setSelectedCategory: (category: number) => void;
  setSearchQuery: (query: string) => void;
}

const useGamesStore = create<GamesStore>((set) => ({
  filterdGames: [],
  selectedCategory: 0,
  searchQuery: "",
  setFilteredGames: (games) => set({ filterdGames: games }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSearchQuery: (query) => set({ searchQuery: query }),
}));

export default useGamesStore;
