import { create } from "zustand";

type LoadingStore = {
  isLoading: boolean;

  wait(): void;
  stop(): void;
};

export const useLoadingStore = create<LoadingStore>((set) => ({
  isLoading: false,

  wait(): void {
    set({ isLoading: true });
  },

  stop(): void {
    set({ isLoading: false });
  },
}));
