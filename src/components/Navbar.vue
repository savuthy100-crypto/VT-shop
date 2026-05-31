<template>
  <nav :class="DarkMode.isDark ? 'bg-gray-800 text-white border-b': 'bg-gray-100 text-black'" class="sticky top-0 shadow-md z-50">
    <div class="relative max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      <!-- LEFT MENU (Desktop) -->
      <div class="hidden lg:flex space-x-6 items-center">
        <Menu />
      </div>
      <!-- MOBILE MENU BUTTON -->
      <button @click="menuOpen = !menuOpen" class="lg:hidden text-3xl">
        ☰
      </button>

      <!-- LOGO -->
      <router-link to="/" class="text-2xl font-bold text-blue-600">
        <img src="../assets/ChatGPT_Image_May_31__2026__11_04_11_AM-removebg-preview.png" alt="logo" class="w-15">
      </router-link>

      <!-- RIGHT SIDE -->
      <div class="flex items-center gap-5">
        <!-- SEARCH -->
        <button
          @click="toggleSearch"
          class="hidden md:block text-lg text-gray-600 hover:text-blue-500 transition border p-1 pe-20 rounded-lg "
        >
          <i class="bi bi-search px-4"></i>Search
        </button>

        <button @click="toggleSearch" class="md:hidden font-bold text-xl">
          <i class="bi bi-search"></i>
        </button>

        
        <!-- favorite -->
        <router-link to="/favorite" class="relative">
          <i class="bi bi-heart text-2xl"></i>

          <span
            v-if="favoriteStore.totalFavorites"
            class="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"
          >
            {{ favoriteStore.totalFavorites }}
          </span>
        </router-link>
       
            <!-- CART -->
        <button
          @click="openCart = true"
          class="relative text-2xl hover:text-gray-400"
        >
          <span
            class="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
          >
            {{ cart.totalItems }}
          </span>
          <i class="bi bi-bag"></i>
        </button>
        <!-- DARK MODE -->
        <button @click="t.toggleTheme()" class="hover:text-gray-400 text-2xl">
          <i class="bi bi-moon"></i>
        </button>
        <div v-if="!auth.isLogin" class="hidden md:flex gap-2">
          <!-- LOGIN -->
          <RouterLink
            to="/login"
            class="border px-3 py-1 rounded-lg hover:bg-gray-300 hover:text-white transition"
          >
            LOGIN
          </RouterLink>
  
          <!-- REGISTER -->
          <RouterLink
            to="/register"
            class="border px-3 py-1 rounded-lg hover:bg-gray-300 hover:text-white transition"
          >
            REGISTER
          </RouterLink>
        </div>
        <div  v-else @click="router.push('/profile')" class="pr-4 hidden md:block text-3xl">
          <i class="bi bi-person"></i>
          {{ auth.userInfo.name }}
        </div>
        <!-- MOBILE USER ICON -->
        <div @click="auth.isLogin?router.push('/profile'):router.push('/register')" class="text-black md:hidden text-2xl">
          <i class="bi bi-person"></i>
        </div>
      </div>
    </div>

    <!-- OVERLAY -->
    <div
      v-if="menuOpen"
      @click="menuOpen = false"
      class="fixed inset-0 bg-black/50 z-40 lg:hidden"
    ></div>

    <div
      v-if="searchOpen"
      @click="toggleSearch"
      class="fixed inset-0 bg-black/50 z-40"
    ></div>

    <!-- MOBILE SIDEBAR -->
    <div
      class="mobile-sidebar lg:hidden border-r fixed left-0 top-0 w-10/12 md:w-1/2 h-screen shadow-lg z-50"
      :class="{ 'is-open': menuOpen }"
    >
      <aside
        class="py-4 space-y-2 h-screen"
        :class="
          DarkMode.isDark ? 'bg-gray-950 text-white' : 'bg-gray-100 text-black'
        "
      >
        <!-- CLOSE BUTTON -->
        <div class="flex justify-between items-center px-4 pb-4 border-b">
          <h1 class="text-2xl font-bold text-blue-600">Menu</h1>
          <button @click="menuOpen = false" class="text-3xl hover:text-red-500">
            ✕
          </button>
        </div>
        <RouterLink to="/shop" @click="menuOpen = false" class="absolute top-4 right-4 text-sm font-bold bg-black px-5 py-2 rounded-xl text-white hover:bg-amber-700">To Shop</RouterLink>
        <!-- SIDEBAR -->
        <Sidebar></Sidebar>
      </aside>
    </div>

    <!-- SearchBar -->
    <transition name="smooth-search">
      <div
        v-if="searchOpen"
        :class="
          DarkMode.isDark ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'
        "
        class="absolute top-0 left-0 w-full shadow-xl border-t z-50 overflow-hidden"
      >
        <div class="max-w-6xl mx-auto px-6 py-8">
          <div class="flex items-center border-b pb-4">
            <!-- INPUT -->
            <input
              v-model="searchStore.search"
              @keyup.enter="(handleSearch(), (searchOpen = false))"
              type="text"
              placeholder="What are you searching for?"
              class="w-full outline-none md:text-2xl text-xl font-light"
            />
            <!-- SEARCH ICON -->
            <button
              @click="(handleSearch(), (searchOpen = false))"
              class="text-2xl mr-5 hover:scale-110 transition duration-300"
            >
              <i class="bi bi-search"></i>
            </button>

            <!-- CLOSE -->
            <button
              @click="searchOpen = false"
              class="text-4xl p-1 px-2 rounded-full hover:bg-gray-200 transition duration-500"
            >
              ×
            </button>
          </div>
        </div>
      </div>
    </transition>
    <!-- OVERLAY -->
    <div
      v-if="openCart"
      @click="openCart = false"
      class="fixed inset-0 bg-black/40"
    ></div>

    <!-- Sidebar Cart -->
    <div
      class="fixed top-0 right-0 h-screen w-80 shadow-lg transition-all duration-300 z-50"
      :class="openCart ? 'translate-x-0' : 'translate-x-full'"
    >
      <div
        :class="
          DarkMode.isDark ? 'bg-gray-950 text-white' : 'bg-gray-100 text-black'
        "
        class="h-screen flex flex-col"
      >
        <div
          class="flex justify-between items-center p-4 border-b"
          :class="DarkMode.isDark ? 'border-gray-700' : 'border-gray-200'"
        >
          <h1 class="text-xl font-bold">Cart ({{ cart.totalItems }})</h1>
          <button @click="openCart = false" class="text-2xl">×</button>
        </div>
        <div class="flex-1 overflow-y-auto p-4 space-y-3">
          <div
            v-if="cart.items.length === 0"
            class="text-center text-gray-400 py-10"
          >
            <i class="bi bi-bag text-4xl block mb-2"></i>
            Your cart is empty
          </div>
          <div
            v-for="item in cart.items"
            :key="item.id"
            class="flex gap-3 items-center"
          >
            <img
              :src="item.image[0]"
              class="w-14 h-16 object-cover rounded-xl flex-shrink-0"
            />
            <div class="flex-1 min-w-0">
              <p class="text-xs font-semibold truncate">{{ item.type }}</p>
              <p class="text-xs text-gray-400">x{{ item.quantity }}</p>
              <p class="text-sm font-bold">
                ${{
                  (
                    (item.discount > 0
                      ? item.price - (item.price * item.discount) / 100
                      : item.price) * item.quantity
                  ).toFixed(2)
                }}
              </p>
            </div>
            <button
              @click="cart.removeItem(item.id)"
              class="text-gray-400 hover:text-red-500 transition"
            >
              <i class="bi bi-x-lg text-sm"></i>
            </button>
          </div>
        </div>
        <div
          v-if="cart.items.length > 0"
          class="p-4 border-t"
          :class="DarkMode.isDark ? 'border-gray-700' : 'border-gray-200'"
        >
          <div class="flex justify-between font-bold mb-3">
            <span>Total</span>
            <span>${{ cart.totalPrice.toFixed(2) }}</span>
          </div>
          <button
            @click="goToCart"
            class="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
          >
            View Cart
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useRouter } from "vue-router";
import { useDarkMode } from "../stores/DarkMode";
import { useCart } from "../stores/useCart";
import { useAuth } from "../stores/auth.js";
import { useSearchStore } from "../stores/SearchStore";
import Sidebar from "./SideBar.vue";
import Menu from "./Menu.vue";
import { useFavoriteStore } from '../stores/favorite'

