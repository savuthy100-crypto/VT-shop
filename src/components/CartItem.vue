<template>
  <div class="flex gap-3 py-4 border-b last:border-0" :class="DarkMode.isDark ? 'border-gray-700' : 'border-gray-200'">
    <!-- Image -->
    <img :src="item.image[0]" class="w-20 h-24 object-cover rounded-xl flex-shrink-0" />

    <!-- Details -->
    <div class="flex-1 min-w-0">
      <p class="text-xs text-gray-400 uppercase tracking-wide">{{ item.category_for }} · {{ item.type }}</p>
      <p class="text-sm font-semibold truncate mt-0.5">{{ item.item }}</p>

      <div class="flex items-center gap-2 mt-1">
        <span v-if="item.discount > 0" class="text-gray-400 line-through text-xs">${{ item.price }}</span>
        <span class="font-bold text-sm" :class="item.discount > 0 ? 'text-red-500' : ''">
          ${{ discountedPrice }}
        </span>
      </div>

      <!-- Qty Controls -->
      <div class="flex items-center gap-2 mt-2">
        <button @click="cart.decrement(item.id)" class="w-7 h-7 rounded-full border flex items-center justify-center text-lg leading-none hover:bg-gray-100 hover:text-black transition">−</button>
        <span class="text-sm font-medium w-4 text-center">{{ item.quantity }}</span>
        <button @click="cart.increment(item.id)" class="w-7 h-7 rounded-full border flex items-center justify-center text-lg leading-none hover:bg-gray-100 hover:text-black transition">+</button>

        <button @click="cart.removeItem(item.id)" class="ml-auto text-gray-400 hover:text-red-500 transition">
          <i class="bi bi-trash text-sm"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useDarkMode } from '../stores/DarkMode'
import { useCart } from '../stores/useCart'

const props = defineProps({ item: Object })
const DarkMode = useDarkMode()
const cart = useCart()

const discountedPrice = computed(() => {
  const i = props.item
  const unit = i.discount > 0 ? (i.price - (i.price * i.discount) / 100) : i.price
  return (unit * i.quantity).toFixed(2)
})
</script>
