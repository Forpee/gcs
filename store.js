import create from "zustand";

export const useContact = create((set) => ({
  contactMode: false,
  changeContactMode: (mode) =>
    set((state) => {
      return {
        ...state,
        contactMode: mode,
      };
    }),
}));