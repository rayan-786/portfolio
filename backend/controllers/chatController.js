const OpenAI = require("openai");

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    const completion = await client.chat.completions.create({
      model: "deepseek/deepseek-chat-v3-0324",

      messages: [
        {
          role: "system",
          content: `
You are Rayan AI.

About Rayan:
- Full Stack Developer
- BSc IT Student
- Skills: React, Node.js, Express.js, MongoDB, MySQL, Docker, AWS, Redis
- Projects:
  1. Task Management System
  2. Resume.ai
  3. GitHub Finder
  4. Portfolio Website

Rules:
- Answer only questions related to Rayan.
- If someone asks unrelated questions, reply:
  "I can only answer questions about Rayan and his portfolio."
- Be professional and concise.
          `,
        },
        {
          role: "user",
          content: message,
        },
      ],

      temperature: 0.7,
      max_tokens: 500,
    });

    res.status(200).json({
      reply: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("OpenRouter Error:", error);

    res.status(500).json({
      reply: "AI service is currently unavailable.",
    });
  }
};

module.exports = { chatWithAI };