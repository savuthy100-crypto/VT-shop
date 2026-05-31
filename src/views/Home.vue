<template>
  <div :class="DarkMode.isDark ? 'bg-gray-950 text-white' : 'bg-gray-50 text-black'" class="transition-all duration-500">
    <Banner />
    <!-- Featured Products -->
    <section class="max-w-7xl mx-auto px-4 py-14">
      <div class="flex items-center justify-between mb-8">
        <div>
          <h2 class="text-2xl font-bold">New Arrivals</h2>
          <p class="text-gray-400 text-sm mt-1">Fresh styles just landed</p>
        </div>
        <RouterLink to="/shop" class="text-sm font-semibold border-b border-black pb-0.5 hover:opacity-70 transition" :class="DarkMode.isDark ? 'border-white' : 'border-black'">
          View All →
        </RouterLink>
      </div>


      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <ProductCard v-for="p in newArrivals" :key="p.id + p.type" :product="p" />
      </div>
      
      <Gucci/>
      
    </section>

    <!-- Categories Banner -->
    <section class="max-w-7xl mx-auto px-4 pb-14">
      <h2 class="text-2xl font-bold mb-6">Shop by Category</h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div
          v-for="cat in categoryCards"
          :key="cat.label"
          @click="setGender(cat.label)"
          class="relative overflow-hidden rounded-2xl aspect-video group cursor-pointer"
        >
          <img :src="cat.img" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div class="absolute inset-0 bg-black/40 flex items-end p-5">
            <div>
              <p class="text-white text-xs uppercase tracking-widest mb-1">{{ cat.sub }}</p>
              <h3 class="text-white text-xl font-bold">{{ cat.label }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import Banner from '../components/Banner.vue'
import ProductCard from '../components/ProductCard.vue'
import { products } from '../data/products'
import { useDarkMode } from '../stores/DarkMode'
import Gucci from '../components/Gucci.vue'
import { useMenuFilter } from '../stores/MenuFilter.js'
import { useRouter } from 'vue-router'
const DarkMode = useDarkMode()
const menu = useMenuFilter()
const route = useRouter();
const setGender=(cat)=>{
  menu.setCategory(cat)
  route.push('/shop')
}
const newArrivals = computed(() => products.filter(p => p.isNewIn).slice(0, 8))

const categoryCards = [
  { label: 'Women', sub: 'New Collection', img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600' },
  { label: 'Men', sub: 'New Collection', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600' },
  { label: 'Kids', sub: 'New Collection', img: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600' },
]
</script>
