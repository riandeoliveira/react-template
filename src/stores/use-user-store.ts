import { create } from "zustand";

type UserStore = {
  isAuthenticated: boolean;

  setIsAuthenticated(isAuthenticated: boolean): void;
};

export const useUserStore = create<UserStore>((set) => ({
  isAuthenticated: false,

  setIsAuthenticated(isAuthenticated: boolean): void {
    set({ isAuthenticated });
  },
}));
