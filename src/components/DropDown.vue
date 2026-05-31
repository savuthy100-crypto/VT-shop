<template>
  <nav class="  px-8 py-4">
    
    <div class="flex space-x-10">

      <!-- MAIN MENU -->
      <div v-for="menu in menus" :key="menu.id" class="relative group">

        <!-- Menu Button -->
        <button class="relative text-lg font-medium pb-1">
          {{ menu.category_for }}
          <!-- Hover Line -->
          <span class="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
        </button>

        <!-- DROPDOWN -->
        <div class="border rounded-xl p-6 gap-10 min-w-[700px] z-50 left-0 top-10 absolute opacity-0 invisible group-hover:opacity-100 group-hover:flex  group-hover:visible transition-all duration-300 transform group-hover:translate-y-1 bg-white">

          <!-- COLUMN -->
          <div v-for="(sub, index) in menu.subMenu" :key="index" class="min-w-[150px]">

            <!-- Title -->
            <h2 class="font-bold text-gray-900 mb-3">
              {{ sub.item }}
            </h2>

            <!-- Items -->
            <ul class="space-y-2">
              <li v-for="(item, i) in sub.sub_item" :key="i" class="text-gray-600 hover:text-black cursor-pointer transition">
                {{ item }}
              </li>
            </ul>

          </div>

        </div>

      </div>

    </div>

  </nav>
</template>

<script setup>
import { menus } from '../data/menus';
</script>