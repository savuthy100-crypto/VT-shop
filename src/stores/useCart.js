import { defineStore } from 'pinia'
import { sendTelegram } from "../services/telegram"
export const useCart = defineStore('cart', {
  state: () => ({
    items: [],
  }),

  getters: {
    totalItems: (state) => state.items.reduce((sum, i) => sum + i.quantity, 0),
    totalPrice: (state) =>
      state.items.reduce((sum, i) => {
        const discounted = i.price - (i.price * i.discount) / 100
        return sum + discounted * i.quantity
      }, 0),
  },

  actions: {
    addItem(product) {
      const existing = this.items.find((i) => i.id === product.id)
      if (existing) {
        existing.quantity++
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
    },
    removeItem(id) {
      this.items = this.items.filter((i) => i.id !== id)
    },
    increment(id) {
      const item = this.items.find((i) => i.id === id)
      if (item) item.quantity++
    },
    decrement(id) {
      const item = this.items.find((i) => i.id === id)
      if (item && item.quantity > 1) {
        item.quantity--
      } else {
        this.removeItem(id)
      }
    },
    clearCart() {
      this.items = []
    },
  },
})
