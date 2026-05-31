<template>
  <div
    :class="DarkMode.isDark ? 'bg-gray-950 text-white' : 'bg-gray-50 text-black'"
    class="min-h-screen flex items-center justify-center px-4"
  >

    <!-- Card -->
    <div
      :class="DarkMode.isDark ? 'bg-gray-800' : 'bg-white'"
      class="w-full max-w-md rounded-2xl shadow-lg p-8"
    >

      <!-- Back -->
      <RouterLink
        to="/"
        class="text-blue-500 hover:underline inline-flex items-center gap-2 mb-4"
      >
        <i class="bi bi-arrow-bar-left"></i>
        Back to Home
      </RouterLink>

      <!-- Title -->
      <h1 class="text-2xl font-bold mb-1">
        Welcome back
      </h1>

      <p class="text-sm text-gray-400 mb-6">
        Sign in to your account
      </p>

      <!-- Form -->
      <div class="space-y-4">

        <!-- Email -->
        <div>
          <label class="block text-sm font-medium mb-1">
            Email
          </label>

          <input
            v-model="email"
            type="email"
            placeholder="you@example.com"
            class="w-full border rounded-xl px-4 py-3 text-sm outline-none transition"
            :class="
              DarkMode.isDark
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-white'
                : 'bg-gray-50 border-gray-200 focus:border-black'
            "
          />
        </div>

        <!-- Password -->
        <div>
          <label class="block text-sm font-medium mb-1">
            Password
          </label>

          <div class="relative">

            <input
              v-model="password"
              :type="showPass ? 'text' : 'password'"
              placeholder="••••••••"
              class="w-full border rounded-xl px-4 py-3 text-sm outline-none transition pr-10"
              :class="
                DarkMode.isDark
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-white'
                  : 'bg-gray-50 border-gray-200 focus:border-black'
              "
            />

            <!-- Show Password -->
            <button
              @click="showPass = !showPass"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              <i :class="showPass ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
            </button>

          </div>
        </div>

        <!-- Remember -->
        <div class="flex justify-between items-center text-sm">

          <label class="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              v-model="remember"
              class="accent-black"
            />
            Remember me
          </label>

          <a href="#" class="text-blue-500 hover:underline">
            Forgot password?
          </a>

        </div>

        <!-- Login Button -->
        <button
          @click="login"
          class="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
        >
          Sign In
        </button>

      </div>

      <!-- Register -->
      <p class="text-center text-sm text-gray-400 mt-6">
        Don't have an account?

        <RouterLink
          to="/register"
          class="text-blue-500 hover:underline"
        >
          Sign up
        </RouterLink>
      </p>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useToast } from 'vue-toastification'
import { useDarkMode } from '../stores/DarkMode'
import { useAuth } from '../stores/auth'

const DarkMode = useDarkMode()
const auth = useAuth()
const toast = useToast()

const email = ref('')
const password = ref('')
const remember = ref(false)
const showPass = ref(false)

// Login Function
const login = () => {

  // Validation
  if (!email.value || !password.value) {
    toast.error('Please fill all fields')
    return
  }

  // Login
  auth.login(
    email.value,
    password.value
  )
  // Remember Me
  if (remember.value) {
    localStorage.setItem('rememberEmail', email.value)
  } else {
    localStorage.removeItem('rememberEmail')
  }
}
</script>