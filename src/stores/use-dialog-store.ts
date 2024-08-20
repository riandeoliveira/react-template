import type { DialogTypeValue } from "@/enums/dialog-type";
import { create } from "zustand";

type DialogStore = {
  signOut: { isOpen: boolean };

  open(dialogType: DialogTypeValue): void;
  close(dialogType: DialogTypeValue): void;
  toggle(dialogType: DialogTypeValue): void;
};

export const useDialogStore = create<DialogStore>((set) => ({
  signOut: { isOpen: false },

  open(dialogType: DialogTypeValue): void {
    set({
      [dialogType]: { isOpen: true },
    });
  },

  close(dialogType: DialogTypeValue): void {
    set({
      [dialogType]: { isOpen: false },
    });
  },

  toggle(dialogType: DialogTypeValue): void {
    set((state) => ({
      [dialogType]: { isOpen: !state[dialogType].isOpen },
    }));
  },
}));
