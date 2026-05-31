<template>
  <div
    :class="
      DarkMode.isDark
        ? 'bg-gray-950 text-white min-h-screen'
        : 'bg-gray-50 text-black min-h-screen'
    "
  >

    <div class="max-w-5xl mx-auto px-4 py-10">
      <h1 class="text-3xl font-bold mb-8">
        Checkout
      </h1>

      <div class="grid lg:grid-cols-5 gap-8">
        <!-- FORM -->
        <div class="lg:col-span-3 space-y-6">

          <!-- SHIPPING -->
          <div
            :class="DarkMode.isDark ? 'bg-gray-800' : 'bg-white'"
            class="rounded-2xl p-6 shadow-sm"
          >
            <h2 class="font-semibold text-lg mb-4">
              Shipping Information
            </h2>

            <div class="grid grid-cols-2 gap-4">

              <!-- FIRST NAME -->
              <div>
                <label class="block text-sm font-medium mb-1">
                  First Name
                </label>

                <input
                  v-model="form.firstName"
                  type="text"
                  placeholder="John"
                  class="w-full border rounded-xl px-4 py-2.5 text-sm outline-none transition"
                  :class="[
                    DarkMode.isDark
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-gray-50 border-gray-200',
                    errors.firstName ? 'border-red-500' : ''
                  ]"
                />

                <p
                  v-if="errors.firstName"
                  class="text-red-500 text-xs mt-1"
                >
                  {{ errors.firstName }}
                </p>
              </div>

              <!-- LAST NAME -->
              <div>
                <label class="block text-sm font-medium mb-1">
                  Last Name
                </label>

                <input
                  v-model="form.lastName"
                  type="text"
                  placeholder="Doe"
                  class="w-full border rounded-xl px-4 py-2.5 text-sm outline-none transition"
                  :class="[
                    DarkMode.isDark
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-gray-50 border-gray-200',
                    errors.lastName ? 'border-red-500' : ''
                  ]"
                />

                <p
                  v-if="errors.lastName"
                  class="text-red-500 text-xs mt-1"
                >
                  {{ errors.lastName }}
                </p>
              </div>

              <!-- EMAIL -->
              <div class="col-span-2">
                <label class="block text-sm font-medium mb-1">
                  Email
                </label>

                <input
                  v-model="form.email"
                  type="email"
                  placeholder="you@example.com"
                  class="w-full border rounded-xl px-4 py-2.5 text-sm outline-none transition"
                  :class="[
                    DarkMode.isDark
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-gray-50 border-gray-200',
                    errors.email ? 'border-red-500' : ''
                  ]"
                />

                <p
                  v-if="errors.email"
                  class="text-red-500 text-xs mt-1"
                >
                  {{ errors.email }}
                </p>
              </div>

              <!-- ADDRESS -->
              <div class="col-span-2">
                <label class="block text-sm font-medium mb-1">
                  Address
                </label>

                <input
                  v-model="form.address"
                  type="text"
                  placeholder="123 Main St"
                  class="w-full border rounded-xl px-4 py-2.5 text-sm outline-none transition"
                  :class="[
                    DarkMode.isDark
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-gray-50 border-gray-200',
                    errors.address ? 'border-red-500' : ''
                  ]"
                />

                <p
                  v-if="errors.address"
                  class="text-red-500 text-xs mt-1"
                >
                  {{ errors.address }}
                </p>
              </div>

              <!-- CITY -->
              <div>
                <label class="block text-sm font-medium mb-1">
                  City
                </label>

                <input
                  v-model="form.city"
                  type="text"
                  placeholder="City"
                  class="w-full border rounded-xl px-4 py-2.5 text-sm outline-none transition"
                  :class="[
                    DarkMode.isDark
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-gray-50 border-gray-200',
                    errors.city ? 'border-red-500' : ''
                  ]"
                />

                <p
                  v-if="errors.city"
                  class="text-red-500 text-xs mt-1"
                >
                  {{ errors.city }}
                </p>
              </div>

              <!-- ZIP -->
              <div>
                <label class="block text-sm font-medium mb-1">
                  ZIP Code
                </label>

                <input
                  v-model="form.zip"
                  type="text"
                  placeholder="00000"
                  class="w-full border rounded-xl px-4 py-2.5 text-sm outline-none transition"
                  :class="[
                    DarkMode.isDark
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-gray-50 border-gray-200',
                    errors.zip ? 'border-red-500' : ''
                  ]"
                />

                <p
                  v-if="errors.zip"
                  class="text-red-500 text-xs mt-1"
                >
                  {{ errors.zip }}
                </p>
              </div>
            </div>
          </div>

          <!-- PAYMENT -->
          <div
            :class="DarkMode.isDark ? 'bg-gray-800' : 'bg-white'"
            class="rounded-2xl p-6 shadow-sm"
          >
            <h2 class="font-semibold text-lg mb-4">
              Payment
            </h2>

            <div class="space-y-4">

              <!-- CARD -->
              <div>
                <label class="block text-sm font-medium mb-1">
                  Card Number
                </label>

                <input
                  v-model="form.cardNumber"
                  type="text"
                  placeholder="4242 4242 4242 4242"
                  maxlength="19"
                  class="w-full border rounded-xl px-4 py-2.5 text-sm outline-none transition"
                  :class="[
                    DarkMode.isDark
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-gray-50 border-gray-200',
                    errors.cardNumber ? 'border-red-500' : ''
                  ]"
                />

                <p
                  v-if="errors.cardNumber"
                  class="text-red-500 text-xs mt-1"
                >
                  {{ errors.cardNumber }}
                </p>
              </div>

              <div class="grid grid-cols-2 gap-4">

                <!-- EXPIRY -->
                <div>
                  <label class="block text-sm font-medium mb-1">
                    Expiry
                  </label>

                  <input
                    v-model="form.expiry"
                    type="text"
                    placeholder="MM / YY"
                    class="w-full border rounded-xl px-4 py-2.5 text-sm outline-none transition"
                    :class="[
                      DarkMode.isDark
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-gray-50 border-gray-200',
                      errors.expiry ? 'border-red-500' : ''
                    ]"
                  />

                  <p
                    v-if="errors.expiry"
                    class="text-red-500 text-xs mt-1"
                  >
                    {{ errors.expiry }}
                  </p>
                </div>

                <!-- CVV -->
                <div>
                  <label class="block text-sm font-medium mb-1">
                    CVV
                  </label>

                  <input
                    v-model="form.cvv"
                    type="text"
                    placeholder="123"
                    maxlength="4"
                    class="w-full border rounded-xl px-4 py-2.5 text-sm outline-none transition"
                    :class="[
                      DarkMode.isDark
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-gray-50 border-gray-200',
                      errors.cvv ? 'border-red-500' : ''
                    ]"
                  />

                  <p
                    v-if="errors.cvv"
                    class="text-red-500 text-xs mt-1"
                  >
                    {{ errors.cvv }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ORDER REVIEW -->
        <div class="lg:col-span-2">
          <div
            :class="DarkMode.isDark ? 'bg-gray-800' : 'bg-white'"
            class="rounded-2xl p-5 shadow-sm sticky top-24"
          >
            <h2 class="font-semibold mb-4">
              Order Review
            </h2>

            <div class="space-y-3 mb-4 max-h-64 overflow-y-auto pr-1">
              <div
                v-for="item in cart.items"
                :key="item.id"
                class="flex gap-3 items-center"
              >
                <img
                  :src="item.image[0]"
                  class="w-12 h-14 object-cover rounded-lg flex-shrink-0"
                />

                <div class="flex-1 min-w-0">
                  <p class="text-xs font-medium truncate">
                    {{ item.type }}
                  </p>

                  <p class="text-xs text-gray-400">
                    Qty: {{ item.quantity }}
                  </p>
                </div>

                <span class="text-sm font-semibold">
                  ${{
                    (
                      (
                        item.discount > 0
                          ? item.price -
                            (item.price * item.discount) / 100
                          : item.price
                      ) * item.quantity
                    ).toFixed(2)
                  }}
                </span>
              </div>
            </div>

            <div
              class="border-t pt-4 space-y-2 text-sm"
              :class="
                DarkMode.isDark
                  ? 'border-gray-600'
                  : 'border-gray-200'
              "
            >
              <div class="flex justify-between">
                <span class="text-gray-400">
                  Subtotal
                </span>

                <span>
                  ${{ cart.totalPrice.toFixed(2) }}
                </span>
              </div>

              <div class="flex justify-between">
                <span class="text-gray-400">
                  Shipping
                </span>

                <span class="text-green-500">
                  Free
                </span>
              </div>

              <div class="flex justify-between font-bold text-base pt-1">
                <span>Total</span>

                <span>
                  ${{ cart.totalPrice.toFixed(2) }}
                </span>
              </div>
            </div>

            <!-- BUTTON -->
            <button
              @click="placeOrder"
              class="w-full mt-5 bg-black text-white py-3.5 rounded-xl font-semibold hover:bg-gray-900 hover:scale-[1.02] active:scale-95 transition duration-300 shadow-lg"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import { useCart } from '../stores/useCart'
import { useDarkMode } from '../stores/DarkMode'
import { sendTelegram } from '../services/telegram.js'

const DarkMode = useDarkMode()
const cart = useCart()
const router = useRouter()
const toast = useToast()

// FORM
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  city: '',
  zip: '',
  cardNumber: '',
  expiry: '',
  cvv: '',
})

