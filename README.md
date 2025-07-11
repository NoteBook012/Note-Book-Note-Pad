<div id="header" align="center">
  <img src="https://media.giphy.com/media/M9gbBd9nbDrOTu1Mqx/giphy.gif" width="100"/>
  <h1>
    Hi there, I'm Bishal Mishra
    <a href="https://bishalmishra.com"><img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="30px"/></a>
  </h1>
</div>

<div id="bio" align="center">
  <p>
    <strong><a href="https://bishalmishra.com">bishalmishra.com</a></strong>
  </p>
  <p>
    I'm a <strong>[Developer / CEO Of Note Pad </strong> based in <strong>[Location - Kathmandu, Nepal]</strong>. 
    <br/>
    I'm passionate about building scalable, efficient, and user-friendly applications. My goal is to leverage technology to solve real-world problems and create meaningful impact.
  </p>
</div>

---
# NoteBook - A Simple & Fast Online Notepad

<p align="center">
  <img src="https://i.ibb.co/3mDDhKVv/favicon.png" alt="NoteBook Logo" width="128">
</p>

A clean, minimalist, and fast-loading web-based notepad. Write down your thoughts, notes, or code snippets instantly without any distractions. Your notes are automatically saved to your browser's local storage, ensuring you never lose your work.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/NoteBook012/Note-Book-Note-Pad?style=social)](https://github.com/NoteBook012/Note-Book-Note-Pad/stargazers)

---


# 📝 Note P@d - Your All-in-One Digital Workspace with AI

Note P@d is a versatile, browser-based productivity application designed for modern needs. It combines a powerful text editor, a dynamic digital whiteboard, a simple to-do list manager, a calendar, and a cutting-edge AI Assistant into one seamless experience. It's fast, secure, works offline, and is packed with features to help you create, organize, and achieve.

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=google-chrome)](https://bishalmishra.com)



## ✨ Core Features

Note P@d is more than just a notepad. It's a suite of tools designed to work harmoniously together.

### 🤖 AI-Powered Assistant
Integrated directly into the application, the AI Assistant is your intelligent companion for a wide range of tasks.
- **Conversational AI:** Ask questions, brainstorm ideas, get summaries, and more.
- **Image Understanding:** Upload an image and ask questions about it.
- **Voice Commands:** Use your voice to interact with the assistant for a hands-free experience.
- **Creator Context:** The AI knows its creator, Bishal Mishra, and can provide information about him.

### 📓 Modern Notepad
A clean, distraction-free writing environment with powerful features.
- **Rich Text Editing:** Focus on your writing with a simple and intuitive interface.
- **Autosave:** Your work is automatically saved to your browser's local storage, so you never lose a note.
- **Word & Character Count:** Real-time stats to keep track of your document's length.
- **Find & Replace:** Quickly search for and substitute text within your notes.
- **Font & Size Customization:** Personalize your writing experience with different fonts and sizes.
- **Undo/Redo:** Easily correct mistakes with multi-level undo and redo.
- **PDF Export:** Save your notes as professional-looking PDF files with a single click.

### 🎨 Digital Whiteboard
A flexible canvas for your ideas, sketches, and diagrams.
- **Freeform Drawing:** Sketch and draw with various brush sizes and colors.
- **Eraser Tool:** Clean up mistakes or refine your drawings.
- **Download as PNG:** Export your entire whiteboard as a high-quality PNG image.

### ✅ To-Do List Manager
A simple yet effective way to manage your tasks.
- **Dynamic List:** Add, check off, and edit tasks on the fly.
- **Completion Tracking:** Completed items are visually distinguished for clarity.
- **Integrated Savings:** Save your to-do lists as notes for future reference.

### 🗓️ Interactive Calendar
Organize your schedule and view dates at a glance.
- **Month Navigation:** Easily switch between months.
- **Current Day Highlight:** Today's date is always highlighted for quick reference.

### 🔐 User & Note Management
Secure and personalized note-keeping.
- **Full Authentication:** Sign up/in with email and password or with your Google account.
- **Secure Note Storage:** Saved notes are tied to your user account.
- **Note Pinning:** Keep your most important notes at the top of the list.
- **Note Locking:** Protect sensitive notes with a password.
- **Profile Management:** Update your profile picture, verify your email, and reset your password.

### 🌐 Web & User Experience
Built with modern web standards for a premium experience.
- **Progressive Web App (PWA):** Install the app on your desktop or mobile device for an app-like experience.
- **Offline Functionality:** Caches necessary files so you can use it even without an internet connection.
- **Dark & Light Mode:** Switch between themes for your viewing comfort.
- **Live Clock & Weather:** A convenient, real-time clock and location-based weather display in the header.
- **Responsive Design:** A seamless experience across all devices, from desktop to mobile.
- **Cookie Consent:** Complies with standard web practices for user consent.

## 🚀 How to Setup and Run
This project is a self-contained `index.html` file, making it incredibly simple to deploy.

### Step 1: Get Your API Key
The AI Assistant requires a Google AI API key to function.

1.  Go to **[Google AI Studio](https://aistudio.google.com/app/apikey)**.
2.  Sign in and click **"Create API key"**.
3.  Copy your new API key. **Keep this key private.**

### Step 2: Add Your API Key to `index.html`
You need to place your secret API key directly into the `index.html` file.

1.  Open the `index.html` file in a text editor.
2.  Find this line of code (it's inside a `<script type="module">` tag near the end of the file):
    ```javascript
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    ```
3.  **Replace** `process.env.API_KEY` with your actual API key inside single quotes.

    For example, if your key is `AIzaSy...`, the line should look like this:
    ```javascript
    const ai = new GoogleGenAI({ apiKey: 'AIzaSy...' });
    ```

> **Security Warning:** This method is simple but makes your API key public. For a personal project, this is acceptable. For a large-scale production app, you should use a backend server to protect your key.

### Step 3: Deploy to GitHub Pages
Simply commit and push the updated `index.html` file to the GitHub repository that hosts your website. GitHub Pages will handle the rest.

## 🛠️ Technology Stack
- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **AI Integration:** [Google Gemini API](https://ai.google.dev/) (`gemini-2.5-flash`)
- **UI Framework (for AI Chat):** [React](https://react.dev/), [htm](https://github.com/developit/htm)
- **Styling (for AI Chat):** [Tailwind CSS](https://tailwindcss.com/)
- **Libraries:** [jsPDF](https://github.com/parallax/jsPDF) for PDF export, [Font Awesome](https://fontawesome.com/) for icons.
- **Hosting:** [GitHub Pages](https://pages.github.com/)

## 👨‍💻 Author
This application was designed and developed by **Bishal Mishra**.

---
*Copyright © 2025 Bishal Mishra | All Rights Reserved.*
