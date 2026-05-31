<template>
  <div :class="darkMode.isDark?'bg-gray-800 text-white border-b': 'bg-gray-100 text-black'" class="min-h-screen">
    <main class="max-w-6xl mx-auto px-4 md:px-8 py-10 space-y-8">

      <!-- PROFILE CARD -->
      <section class="rounded-2xl shadow-sm border overflow-hidden hover:shadow-md transition">
        <!-- HEADER -->
        <div class="p-6 border-b flex justify-between items-center bg-gradient-to-r ">
          <h2 class="text-sm md:text-2xl font-bold">Personal Information</h2>

          <button class="flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 transition">
            <span class="material-symbols-outlined text-[18px]"><i class="bi bi-pencil-square"></i> </span>
            Edit Profile
          </button>
        </div>
        <!-- BODY -->
        <div class="p-6">
          <div class="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">

            <div class="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-indigo-100 shadow">
              <img :src="user.avatar" class="w-full h-full object-cover" />
            </div>

            <div class="text-center md:text-left">
              <h3 class="text-2xl font-bold">{{ auth.isLogin? auth.userInfo.name:'Guse User' }}</h3>
              <p class="text-gray-500 mt-1">
                Your profile helps personalize your experience
              </p>
            </div>
          </div>
          <div class="flex align-items-end justify-end">
            <button @click="auth.logout" class="flex items-center gap-2 text-amber-600  font-semibold hover:text-indigo-800 transition">
              <span class="material-symbols-outlined text-[18px]">Logout</span> 
              <i class="bi bi-box-arrow-right"></i>
          </button>
          </div>
          <!-- INFO GRID -->
          <div class="grid sm:grid-cols-2 gap-5">
            <Info label="Full Name" :value="user.name" />
            <Info label="Email" :value="user.email" />
            <Info label="Phone" :value="user.phone" />
            <Info label="Date of Birth" :value="user.dob" />
          </div>

        </div>
      </section>

      <!-- ORDERS -->
      <section class="rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition">

        <div class="p-6 border-b">
          <h2 class="text-xl md:text-2xl font-bold">Recent Orders</h2>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left">
            <thead class="bg-gray-100 text-gray-600 text-sm">
              <tr>
                <th class="p-4">Order ID</th>
                <th class="p-4">Date</th>
                <th class="p-4">Amount</th>
                <th class="p-4">Status</th>
              </tr>
            </thead>

            <tbody class="divide-y">
              <tr
                v-for="o in orders"
                :key="o.id"
                class="hover:bg-gray-500 transition"
              >
                <td class="p-4 font-medium">{{ o.id }}</td>
                <td class="p-4 text-gray-600">{{ o.date }}</td>
                <td class="p-4 font-semibold">${{ o.amount }}</td>
                <td class="p-4">
                  <span
                    class="px-3 py-1 rounded-full text-sm font-semibold"
                    :class="o.status === 'Delivered'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'"
                  >
                    {{ o.status }}
                  </span>
                </td>
              </tr>
            </tbody>

          </table>
        </div>

      </section>

      <!-- REWARDS -->
      <section class="grid md:grid-cols-2 gap-6">

        <!-- REWARDS CARD -->
        <div class="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 class="text-lg font-bold">Harvest Rewards</h3>
          <p class="mt-2 text-white/90">You have <span class="font-bold">{{ points }}</span> points</p>

          <button class="mt-5 bg-white text-indigo-600 px-5 py-2 rounded-full font-bold hover:bg-gray-100 transition">
            Redeem Now
          </button>
        </div>
        <!-- REFERRAL -->
        <div class="p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition">
          <h3 class="font-bold text-lg">Refer a Friend</h3>
          <p class="text-gray-500 mt-1 text-sm">Share your code and earn rewards</p>

          <div class="mt-5 flex items-center justify-between p-3 rounded-lg border">
            <span class="font-mono tracking-wide">{{ referralCode }}</span>
            <button class="text-indigo-600 font-semibold hover:underline">
              Copy
            </button>
          </div>
        </div>

      </section>

    </main>
  </div>
</template>

<script setup>
import { ref, defineComponent } from "vue";
import { useAuth } from "../stores/auth";
import { useDarkMode } from "../stores/DarkMode";
const auth = useAuth();
const darkMode = useDarkMode();
const user = ref({
  //name: auth.userName || 'Guse User',
  email: "alex.j@example.com",
  phone: "+1 (555) 123-4567",
  dob: "January 15, 1992",
  avatar: "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"
});

const orders = ref([
  { id: "#OR-99821", date: "Oct 24, 2023", amount: 124.5, status: "Delivered" },
  { id: "#OR-99805", date: "Oct 21, 2023", amount: 56.2, status: "In Transit" },
  { id: "#OR-99754", date: "Oct 15, 2023", amount: 89.15, status: "Delivered" },
]);

const points = ref(1240);
const referralCode = ref("FRESH-ALEX-2024");

const Info = defineComponent({
  props: {
    label: String,
    value: String,
  },
  template: `
    <div class="p-4 rounded-xl border bg-white hover:shadow-sm transition">
      <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">{{ label }}</p>
      <div class="text-gray-800 font-medium">{{ value }}</div>
    </div>
  `,
});
</script>