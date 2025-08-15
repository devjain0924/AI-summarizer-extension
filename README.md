# 🤖 AI Article Summarizer

A Chrome extension that summarizes web articles using Google's Gemini AI. ✨

## 🚀 Features

- ⚡ Summarize any webpage in seconds
- 📝 3 summary types: Brief, Detailed, or Bullet Points
- 📋 Copy summaries to clipboard
- 🔐 Secure API key storage

## ⚙️ Setup

1. **🔑 Get API Key**: Go to [Google AI Studio](https://makersuite.google.com/app/apikey) and create a Gemini API key

2. **📦 Install Extension**:
   - Download or clone this repo
   - Open Chrome → `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the folder

3. **⚡ Add API Key**:
   - Click the extension icon
   - Enter your API key when prompted
   - Click "Save"

## 📖 How to Use

1. 🌐 Go to any article webpage
2. 🖱️ Click the extension icon
3. 🎯 Choose summary type
4. ▶️ Click "Summarize This Page"
5. 📋 Copy the result

## 📁 File Structure

```
ai-article-summarizer/
├── 📄 manifest.json      # Extension configuration
├── 🎨 popup.html         # Main popup interface
├── ⚙️ popup.js           # Popup logic & AI integration
├── 📝 content.js         # Text extraction from webpages
├── 🔧 background.js      # Extension lifecycle management
├── ⚙️ options.html       # Settings page
├── 🔑 options.js         # API key management
└── 📖 README.md          # You are here!
```

## 🛠️ Files

## 🛠️ Tech Stack

- 🎨 `popup.html/js` - Main interface with modern UI
- 📝 `content.js` - Smart text extraction from webpages
- 🔧 `background.js` - Extension initialization & setup
- ⚙️ `options.html/js` - Secure settings management

## 📋 Requirements

- 🌐 Chrome browser
- 🔑 Gemini API key (free from Google)

---

⭐ **That's it! Simple article summarization with AI.** ⭐
