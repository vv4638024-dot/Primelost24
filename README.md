# 🤖 OSINT Bot (API + Local)

A Telegram bot for phone number lookups using external API with local database fallback.

## Features
- 🔍 Search phone numbers via external API
- 📁 Local database fallback for offline/private records
- 📤 Add/delete records locally
- 📊 Database statistics
- 🔒 Private & secure

## Deployment (Render.com)
1. Fork this repo
2. Go to [Render.com](https://render.com)
3. Create new **Background Worker**
4. Connect your GitHub repo
5. Build Command: `pip install -r requirements.txt`
6. Start Command: `python bot.py`
7. Add environment variable: `BOT_TOKEN`

## Local Run
```bash
pip install -r requirements.txt
python bot.py
