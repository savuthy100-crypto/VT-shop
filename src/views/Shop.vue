<template>
  <div
    :class="
      DarkMode.isDark
        ? 'bg-gray-950 text-white min-h-screen'
        : 'bg-gray-50 text-black min-h-screen'
    "
  >

    <div class="max-w-7xl mx-auto px-4 py-10">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold">Shop</h1>
        <p class="text-gray-400 mt-1">{{ filtered.length }} products</p>
      </div>

      <div class="flex gap-6">
        <!-- Filters Sidebar -->
        <aside class="hidden lg:block w-56 flex-shrink-0">
          <div
            :class="DarkMode.isDark ? 'bg-gray-800' : 'bg-white'"
            class="rounded-2xl p-5 sticky top-24 shadow-sm"
          >
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
                  class="block w-full text-left text-sm px-3 py-1.5 rounded-lg transition"
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

            <!-- New In Only -->
            <label class="flex items-center gap-2 cursor-pointer text-sm mt-2">
              <input type="checkbox" v-model="newInOnly" class="accent-black" />
              New In Only
            </label>
          </div>
        </aside>

        <!-- Main -->
        <div class="flex-1">
          <!-- Mobile Filters + Sort Row -->
          <div class="flex items-center justify-between mb-5 gap-3">
            <select
              v-model="sortBy"
              :class="
                DarkMode.isDark
                  ? 'bg-gray-800 text-white border-gray-600'
                  : 'bg-white border-gray-200'
              "
              class="border text-sm px-3 py-2 rounded-lg outline-none"
            >
              <option value="default">Sort: Default</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="discount">Biggest Discount</option>
            </select>

            <!-- Mobile filter toggles -->
            <div class="lg:hidden flex gap-2 flex-wrap">
              <button
                v-for="cat in categories.slice(1)"
                :key="cat"
                @click="selectedCat = selectedCat === cat ? 'All' : cat"
                class="text-xs px-3 py-1.5 rounded-full border transition"
                :class="
                  selectedCat === cat
                    ? 'bg-black text-white border-black'
                    : 'border-gray-300'
                "
              >
                {{ cat }}
              </button>
            </div>
          </div>

          <!-- Grid -->
          <div
            v-if="filtered.length"
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            <ProductCard
              v-for="p in filtered"
              :key="p.id + p.type"
              :product="p"
            />
          </div>
          <div v-else class="text-center py-24 text-gray-400">
            <i class="bi bi-box-seam text-5xl mb-4 block"></i>
            No products found.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ProductCard from "../components/ProductCard.vue";
import { products } from "../data/products";
import { useDarkMode } from "../stores/DarkMode";
import { useSearchStore } from "../stores/SearchStore";
import { useMenuFilter } from "../stores/MenuFilter";

const DarkMode = useDarkMode();
const searchStore = useSearchStore();
const menu = useMenuFilter();

const sortBy = ref("default");
const newInOnly = ref(false);

// ✅ GLOBAL FILTER STATE (PINIA)
const selectedCat = computed({
  get: () => menu.category,
  set: (val) => menu.setCategory(val),
});

const selectedType = computed({
  get: () => menu.type,
  set: (val) => menu.setType(val),
});

// Categories
const categories = computed(() => [
  "All",
  ...new Set(products.map((p) => p.category_for)),
]);

// Types
const types = computed(() => {
  const pool =
    selectedCat.value === "All"
      ? products
      : products.filter((p) => p.category_for === selectedCat.value);

  return ["All", ...new Set(pool.map((p) => p.type))];
});

// FILTER LOGIC
const filtered = computed(() => {
  let list = [...products];

  // SEARCH
  const search = searchStore.submittedSearch?.toLowerCase().trim();
  if (search) {
    list = list.filter(
      (p) =>
        (p.type ?? "").toLowerCase().includes(search) ||
        (p.category_for ?? "").toLowerCase().includes(search) ||
        (p.item ?? "").toLowerCase().includes(search) ||
        (p.description ?? "").toLowerCase().includes(search),
    );
  }

  // CATEGORY
  if (selectedCat.value !== "All") {
    list = list.filter((p) => p.category_for === selectedCat.value);
  }

  // TYPE
  if (selectedType.value !== "All") {
    list = list.filter((p) => p.type === selectedType.value);
  }

  // NEW IN
  if (newInOnly.value) {
    list = list.filter((p) => p.isNewIn);
  }

  // SORT
  if (sortBy.value === "price-asc") {
    list.sort((a, b) => a.price - b.price);
  } else if (sortBy.value === "price-desc") {
    list.sort((a, b) => b.price - a.price);
  } else if (sortBy.value === "discount") {
    list.sort((a, b) => b.discount - a.discount);
  }

  return list;
});
</script>
