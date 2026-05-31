import { defineStore } from "pinia"
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useToast } from "vue-toastification"
import { sendTelegram } from "../services/telegram"
export const useAuth = defineStore("auth", () => {
  const toast = useToast()
  const router = useRouter()
  // LOGIN STATUS
  const isLogin = ref(localStorage.getItem("status") === "true")

  // USER INFO
  const userInfo = ref({
    name: localStorage.getItem("name") || "",
    email: localStorage.getItem("email") || "",
    password: localStorage.getItem("password") || "",
  })

  // REGISTER
  const register = async (name, email, password) => {
    userInfo.value = { name, email, password }

    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
    localStorage.setItem("password", password)

    router.push("/login")

    // Toast
    toast.success(`Welcome ${name} 🎉 Register Successfully`, {
      timeout: 2000,
      position: "bottom-right",
    })

    // Telegram Notification
    await sendTelegram(
      `🆕 <b>New User Register</b>\n👤 Name: ${name}\n📧 Email: ${email}`
    )
  }

  // LOGIN
  const login = async (email, password) => {
    if (email !== userInfo.value.email) {
      toast.error("Wrong email")
      return
    }

    if (password !== userInfo.value.password) {
      toast.error("Wrong password")
      return
    }

    isLogin.value = true
    localStorage.setItem("status", "true")

    router.push("/")

    // Toast
    toast.success(`Hi ${userInfo.value.name} 👋 Login Successfully`, {
      timeout: 2000,
      position: "bottom-right",
    })

    // Telegram Notification
    await sendTelegram(
      `🔐 <b>User Login</b>\n👤 Name: ${userInfo.value.name}\n📧 Email: ${email}`
    )
  }

  // LOGOUT
  const logout = async () => {
    isLogin.value = false
    localStorage.removeItem("status")

    router.push("/")

    // Toast
    toast.info(`See you again ${userInfo.value.name} 👋`, {
      timeout: 2000,
      position: "bottom-right",
    })

    // Telegram Notification
    await sendTelegram(
      `🚪 <b>User Logout</b>\n👤 Name: ${userInfo.value.name}`
    )
  }

  return {
    isLogin,
    userInfo,
    register,
    login,
    logout
  }
})