const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

const TOKEN = '8836862263:AAGfdDIAUsbsGwXQgCjx5b0QN0-gIb6m_wQ';
const API_URL = 'https://ethicaltabbo.in/api/lookup';
const API_KEY = 'aditya';

const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    'Welcome! 10 digit mobile number bhejo.'
  );
});

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = (msg.text || '').trim();

  if (text === '/start') return;

  if (!/^[6-9]\\d{9}$/.test(text)) {
    return bot.sendMessage(chatId, 'Please valid 10 digit mobile number bhejo.');
  }

  try {
    const response = await axios.post(
      API_URL,
      { number: text },
      {
        headers: {
          Authorization: API_KEY
        }
      }
    );

    bot.sendMessage(chatId, JSON.stringify(response.data, null, 2));
  } catch (err) {
    bot.sendMessage(chatId, 'Lookup failed.');
  }
});

console.log('Bot is running...');
