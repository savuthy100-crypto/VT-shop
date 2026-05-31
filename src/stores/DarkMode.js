import { defineStore } from 'pinia'

export const useDarkMode = defineStore('DarkMode', {
    
    state: () => ({
        isDark: false,
    }),

    actions: {
        toggleTheme() {
            this.isDark = !this.isDark;
        }
    }
})