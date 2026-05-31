<template>
  <div>
    <Navbar />
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
    <Footer />
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue';
import Favorite from './views/Favorite.vue';
import { onMounted } from 'vue'
import { useFavoriteStore } from './stores/favorite.js'

const favoriteStore = useFavoriteStore()

onMounted(() => {
  favoriteStore.loadFavorites()
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(40px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-40px);
}
</style>