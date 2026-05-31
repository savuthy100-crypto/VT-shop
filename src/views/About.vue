<template>
  <div class="font-body-md text-on-surface overflow-x-hidden bg-[#faf7f2]">

    <!-- HERO -->
    <section class="relative min-h-[80vh] flex items-center justify-center">
      <div class="absolute inset-0 bg-black/50"></div>

      <img
        src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1600&auto=format&fit=crop"
        class="absolute inset-0 w-full h-full object-cover"
      />

      <div class="relative text-center text-white px-6 max-w-3xl">
        <p class="uppercase tracking-[0.3em] text-white/70 mb-4">
          ELÉVÉ Atelier
        </p>

        <h1 class="text-5xl md:text-7xl font-light mb-6">
          Timeless Craft & Modern Elegance
        </h1>

        <p class="text-white/70 text-lg leading-8">
          We create garments that transcend trends and celebrate craftsmanship.
        </p>
      </div>
    </section>

    <!-- OUR STORY -->
    <section class="py-28 px-5 md:px-16 max-w-7xl mx-auto fade-up">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

        <div class="md:col-span-5">
          <p class="uppercase tracking-[0.3em] text-gray-500 mb-6">
            Foundations
          </p>

          <h2 class="text-4xl md:text-5xl font-light mb-6">
            Where Heritage Meets Modern Intent
          </h2>

          <p class="text-gray-600 leading-8 mb-4">
            Founded in 2024, ELÉVÉ was born from a desire to return to true craftsmanship.
          </p>

          <p class="text-gray-600 leading-8">
            We work with heritage mills and artisans to preserve timeless quality.
          </p>
        </div>

        <div class="md:col-span-7">
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop"
            class="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
          />
        </div>

      </div>
    </section>

    <!-- PRINCIPLES -->
    <section class="py-28 px-5 md:px-16 bg-white">
      <div class="max-w-7xl mx-auto text-center">

        <h2 class="text-5xl font-light mb-16">Our Principles</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div
            v-for="item in principles"
            :key="item.title"
            class="p-10 bg-[#faf7f2] rounded-3xl hover:-translate-y-2 transition"
          >
            <div class="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-black text-white">
              <span class="material-symbols-outlined">
                {{ item.icon }}
              </span>
            </div>

            <h3 class="text-2xl font-light mb-3">
              {{ item.title }}
            </h3>

            <p class="text-gray-600 leading-7">
              {{ item.description }}
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- SHOPS + GOOGLE MAPS -->
    <section class="py-28 px-5 md:px-16 bg-[#111] text-white">
      <div class="max-w-7xl mx-auto">

        <div class="text-center mb-16">
          <h2 class="text-5xl font-light mb-4">
            Our Global Stores
          </h2>
          <div class="w-20 h-[2px] bg-white mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          <div
            v-for="shop in shops"
            :key="shop.city"
            class="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 transition"
          >

            <!-- MAP -->
            <div class="h-56">
              <iframe
                :src="shop.mapEmbed"
                class="w-full h-full"
                loading="lazy"
              ></iframe>
            </div>

            <!-- INFO -->
            <div class="p-6">
              <h3 class="text-2xl font-light mb-2">
                {{ shop.city }}
              </h3>

              <p class="text-white/70 mb-4 leading-7">
                {{ shop.address }}
              </p>

              <a
                :href="shop.openMap"
                target="_blank"
                class="inline-flex items-center gap-2 text-sm uppercase tracking-widest bg-white text-black px-5 py-3 rounded-full hover:opacity-80 transition"
              >
                <span class="material-symbols-outlined text-base">
                  location_on
                </span>
                Open Map
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-28 px-5 md:px-16">
      <div class="max-w-4xl mx-auto text-center bg-white rounded-3xl p-16 shadow-2xl">

        <h2 class="text-5xl font-light mb-6">
          Join Our Community
        </h2>

        <p class="text-gray-600 mb-10">
          Get updates about new collections and exclusive drops.
        </p>

        <form @submit.prevent="subscribe" class="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
          <input
            v-model="email"
            type="email"
            placeholder="Your email"
            class="flex-1 px-6 py-4 rounded-full bg-gray-100 outline-none"
          />

          <button
            class="bg-black text-white px-8 py-4 rounded-full uppercase tracking-widest"
          >
            Subscribe
          </button>
        </form>

      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

const email = ref("")

const principles = [
  {
    icon: "eco",
    title: "Sustainability",
    description: "We use only ethical and sustainable materials.",
  },
  {
    icon: "handshake",
    title: "Ethical Production",
    description: "Every piece is made in fair-wage environments.",
  },
  {
    icon: "hourglass_empty",
    title: "Timeless Design",
    description: "We design beyond trends for lasting elegance.",
  },
]

const shops = [
  {
    city: "Paris",
    address: "12 Rue de Rivoli, Paris, France",
    mapEmbed: "https://www.google.com/maps?q=Paris+Rue+de+Rivoli&output=embed",
    openMap: "https://maps.google.com/?q=Paris+Rue+de+Rivoli",
  },
  {
    city: "Milan",
    address: "Via Monte Napoleone, Milan, Italy",
    mapEmbed: "https://www.google.com/maps?q=Milan+Monte+Napoleone&output=embed",
    openMap: "https://maps.google.com/?q=Milan+Monte+Napoleone",
  },
  {
    city: "Tokyo",
    address: "Shibuya District, Tokyo, Japan",
    mapEmbed: "https://www.google.com/maps?q=Shibuya+Tokyo&output=embed",
    openMap: "https://maps.google.com/?q=Shibuya+Tokyo",
  },
  {
    city: "New York",
    address: "5th Avenue, Manhattan, New York",
    mapEmbed: "https://www.google.com/maps?q=5th+Avenue+New+York&output=embed",
    openMap: "https://maps.google.com/?q=5th+Avenue+New+York",
  },
]

const subscribe = () => {
  alert(`Subscribed: ${email.value}`)
  email.value = ""
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("show")
    })
  })

  document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el))
})
</script>

<style>
.fade-up {
  opacity: 0;
  transform: translateY(40px);
  transition: all 1s ease;
}

.fade-up.show {
  opacity: 1;
  transform: translateY(0);
}

.material-symbols-outlined {
  font-variation-settings:
    "FILL" 0,
    "wght" 300,
    "GRAD" 0,
    "opsz" 24;
}
</style>