<template>
  <footer :class="darkMode.isDark ? 'bg-gray-800 text-white border-b': 'bg-gray-100 text-black'" class="bg-ink text-cream">
    <div class="max-w-7xl mx-auto px-6 py-16">
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-12">
        <!-- Brand -->
        <div class="col-span-3 md:col-span-1">
          <h2 class="font-display text-3xl text-gold mb-4 font-bold">VH-Shop</h2>
          <p class="font-body text-xs text-cream/50 leading-relaxed mb-6">
            Curating the finest pieces from global ateliers. Luxury redefined for the modern connoisseur.
          </p>
          <div class="flex gap-4">
            <a v-for="social in socials" :key="social" href="#"
              class="w-8 h-8 border border-cream/20 flex items-center justify-center text-cream/40 hover:border-gold hover:text-gold transition-all duration-200 text-xs font-mono">
              {{ social[0] }}
            </a>
          </div>
        </div>

        <!-- Links -->
        <div v-for="section in footerLinks" :key="section.title">
          <h4 class="font-mono text-xs tracking-widest uppercase text-gold mb-5">{{ section.title }}</h4>
          <ul class="space-y-3">
            <li v-for="link in section.links" :key="link">
              <RouterLink :to="link.to" class="font-body text-xs text-cream/50 hover:text-cream transition-colors duration-200">
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Newsletter -->
      <div class="border-t border-cream/10 pt-10 mb-10">
        <div class="max-w-md">
          <h4 class="font-display text-xl mb-2">Join the Inner Circle</h4>
          <p class="text-xs text-cream/40 mb-5">First access to new collections, exclusive offers, and editorial content.</p>
          <div class="flex gap-0">
            <input type="email" placeholder="Your email address"
              class="flex-1 bg-cream/5 border border-cream/20 px-4 py-3 text-xs text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors" />
            <button class="bg-gold text-ink px-6 py-3 text-xs tracking-widest uppercase font-medium hover:bg-gold-light transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-cream/10 pt-6">
        <p class="text-xs text-cream/30 font-mono">© 2026 VH-Shop. All rights reserved.</p>
        <div class="flex gap-6">
          <a v-for="item in ['Privacy', 'Terms', 'Cookies']" :key="item" href="#"
            class="text-xs text-cream/30 hover:text-cream/70 transition-colors font-mono">{{ item }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useDarkMode } from '../stores/DarkMode';
const darkMode = useDarkMode();
const socials = ['Instagram', 'Pinterest', 'Twitter']

const footerLinks = [
  {
    title: 'Shop',
    links: [
      { label: 'New Arrivals', to: '/shop?filter=new' },
      { label: 'Best Sellers', to: '/shop' },
      { label: 'Sale', to: '/shop?filter=sale' },
      { label: 'Collections', to: '/shop' },
    ]
  },
  {
    title: 'Help',
    links: [
      { label: 'Size Guide', to: '/' },
      { label: 'Shipping Info', to: '/' },
      { label: 'Returns', to: '/' },
      { label: 'Contact Us', to: '/' },
    ]
  },
  {
    title: 'Account',
    links: [
      { label: 'Sign In', to: '/login' },
      { label: 'Register', to: '/register' },
      { label: 'My Orders', to: '/profile' },
      { label: 'Wishlist', to: '/wishlist' },
    ]
  }
]
</script>