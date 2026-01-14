// api/chat.js
const fs = require("fs");
const path = require("path");
const OpenAI = require("openai").default;
require("dotenv").config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body || {};

  if (!message || message.length > 300) {
    return res.json({
      reply: "Please ask a short, clear question.",
    });
  }

  const knowledgePath = path.join(
    process.cwd(),
    "data",
    "sam-engineering.md"
  );

  const knowledge = fs.readFileSync(knowledgePath, "utf8");

  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `You are a professional assistant for S.A.M Engineering. Only answer using the information below. If the question is outside this information, direct the user to contact the company.\n\n${knowledge}`,
      },
      { role: "user", content: message },
    ],
  });

  res.status(200).json({
    reply: completion.choices[0].message.content,
  });
};
