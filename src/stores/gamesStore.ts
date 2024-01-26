import { IGame } from "Page/Games/@types";
import { create } from "zustand";

interface GamesStore {
  filteredGames: IGame[] | undefined;
  selectedGame: string | null;
  selectedCategory: number;
  searchQuery: string;
  setFilteredGames: (games: IGame[] | undefined) => void;
  setSelectedGame: (query: string) => void;
  setSelectedCategory: (category: number) => void;
  setSearchQuery: (query: string) => void;
}

const useGamesStore = create<GamesStore>((set) => ({
  filteredGames: [],
  selectedGame: null,
  selectedCategory: 0,
  searchQuery: "",
  setFilteredGames: (games) => set({ filteredGames: games }),
  setSelectedGame: (game: string) => set({ selectedGame: game }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSearchQuery: (query) => set({ searchQuery: query }),
}));

export default useGamesStore;
