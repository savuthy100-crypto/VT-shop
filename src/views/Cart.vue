<template>
  <div :class="DarkMode.isDark ? 'bg-gray-950 text-white min-h-screen' : 'bg-gray-50 text-black min-h-screen'">

    <div class="max-w-6xl mx-auto px-4 py-10">
      <h1 class="text-3xl font-bold mb-8">Your Cart</h1>

      <div v-if="cart.items.length === 0" class="text-center py-24 text-gray-400">
        <i class="bi bi-bag text-6xl mb-4 block"></i>
        <p class="text-xl font-medium mb-4">Your cart is empty</p>
        <RouterLink to="/shop" class="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
          Browse Products
        </RouterLink>
      </div>

      <div v-else class="grid lg:grid-cols-3 gap-8">
        <!-- Items -->
        <div class="lg:col-span-2">
          <div :class="DarkMode.isDark ? 'bg-gray-800' : 'bg-white'" class="rounded-2xl p-5 shadow-sm">
            <CartItem v-for="item in cart.items" :key="item.id" :item="item" />
          </div>

          <button @click="cart.clearCart()" class="mt-4 text-sm text-red-500 hover:underline">
            Clear all items
          </button>
        </div>

        <!-- Summary -->
        <div>
          <div :class="DarkMode.isDark ? 'bg-gray-800' : 'bg-white'" class="rounded-2xl p-5 shadow-sm sticky top-24">
            <h2 class="text-lg font-bold mb-5">Order Summary</h2>

            <div class="space-y-3 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-400">Items ({{ cart.totalItems }})</span>
                <span>${{ cart.totalPrice.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Shipping</span>
                <span class="text-green-500">Free</span>
              </div>
              <div class="border-t pt-3 flex justify-between font-bold text-base" :class="DarkMode.isDark ? 'border-gray-600' : 'border-gray-200'">
                <span>Total</span>
                <span>${{ cart.totalPrice.toFixed(2) }}</span>
              </div>
            </div>

            <RouterLink to="/checkout">
              <button class="w-full mt-6 bg-black text-white py-3.5 rounded-xl font-semibold hover:bg-gray-800 transition">
                Proceed to Checkout
              </button>
            </RouterLink>

            <RouterLink to="/shop" class="block text-center text-sm text-gray-400 hover:underline mt-3">
              Continue Shopping
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import CartItem from '../components/CartItem.vue'
import { useCart } from '../stores/useCart'
import { useDarkMode } from '../stores/DarkMode'
import { RouterLink } from 'vue-router'

const cart = useCart()
const DarkMode = useDarkMode()
</script>