// ERRORS
const errors = reactive({
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  city: '',
  zip: '',
  cardNumber: '',
  expiry: '',
  cvv: '',
})

// VALIDATE
const validateForm = () => {
  let isValid = true

  Object.keys(errors).forEach((key) => {
    errors[key] = ''
  })

  if (!form.firstName.trim()) {
    errors.firstName = 'First name is required'
    isValid = false
  }

  if (!form.lastName.trim()) {
    errors.lastName = 'Last name is required'
    isValid = false
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!form.email.trim()) {
    errors.email = 'Email is required'
    isValid = false
  } else if (!emailRegex.test(form.email)) {
    errors.email = 'Invalid email address'
    isValid = false
  }

  if (!form.address.trim()) {
    errors.address = 'Address is required'
    isValid = false
  }

  if (!form.city.trim()) {
    errors.city = 'City is required'
    isValid = false
  }

  if (!form.zip.trim()) {
    errors.zip = 'ZIP code is required'
    isValid = false
  }

  const cardNumber = form.cardNumber.replace(/\s/g, '')

  if (!cardNumber) {
    errors.cardNumber = 'Card number is required'
    isValid = false
  } else if (cardNumber.length < 16) {
    errors.cardNumber = 'Invalid card number'
    isValid = false
  }

  if (!form.expiry.trim()) {
    errors.expiry = 'Expiry date is required'
    isValid = false
  }

  if (!form.cvv.trim()) {
    errors.cvv = 'CVV is required'
    isValid = false
  } else if (form.cvv.length < 3) {
    errors.cvv = 'Invalid CVV'
    isValid = false
  }

  return isValid
}

