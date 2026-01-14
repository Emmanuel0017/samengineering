import type { VercelRequest, VercelResponse } from "@vercel/node";

const fs = require("fs");
const path = require("path");
const OpenAI = require("openai").default;

/**
 * @param {import("@vercel/node").VercelRequest} req
 * @param {import("@vercel/node").VercelResponse} res
 */
module.exports = async function handler(
    req: VercelRequest,
    res: VercelResponse
) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    if (!process.env.OPENAI_API_KEY) {
      throw new Error("OPENAI_API_KEY missing");
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

    if (!fs.existsSync(knowledgePath)) {
      throw new Error("Knowledge file not found");
    }

    const knowledge = fs.readFileSync(knowledgePath, "utf8");

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
You are a professional assistant for S.A.M Engineering.
Only answer using the information below.
If the question is outside this information, direct the user to contact the company.

${knowledge}
          `,
        },
        { role: "user", content: message },
      ],
    });

    return res.status(200).json({
      reply: completion.choices[0].message.content || "",
    });
  } catch (err) {
    console.error("Chat API error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
