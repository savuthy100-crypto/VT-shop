<script setup>

import ProductCard from '../components/ProductCard.vue';
import { useDarkMode } from '../stores/DarkMode.js';
import { useFavoriteStore } from '../stores/favorite'

const isDarkMode = useDarkMode();
const favoriteStore = useFavoriteStore()
console.log(favoriteStore.favorites)
</script>

<template >
  <div :class="isDarkMode.isDark ? 'bg-gray-950 text-white border-b': 'bg-gray-100 text-black'">
    <div class="max-w-7xl mx-auto px-4 py-10" >

      <h1 class="text-3xl font-bold mb-8">
        My Favorites
      </h1>

      <!-- Empty -->
      <div
        v-if="favoriteStore.favorites.length === 0"
        class="text-center py-20"
      >
        <i class="bi bi-heart text-6xl text-gray-400"></i>

        <p class="mt-4 text-gray-500">
          No favorite products yet
        </p>
      </div>

      <!-- Products -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-5 gap-4">
        <ProductCard v-for="p in favoriteStore.favorites" :key="p.id + p.type" :product="p"/>
      </div>
    </div>
  </div>
</template>