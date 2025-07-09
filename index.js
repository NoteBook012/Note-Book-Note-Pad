const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config(); // Used for local development

const app = express();
const port = process.env.PORT || 3001; // Render sets this automatically

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/generate', async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required.' });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.json({ generated_text: text });

  } catch (error) {
    console.error("Error in /generate endpoint:", error);
    res.status(500).json({ error: 'Failed to generate content from Google AI.' });
  }
});

// ✅ Add this GET route to fix "Cannot GET /"
app.get("/", (req, res) => {
  res.send("✅ Gemini AI Backend is Live");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
