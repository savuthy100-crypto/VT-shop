import { defineStore } from "pinia";

export const useMenuOpen = defineStore("menuOpen", {
  state: () => ({
    open: false,
  }),

  actions: {
    openSide() {
      this.open = !this.open;
    },
  },
});