<template>
  <aside class="w-full relative p-4">
    
    <div>
      <h3 class="font-semibold mb-4">Filters</h3>

      <!-- Category -->
      <div class="mb-5">
        <p class="text-xs uppercase tracking-widest text-gray-400 mb-2">
          Category
        </p>

        <div class="space-y-1">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="selectedCat = cat"
            class="block text-lg w-full text-left hover:pe-1.5 px-3 py-1.5 rounded-lg transition"
            :class="
              selectedCat === cat
                ? 'bg-black text-white'
                : DarkMode.isDark
                  ? 'hover:bg-gray-700'
                  : 'hover:bg-gray-100'
            "
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <!-- Type -->
      <div class="mb-5">
        <p class="text-xs uppercase tracking-widest text-gray-400 mb-2">
          Type
        </p>

        <div class="space-y-1">
          <button
            v-for="t in types"
            :key="t"
            @click="selectedType = t"
            class="block w-full text-left text-sm px-3 py-1.5 rounded-lg transition"
            :class="
              selectedType === t
                ? 'bg-black text-white'
                : DarkMode.isDark
                  ? 'hover:bg-gray-700'
                  : 'hover:bg-gray-100'
            "
          >
            {{ t }}
          </button>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { computed } from "vue"
import { useDarkMode } from "../stores/DarkMode"
import { useMenuFilter } from "../stores/MenuFilter"
import { products } from "../data/products"

const DarkMode = useDarkMode()
const menu = useMenuFilter()

const selectedCat = computed({
  get: () => menu.category,
  set: (val) => menu.setCategory(val)
})

const selectedType = computed({
  get: () => menu.type,
  set: (val) => menu.setType(val)
})

// Categories list
const categories = computed(() => [
  "All",
  ...new Set(products.map((p) => p.category_for))
])

// Types list (depends on selected category)
const types = computed(() => {
  const pool =
    selectedCat.value === "All"
      ? products
      : products.filter((p) => p.category_for === selectedCat.value)

  return ["All", ...new Set(pool.map((p) => p.type))]
})
</script>

<style></style>