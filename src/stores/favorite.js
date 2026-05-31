import { defineStore } from 'pinia'

export const useFavoriteStore = defineStore('favorite', {
  state: () => ({
    favorites: []
  }),

  getters: {
    totalFavorites: (state) => state.favorites.length,

    isFavorite: (state) => {
      return (id) =>
        state.favorites.some(item => item.id === id)
    }
  },

  actions: {

    // Load from localStorage
    loadFavorites() {
      const data = localStorage.getItem('favorites')

      this.favorites = data ? JSON.parse(data) : []
    },

    // Save to localStorage
    saveFavorites() {
      localStorage.setItem(
        'favorites',
        JSON.stringify(this.favorites)
      )
    },

    // Add
    addFavorite(product) {

      // Prevent undefined product
      if (!product || !product.id) {
        console.error('Invalid product:', product)
        return
      }

      const exists = this.favorites.find(
        item => item.id === product.id
      )

      if (!exists) {
        this.favorites.push(product)
        this.saveFavorites()

        console.log('Added:', product)
      }
    },

    // Remove
    removeFavorite(id) {
      this.favorites = this.favorites.filter(
        item => item.id !== id
      )

      this.saveFavorites()

      console.log('Removed:', id)
    },

    // Toggle
    toggleFavorite(product) {

      if (!product || !product.id) {
        console.error('Invalid product:', product)
        return
      }

      const exists = this.favorites.find(
        item => item.id === product.id
      )

      if (exists) {
        this.removeFavorite(product.id)
      } else {
        this.addFavorite(product)
      }
    }
  }
})