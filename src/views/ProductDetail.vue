<template>
  <div :class="DarkMode.isDark ? 'bg-gray-950 text-white min-h-screen' : 'bg-gray-50 text-black min-h-screen'">
    <div v-if="product" class="max-w-6xl mx-auto px-4 py-10">
      <div class="grid md:grid-cols-2 gap-10">
        <!-- Images -->
        <div>
          <div class="rounded-2xl overflow-hidden aspect-[3/4] mb-3">
            <img :src="activeImage" class="w-full h-full object-cover" />
          </div>
          <div class="flex gap-2 overflow-x-auto pb-1">
            <img
              v-for="(img, i) in product.image"
              :key="i"
              :src="img"
              @click="activeImage = img"
              class="w-16 h-20 object-cover rounded-xl cursor-pointer border-2 transition flex-shrink-0"
              :class="activeImage === img ? 'border-black' : 'border-transparent'"
            />
          </div>
        </div>

        <!-- Info -->
        <div class="py-4">
          <p class="text-sm text-gray-400 uppercase tracking-widest mb-2">{{ product.category_for }} / {{ product.item }} / {{ product.type }}</p>
          <h1 class="text-2xl font-bold mb-4">{{ product.type }} — {{ product.category_for }}</h1>

          <div class="flex items-center gap-3 mb-6">
            <span v-if="product.discount > 0" class="text-gray-400 line-through text-lg">${{ product.price }}</span>
            <span class="text-3xl font-bold" :class="product.discount > 0 ? 'text-red-500' : ''">
              ${{ discountedPrice }}
            </span>
            <span v-if="product.discount > 0" class="bg-red-100 text-red-500 text-sm px-2 py-0.5 rounded-full">-{{ product.discount }}%</span>
          </div>

          <p class="text-sm text-gray-500 leading-relaxed mb-6">{{ product.discription }}</p>

          <!-- Size picker placeholder -->
          <div class="mb-6">
            <p class="text-sm font-semibold mb-2">Size</p>
            <div class="flex gap-2">
              <button v-for="s in ['XS','S','M','L','XL']" :key="s"
                @click="selectedSize = s"
                class="px-4 py-2 border rounded-lg text-sm transition"
                :class="selectedSize === s ? 'bg-black text-white border-black' : DarkMode.isDark ? 'border-gray-600 hover:border-gray-400' : 'border-gray-300 hover:border-black'"
              >{{ s }}</button>
            </div>
          </div>

          <!-- Quantity -->
          <div class="flex items-center gap-3 mb-6">
            <p class="text-sm font-semibold">Qty:</p>
            <div class="flex items-center border rounded-lg overflow-hidden" :class="DarkMode.isDark ? 'border-gray-600' : 'border-gray-200'">
              <button @click="qty > 1 && qty--" class="px-4 py-2 text-lg hover:bg-gray-100 hover:text-black transition">−</button>
              <span class="px-4 text-sm font-medium">{{ qty }}</span>
              <button @click="qty++" class="px-4 py-2 text-lg hover:bg-gray-100 hover:text-black transition">+</button>
            </div>
          </div>

          <div class="flex gap-3">
            <button @click="handleAdd" class="flex-1 bg-black text-white py-3.5 rounded-xl font-semibold hover:bg-gray-800 transition">
              Add to Cart
            </button>
            <button class="w-14 h-14 border rounded-xl flex items-center justify-center hover:border-red-400 hover:text-red-400 transition" @click.stop="favoriteStore.toggleFavorite(product)" :class="DarkMode.isDark ? 'border-gray-600' : 'border-gray-300'">
              <i class="bi text-2xl transition" :class="favoriteStore.isFavorite(product.id)
              ? 'bi-heart-fill text-red-500'
              : 'bi-heart'"></i>
            </button>
          </div>

          <p v-if="added" class="text-green-500 text-sm mt-3 flex items-center gap-1">
            <i class="bi bi-check-circle"></i> Added to cart!
          </p>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-24 text-gray-400">Product not found.</div>
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Footer from '../components/Footer.vue'
import { products } from '../data/products'
import { useCart } from '../stores/useCart'
import { useDarkMode } from '../stores/DarkMode'
import { useToast } from 'vue-toastification'
import { useAuth } from '../stores/auth' // IMPORT AUTH
import { useFavoriteStore } from "../stores/favorite";

const favoriteStore = useFavoriteStore();
const route = useRoute()
const router = useRouter()

const DarkMode = useDarkMode()
const cart = useCart()
const toast = useToast()
const auth = useAuth()

const product = computed(() =>
  products.find(p => p.id === Number(route.params.id))
)

const activeImage = ref(product.value?.image[0])
const qty = ref(1)
const selectedSize = ref('M')
const added = ref(false)

const discountedPrice = computed(() => {
  if (!product.value) return 0

  const p = product.value

  return p.discount > 0
    ? (
        p.price -
        (p.price * p.discount) / 100
      ).toFixed(2)
    : p.price.toFixed(2)
})

const handleAdd = () => {

  // CHECK LOGIN
  if (!auth.isLogin) {
    toast.error(
      'Our application requires you to create an account.',
      {
        timeout: 2000,
        position: 'bottom-right',
        pauseOnHover: true,
        closeOnClick: false,
        draggable: true,

        onClick() {
          router.push('/register')
        }
      }
    )

    return
  }

  // ADD TO CART
  for (let i = 0; i < qty.value; i++) {
    cart.addItem({
      ...product.value,
      size: selectedSize.value
    })
  }

  added.value = true

  setTimeout(() => {
    added.value = false
  }, 2000)

  toast.success(
    `${product.value.item} added to cart 🛒`,
    {
      timeout: 2000,
      position: 'bottom-right',
      pauseOnHover: true,
      closeOnClick: true,
      draggable: true
    }
  )
}
</script>
