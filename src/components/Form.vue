<template>
  <div class="relative w-1/3 bg-white rounded-3xl shadow-xl p-8">
    <!-- CLOSE BUTTON -->
    <button
      @click="closeForm"
      class="absolute top-4 right-4 w-10 h-10 rounded-full hover:bg-gray-100 duration-300 flex items-center justify-center text-2xl text-gray-500 hover:text-black"
    >
      ✕
    </button>

    <!-- HEADER -->
    <div>
      <div class="flex gap-6">
        <h2
          @click="change('login')"
          class="text-2xl font-bold cursor-pointer"
          :class="isLoginLocal ? 'text-black' : 'text-gray-500'"
        >
          Login
        </h2>

        <h2
          @click="change('register')"
          class="text-2xl font-bold cursor-pointer"
          :class="!isLoginLocal ? 'text-black' : 'text-gray-500'"
        >
          Register
        </h2>
      </div>

      <div class="border-b mt-2"></div>

      <!-- LOGIN FORM -->
      <div class="my-form flex flex-col gap-4 pt-6" v-if="isLoginLocal">
        <div>
            <label for="Phone Number">Phone Number</label>
            <input
              v-model="loginPhone"
              type="text"
              placeholder="Enter phone number"
              class="w-full h-12 border border-gray-300 rounded-xl px-4 outline-none focus:ring-2 focus:ring-orange-400"
            />
        </div>
        <div>
            <label for="Password">Password
            </label>
            <input
              v-model="loginPassword"
              type="password"
              placeholder="Enter password"
              class="w-full h-12 border border-gray-300 rounded-xl px-4 outline-none focus:ring-2 focus:ring-orange-400"
            />
        </div>


        <button class="h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold duration-300">
          Login
        </button>

        <p class="text-center text-gray-500 text-sm cursor-pointer">
          Forgot Your Password?
        </p>

        <!-- Facebook --> 
         <button class="border border-gray-300 rounded-xl h-12 flex items-center gap-4 px-4 hover:bg-gray-100 duration-300"> 
            <img src="https://cdn-icons-png.flaticon.com/256/3670/3670124.png" width="25"/> 
            <span class="w-75">Continue with Facebook</span> 
        </button>

        <!-- Google -->
        <button class="border border-gray-300 rounded-xl h-12 flex items-center gap-4 px-4 hover:bg-gray-100 duration-300">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/250px-Google_Favicon_2025.svg.png" width="25" />
          <span class="w-75">Login with Google</span>
        </button>

        <p class="text-center text-sm text-gray-500">
          Don't have account ?
          <span @click="change('register')" class="text-orange-500 font-bold cursor-pointer">
            Register
          </span>
        </p>
      </div>

      <!-- REGISTER FORM -->
      <div class="my-form flex flex-col gap-4 pt-6" v-else>
        <!-- GENDER -->
        <div>
          <label class="block mb-1">Gender</label>
          <div class="flex gap-4">
            <label class="flex items-center gap-2">
              <input type="radio" value="male" v-model="registerGender" />
              Male
            </label>

            <label class="flex items-center gap-2">
              <input type="radio" value="female" v-model="registerGender" />
              Female
            </label>
          </div>
        </div>

        <!-- NAME -->
        <div class="flex gap-2">
          <div class="w-full">
            <label>First Name</label>
            <input
              v-model="registerFirstName"
              type="text"
              placeholder="Enter first name"
              class="w-full h-12 border border-gray-300 rounded-xl px-4 outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div class="w-full">
            <label>Last Name</label>
            <input
              v-model="registerLastName"
              type="text"
              placeholder="Enter last name"
              class="w-full h-12 border border-gray-300 rounded-xl px-4 outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
        </div>

        <!-- PHONE -->
        <div>
          <label>Phone Number</label>
          <input
            v-model="registerPhone"
            type="text"
            placeholder="Enter phone number"
            class="w-full h-12 border border-gray-300 rounded-xl px-4 outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <!-- PASSWORD -->
        <div>
          <label>Password</label>
          <input
            v-model="registerPassword"
            type="password"
            placeholder="Enter password"
            class="w-full h-12 border border-gray-300 rounded-xl px-4 outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <!-- COUNTRY / PROVINCE -->
        <div class="flex gap-2">
          <select
            v-model="country"
            class="w-full h-12 border border-gray-300 rounded-xl px-4 outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option disabled value="">Select Country</option>
            <option value="kh">Cambodia</option>
            <option value="th">English</option>
          </select>

          <select
            v-model="province"
            class="w-full h-12 border border-gray-300 rounded-xl px-4 outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option disabled value="">Select Province</option>
            <option value="pp">Phnom Penh</option>
            <option value="sr">Siem Reap</option>
          </select>
        </div>

        <button class="h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold duration-300">
          Register
        </button>

        <p class="text-center text-gray-500">OR</p>

        <!-- Facebook -->
        <button class="border border-gray-300 rounded-xl h-12 flex items-center gap-4 px-4 hover:bg-gray-100 duration-300">
          <img src="https://cdn-icons-png.flaticon.com/256/3670/3670124.png" width="25" />
          <span class="w-75">Continue with Facebook</span>
        </button>

        <!-- Google -->
        <button class="border border-gray-300 rounded-xl h-12 flex items-center gap-4 px-4 hover:bg-gray-100 duration-300">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/250px-Google_Favicon_2025.svg.png" width="25" />
          <span class="w-75">Continue with Google</span>
        </button>

        <p class="text-center text-sm text-gray-500">
          Already have account ?
          <span @click="change('login')" class="text-orange-500 font-bold cursor-pointer">
            Login
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"

/* props */
const props = defineProps({
  isLogin: Boolean
})

const emit = defineEmits(["update:isLogin", "close"])

/* computed (BEST PRACTICE - no watch needed) */
const isLoginLocal = computed({
  get: () => props.isLogin,
  set: (val) => emit("update:isLogin", val)
})

/* CHANGE TAB */
function change(type) {
  isLoginLocal.value = type === "login"
}

/* CLOSE */
function closeForm() {
  emit("close")
}

/* LOGIN */
const loginPhone = ref("")
const loginPassword = ref("")

/* REGISTER */
const registerFirstName = ref("")
const registerLastName = ref("")
const registerPhone = ref("")
const registerPassword = ref("")
const registerGender = ref("")
const country = ref("")
const province = ref("")
</script>