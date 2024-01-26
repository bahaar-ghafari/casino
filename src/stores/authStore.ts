import { logIn, logOut } from "Services/authServices";
import { create } from "zustand";
import { TloginRes, TlogoutRes } from "./@types";
import { IUser } from "Components/Header/@types";

interface AuthStore {
  user: IUser | null;
  login: (username: string, password: string) => Promise<TloginRes>;
  logout: (username: string) => Promise<TlogoutRes>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  login: async (username, password) => {
    const data: TloginRes = await logIn(username, password);
    if (data.status === "success") {
      set({ user: data.player });
      localStorage.setItem('user', JSON.stringify(data.player))
    }
    return data;
  },
  logout: async (username: string) => {
    const data: TlogoutRes = await logOut(username);

    if (data.status === 'success') {
      set({ user: null });
      localStorage.removeItem('user')
    }
    return data;
  },
}));
