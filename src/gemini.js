const { GoogleGenerativeAI } = require("@google/generative-ai");
const API_KEY = "AIzaSyC-wXVEsB3VmuNwKgF838DdbC9Oab88Q4k"

const genAI = new GoogleGenerativeAI(API_KEY);

async function generateContent() {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = "Write a story about a magic backpack.";

    try {
      const result = await model.generateContent(prompt);
      console.log(result.response.text()); // Output the result
    } catch (error) {
      console.error("Error generating content:", error);
    }
  }

  generateContent();