// PLACE ORDER
const placeOrder = async () => {

  // 1. Validate first
  if (!validateForm()) return

  // 2. Build order message
  const message = `
🛒 <b>NEW ORDER</b>

👤 Name: ${form.firstName} ${form.lastName}
📧 Email: ${form.email}

📍 Address:
${form.address}, ${form.city}, ${form.zip}

💳 Payment:
Card: **** **** **** ${form.cardNumber.slice(-4)}
Expiry: ${form.expiry}

📦 Items:
${cart.items.map(item =>
  `- ${item.type} x${item.quantity} - id :${item.id}`
).join("\n")}

💰 Total: $${cart.totalPrice.toFixed(2)}
`

  try {
    // 3. Send Telegram FIRST
    await sendTelegram(message)

    // 4. Success Toast
    toast.success(
      `✨ Congratulations ${form.firstName}! Your order has been placed successfully.`,
      {
        timeout: 4000,
        position: 'top-center',
        icon: '🛍️'
      }
    )

    // 5. Clear cart
    cart.clearCart()

    // 6. Reset form
    Object.keys(form).forEach((key) => {
      form[key] = ''
    })

    // 7. Redirect
    setTimeout(() => {
      router.push('/')
    }, 2000)

  } catch (error) {
    console.log(error)

    toast.error("Failed to place order ❌")
  }
}
</script>