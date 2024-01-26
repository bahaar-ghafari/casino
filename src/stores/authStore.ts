import { logIn, logOut } from "Services/authServices";
import { create } from "zustand";
import { TloginRes, TlogoutRes } from "./@types";
import { IUser } from "Components/Header/@types";
import { persist, createJSONStorage } from 'zustand/middleware'

interface AuthStore {
  user: IUser | null;
  login: (username: string, password: string) => Promise<TloginRes>;
  logout: (username: string) => Promise<TlogoutRes>;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      login: async (username: string, password: string) => {
        const data: TloginRes = await logIn(username, password);
        if (data.status === "success") {
          set({ user: data.player });
        }
        return data;
      },
      logout: async (username: string) => {
        const data: TlogoutRes = await logOut(username);
    
        if (data.status === 'success') {
          set({ user: null });
        }
        return data;
      },
    }),
    {
      name: 'user-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)