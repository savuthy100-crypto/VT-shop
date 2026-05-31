import { defineStore } from 'pinia'

export const useMenuFilter = defineStore('menuFilter', {
  state: () => ({
    category: 'All',
    type: 'All'
  }),

  actions: {
    setCategory(cat) {
      this.category = cat
      this.type = 'All' // reset type when category changes
    },
    setType(type) {
      this.type = type
    }
  }
})