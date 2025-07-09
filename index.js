const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config(); // Used for local development

// Initialize the express app
const app = express();
const port = process.env.PORT || 3001; // Render will set the PORT environment variable

// Use middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Allow the server to parse JSON request bodies

// Access your API key from environment variables
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);

// Define the API endpoint for generating content
app.post('/generate', async (req, res) => {
  try {
    const { prompt } = req.body;

    // Basic validation
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required.' });
    }

    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Send the generated text back to the frontend
    res.json({ generated_text: text });

  } catch (error) {
    console.error("Error in /generate endpoint:", error);
    res.status(500).json({ error: 'Failed to generate content from Google AI.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});