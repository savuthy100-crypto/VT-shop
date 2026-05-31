<template>
  <section :class="DarkMode.isDark ? 'bg-gray-950 text-white' : 'bg-gray-100 text-black'" class="bg-gray-100 flex items-center" >
    <div class="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-10 items-center">
      <!-- LEFT -->
      <div class="space-y-6">
        <span class="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
          🔥 New Collection 2026
        </span>

        <h1 :class="DarkMode.isDark ? 'bg-gray-950 text-white' : 'bg-gray-100 text-black'" class="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
          Elevate Your <br />
          Fashion Style
        </h1>

        <p class="text-gray-600 text-lg max-w-lg">
          Discover premium fashion products with modern design,
          exclusive discounts, and fast delivery.
        </p>

        <!-- Buttons -->
        <div class="flex gap-4">
          <router-link to="/shop" :class="DarkMode.isDark ? 'bg-yellow-950 text-white' : 'bg-gray-950 text-white'" class="px-7 py-3 rounded-full font-semibold hover:scale-105 transition">
            Shop Now
          </router-link>

          <button :class="DarkMode.isDark ? 'hover:bg-yellow-950 text-white border-yellow-950' : ' text-black '" class="border border-black px-7 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition">
            Explore
          </button>
        </div>

        <!-- Stats -->
        <div class="flex gap-10 pt-6">
          <div>
            <h2 :class="DarkMode.isDark ? 'bg-gray-950 text-white' : 'bg-gray-100 text-black'" class="text-2xl font-bold text-black">10K+</h2>
            <p class="text-gray-500">Customers</p>
          </div>

          <div>
            <h2 :class="DarkMode.isDark ? 'bg-gray-950 text-white' : 'bg-gray-100 text-black'" class="text-2xl font-bold text-black">500+</h2>
            <p class="text-gray-500">Products</p>
          </div>

          <div>
            <h2 :class="DarkMode.isDark ? 'bg-gray-950 text-yellow-600' : 'bg-gray-100 text-black'" class="text-2xl font-bold text-black">4.9★</h2>
            <p class="text-gray-500">Reviews</p>
          </div>
        </div>
      </div>

      <!-- RIGHT -->
      <div class="relative flex justify-center">
        <!-- Background Blur -->
        <div
          class="absolute w-72 h-72 bg-orange-300/30 rounded-full blur-3xl"
        ></div>

        <!-- Image -->
        <img
          src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b"
          alt="Fashion"
          class="relative z-10 w-full max-w-md rounded-3xl shadow-2xl object-cover"
        />

        <!-- Floating Card -->
        <div
          class="absolute bottom-5 left-0 bg-white px-5 py-3 rounded-2xl shadow-xl z-20"
        >
          <p class="text-sm text-gray-500">Special Offer</p>
          <h3 class="font-bold text-lg text-black">Up to 50% OFF</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useDarkMode } from '../stores/DarkMode';

const DarkMode = useDarkMode();
</script>

<style scoped>
img {
  animation: float 4s ease-in-out infinite;
}
@keyframes float {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0px);
  }
}
</style>