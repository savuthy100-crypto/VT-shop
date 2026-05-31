<template>
  <div :class="isDark.isDark?'bg-gray-800 text-white border-b': 'bg-gray-100 text-black'" class="h-1/2 flex flex-col align-items-center justify-content-center rounded-2xl mt-7">
    <main class="flex-1 flex items-center justify-center p-6">
      <div class="relative w-full max-w-6xl flex flex-col md:flex-row items-center justify-between">
        <!-- LEFT MENU -->
        <div class="space-y-3 md:w-1/3">
          <div class="space-y-2">
            <p class="text-2xl font-bold relative">
              NEW SHOES
              <span class="absolute -left-3 top-2 w-1.5 h-1.5rounded-full animate-pulse"></span>
            </p>
          </div>
          <p class="text-xs text-gray-400 tracking-[0.3em]">CATEGORIES</p>
          <p class="text-xs text-gray-500">Sneakers collection 2026.</p>
          <p class="text-xs text-gray-500">A description is a spoken or written account that aims to create a vivid picture of a person, place, object, or event using sensory details and characteristics. </p>
        </div>
  
        <!-- CENTER PRODUCT -->
        <div class="relative md:w-1/3 flex justify-center items-center">
          <div class="absolute w-80 h-80 bg-gradient-to-tr from-gray-200 to-white rounded-full blur-3xl opacity-60 animate-pulse"></div>
  
          <img
            :src="products[currentIndex].image"
            class="w-80 h-70 md:w-96 object-contain z-10 transition-all duration-700 hover:scale-105 drop-shadow-2xl"
          />
        </div>
  
        <!-- RIGHT THUMBNAILS -->
        <div class="md:w-1/3 flex justify-end gap-4">
          <div
            v-for="(p, i) in products"
            :key="i"
            @click="changeProduct(i)"
            class="cursor-pointer"
          >
            <img
              :src="p.image"
              class="w-16 h-16 object-contain rounded-xl border transition-all duration-300"
              :class="i === currentIndex ? 'border-black scale-110 opacity-100' : 'opacity-40 hover:opacity-100'"
            />
          </div>
        </div>
      </div>
    </main>
    <!-- FOOTER -->
    <footer class="text-center pb-12">
      <h1 class="text-4xl font-extrabold tracking-[0.4em]">GUCCI</h1>
      <p class="text-xs text-gray-500 mt-2">Crystal Flash Sneakers | $1090</p>
      <button
        @click="addToBag"
        class="mt-5 px-8 py-3 bg-black text-white text-xs tracking-widest hover:bg-gray-800 active:scale-95 transition rounded-full shadow-lg"
      >
        {{ added ? 'ADDED ✓' : 'ADD TO CALENDA' }}
      </button>
  
      <!-- toast -->
      <p v-if="toast" class="mt-4 text-green-600 text-xs animate-bounce">
        Added successfully! We will notification you when product is arrival.
      </p> 
    </footer>
    <!-- HERO -->
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useDarkMode } from "../stores/DarkMode"
const isDark = useDarkMode();

const products = ref([
  { image: "https://sendaathletics.com/cdn/shop/files/shoes_ushuaia-pro-orange-000-portada.png?v=1765107067" },
  { image: "https://icebug-products.imgix.net//images/1595_9f253cf8fe-f0315004_rover_2_m_rb9x_gtx_taupe_7-original.jpg?auto=format&fit=clip&w=3840&q=50" },
  { image: "https://www.daedo.com/cdn/shop/files/Daedo-sportswear-shoes-za2024.png?v=1777380277&width=533" },
])

const currentIndex = ref(0)
const added = ref(false)
const toast = ref(false)

const changeProduct = (i) => {
  currentIndex.value = i
}

const addToBag = () => {
  added.value = true
  toast.value = true

  setTimeout(() => {
    toast.value = false
  }, 2000)
}
</script>

<style scoped>
</style>