import axios from "axios"

const BOT_TOKEN = "8701929566:AAHp8BNyB0EdZkv3VNXnUagfh6QH9h5fJjc"
const CHAT_ID = "6816897431"

// Send message to Telegram
export const sendTelegram = async (text) => {
  try {
    return await axios.post(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        chat_id: CHAT_ID,
        text,
        parse_mode: "HTML"
      }
    )
  } catch (error) {
    console.log("Telegram error:", error)
  }
}