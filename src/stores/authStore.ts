import { logIn, logOut } from "Services/authServices";
import { create } from "zustand";

interface AuthStore {
  isLoggedIn: boolean;
  login: (username: string, password: string) => void;
  logout: (username: string) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: false,
  login: async (username, password) => {
    const isSuccessFull = await logIn(username, password);
    if (isSuccessFull) {
      set({ isLoggedIn: true });
    }
  },
  logout: async (username: string) => {
    const isSuccessFull = await logOut(username);
    if (isSuccessFull) {
      set({ isLoggedIn: false });
    }
  },
}));
