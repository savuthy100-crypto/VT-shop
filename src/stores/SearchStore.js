import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSearchStore = defineStore('search', () => {
  const search = ref('')
  const submittedSearch = ref('')

  const submitSearch = () => {
    submittedSearch.value = search.value.trim()
    console.log('[SearchStore] submitted:', submittedSearch.value) // debug
  }

  const clearSearch = () => {
    search.value = ''
    submittedSearch.value = ''
  }

  return { search, submittedSearch, submitSearch, clearSearch }
})