const favoriteStore = useFavoriteStore()
const auth = useAuth()
const searchStore = useSearchStore();
const openCart = ref(false);
const DarkMode = useDarkMode();
const cart = useCart();
const router = useRouter();
const searchOpen = ref(false);
const sideOpen = ref(false);

const toggleOpen = ()=>{
  sideOpen.value = !sideOpen.value;
}
const toggleSearch = () => {
  searchOpen.value = !searchOpen.value;
};
const menuOpen = ref(false);
const t = useDarkMode();

const goToCart = () => {
  openCart.value = false;
  router.push("/cart");
};
const goToHome = () => {
  router.push("/");
};
// In Navbar
const handleSearch = () => {
  if (!searchStore.search.trim()) return;
  searchStore.submitSearch();
  router.push("/shop");
  searchOpen.value = false; // close the search bar too
};
</script>

<style scoped>
.mobile-sidebar {
  transform: translateX(-100%);
  opacity: 0;
  visibility: hidden;

  transition:
    transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out,
    visibility 0.3s;
}

.mobile-sidebar.is-open {
  transform: translateX(0);
  opacity: 1;
  visibility: visible;
}

.smooth-search-enter-active,
.smooth-search-leave-active {
  transition:
    opacity 0.35s ease,
    transform 0.35s ease;
}

.smooth-search-enter-from,
.smooth-search-leave-to {
  opacity: 0;
  transform: translateY(-25px);
}

.smooth-search-enter-to,
.smooth-search-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
